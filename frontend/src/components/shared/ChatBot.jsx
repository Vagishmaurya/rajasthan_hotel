import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const ChatContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 2000;
  font-family: 'Inter', sans-serif;

  .chat-bubble {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #C0392B, #D4A017);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    box-shadow: 0 8px 30px rgba(192, 57, 43, 0.4);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &:hover { transform: scale(1.1) rotate(5deg); }
  }

  .chat-window {
    position: absolute;
    bottom: 80px;
    right: 0;
    width: 360px;
    height: 500px;
    background: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 15px 50px rgba(0,0,0,0.15);
    overflow: hidden;
    transform-origin: bottom right;
    animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    @keyframes slideUp {
      from { transform: scale(0.5) translateY(100px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }

    .chat-header {
      background: linear-gradient(135deg, #2C1810, #4A2C1A);
      padding: 20px;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .bot-info {
        display: flex;
        align-items: center;
        gap: 12px;
        .bot-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D4A017;
        }
        .status {
          h4 { font-family: 'Playfair Display', serif; font-size: 16px; margin: 0; color: #D4A017; }
          span { font-size: 11px; opacity: 0.7; display: flex; align-items: center; gap: 4px; 
            &::before { content: ''; width: 6px; height: 6px; background: #27AE60; border-radius: 50%; }
          }
        }
      }
      .close-btn { cursor: pointer; opacity: 0.7; transition: 0.2s; &:hover { opacity: 1; } }
    }

    .messages-area {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      background: #fdfaf7;

      .msg {
        max-width: 80%;
        padding: 12px 16px;
        border-radius: 15px;
        font-size: 14px;
        line-height: 1.5;
        
        &.bot {
          background: white;
          color: #2C1810;
          align-self: flex-start;
          border-bottom-left-radius: 2px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
        }
        
        &.user {
          background: #C0392B;
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 2px;
        }
      }

      .typing {
        font-size: 12px;
        color: #8B7355;
        font-style: italic;
        margin-bottom: 5px;
      }
    }

    .suggestions {
      padding: 10px 20px;
      display: flex;
      gap: 8px;
      overflow-x: auto;
      background: #fdfaf7;
      &::-webkit-scrollbar { display: none; }
      
      button {
        white-space: nowrap;
        padding: 6px 14px;
        background: white;
        border: 1px solid #E6D5C3;
        border-radius: 20px;
        font-size: 12px;
        color: #8B7355;
        cursor: pointer;
        transition: 0.2s;
        &:hover { background: #FDF2E9; border-color: #D4A017; color: #D4A017; }
      }
    }

    .input-area {
      padding: 15px 20px;
      background: white;
      border-top: 1px solid #eee;
      display: flex;
      gap: 10px;

      input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 14px;
        &::placeholder { color: #aaa; }
      }

      .send-btn {
        background: none;
        border: none;
        color: #C0392B;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        transition: 0.2s;
        &:hover { transform: scale(1.1); }
      }
    }
  }
`;

const responses = {
    "best time": "The best time to visit Rajasthan is from October to March when the weather is pleasant for sightseeing and desert activities.",
    "safari": "You can book our Desert Safaris directly from the Safari page. We offer Camel rides and Jeep Dune Bashing in Jaisalmer and Bikaner. All bookings include a traditional Rajasthani dinner!",
    "packages": "Our Tour Packages are all-inclusive, covering heritage hotel stays, local transport in our Mahindra Thars, and guided city tours.",
    "thar": "The Mahindra Thar (Desert Explorer) is our signature vehicle! It's rugged, comfortable, and perfect for the Rajasthani terrain. You can rent it via our Car Rentals section.",
    "udaipur": "In Udaipur, we highly recommend the Lake View Resort for its stunning views of Lake Pichola. Check it out in our Hotels section!",
    "default": "I'm the Rajasthan Stays assistant. I can help you with hotel bookings, car rentals, or safari inquiries. How can I assist your royal journey today?"
};

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: "bot", text: "Khamma Ghani! I am your Rajasthan Stays assistant. How can I help you plan your royal trip today?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = (text) => {
        const userMsg = text || input;
        if (!userMsg.trim()) return;

        setMessages([...messages, { type: "user", text: userMsg }]);
        setInput("");
        setIsTyping(true);

        // Simulate bot delay
        setTimeout(() => {
            let botResponse = responses.default;
            const lowerLower = userMsg.toLowerCase();

            if (lowerLower.includes("time") || lowerLower.includes("when")) botResponse = responses["best time"];
            else if (lowerLower.includes("safari") || lowerLower.includes("desert")) botResponse = responses["safari"];
            else if (lowerLower.includes("package")) botResponse = responses["packages"];
            else if (lowerLower.includes("thar") || lowerLower.includes("car")) botResponse = responses["thar"];
            else if (lowerLower.includes("udaipur")) botResponse = responses["udaipur"];

            setMessages(prev => [...prev, { type: "bot", text: botResponse }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <ChatContainer>
            {isOpen ? (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="bot-info">
                            <div className="bot-avatar"><SmartToyIcon /></div>
                            <div className="status">
                                <h4>Royal Assistant</h4>
                                <span>Online</span>
                            </div>
                        </div>
                        <CloseIcon className="close-btn" onClick={() => setIsOpen(false)} />
                    </div>

                    <div className="messages-area" ref={scrollRef}>
                        {messages.map((m, i) => (
                            <div key={i} className={`msg ${m.type}`}>{m.text}</div>
                        ))}
                        {isTyping && <div className="typing">Assistant is typing...</div>}
                    </div>

                    <div className="suggestions">
                        <button onClick={() => handleSend("Best time to visit?")}>Best time to visit?</button>
                        <button onClick={() => handleSend("Book a Safari")}>Safari details</button>
                        <button onClick={() => handleSend("Tell me about Thar")}>Mahindra Thar</button>
                    </div>

                    <div className="input-area">
                        <input
                            placeholder="Ask anything about Rajasthan..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button className="send-btn" onClick={() => handleSend()}><SendIcon /></button>
                    </div>
                </div>
            ) : (
                <div className="chat-bubble" onClick={() => setIsOpen(true)}>
                    <ChatIcon style={{ fontSize: 30 }} />
                </div>
            )}
        </ChatContainer>
    );
};

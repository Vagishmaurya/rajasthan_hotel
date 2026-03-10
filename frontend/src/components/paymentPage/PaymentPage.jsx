import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { hotels, carRentals, desertSafaris, popularPackages } from "../../data/rajasthanData";
import styled from "styled-components";
import { TopNav } from "../shared/TopNav";
import SecurityIcon from "@mui/icons-material/Security";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

const PaymentWrapper = styled.div`
  background: #f8f9fa;
  min-height: 100vh;
  padding-bottom: 60px;

  .payment-container {
    max-width: 900px;
    margin: 40px auto;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 30px;
    padding: 0 20px;

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      margin: 20px auto;
    }
  }

  .payment-main {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    overflow: hidden;

    .rzp-header {
      background: #121212;
      color: white;
      padding: 20px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 480px) {
        padding: 15px 20px;
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        img { height: 24px; }
        span { font-weight: 700; letter-spacing: 0.5px; font-size: 18px; }
      }

      .security {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        opacity: 0.8;
        @media (max-width: 480px) { display: none; }
      }
    }

    .payment-methods {
      padding: 30px;

      @media (max-width: 480px) { padding: 20px; }

      h2 { font-size: 20px; margin-bottom: 25px; color: #333; }

      .method-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .method-item {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        transition: all 0.2s;

        @media (max-width: 480px) { padding: 12px 15px; gap: 10px; }

        &:hover { border-color: #3399cc; background: #f0f7ff; }
        &.active { border-color: #3399cc; background: #f0f7ff; border-width: 2px; }

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3399cc;
          flex-shrink: 0;
        }

        .info {
          flex: 1;
          .name { font-weight: 600; font-size: 15px; color: #333; @media (max-width: 480px) { font-size: 14px; } }
          .sub { font-size: 12px; color: #666; margin-top: 2px; }
        }
      }
    }

    .pay-footer {
      padding: 20px 30px;
      background: #fafafa;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 480px) { flex-direction: column; gap: 15px; padding: 20px; }

      .total {
        .label { font-size: 12px; color: #666; }
        .amount { display: block; font-size: 22px; font-weight: 800; color: #333; }
        @media (max-width: 480px) { text-align: center; }
      }

      .pay-btn {
        padding: 14px 40px;
        background: #3399cc;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s;

        @media (max-width: 480px) { width: 100%; }

        &:hover { background: #2b82ad; }
        &:disabled { background: #ccc; cursor: not-allowed; }
      }
    }
  }

  .summary-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    height: fit-content;

    @media (max-width: 968px) { order: -1; }

    h3 { font-size: 18px; margin-bottom: 20px; color: #333; }

    .item-preview {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;

      img { width: 80px; height: 60px; border-radius: 6px; object-fit: cover; }
      .info {
        h4 { font-size: 15px; color: #333; margin-bottom: 2px; }
        p { font-size: 12px; color: #666; }
      }
    }

    .cost-breakdown {
      .row {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;

        &.total-row {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 2px solid #eee;
          font-weight: 800;
          color: #333;
          font-size: 18px;
        }
      }
    }
  }

  .processing-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,0.9);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;

    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3399cc;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    h2 { color: #333; font-size: 24px; @media (max-width: 480px) { font-size: 20px; } }
  }
`;

export const PaymentPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("upi");
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Determine type from local storage or params
        const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");
        const type = bookingData.type || "hotel";

        let found = null;
        if (type === "hotel") found = hotels.find(h => h.id === Number(id));
        else if (type === "car") found = carRentals.find(c => c.id === Number(id));
        else if (type === "safari") found = desertSafaris.find(s => s.id === Number(id));
        else if (type === "package") found = popularPackages.find(p => p.id === Number(id));

        if (found) {
            setItem({ ...found, bookingType: type, bookingDetails: bookingData });
        }
    }, [id]);

    const handlePayment = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(`/booking-confirmation/${id}?type=${item.bookingType}`);
        }, 2500);
    };

    if (!item) return <div>Loading...</div>;

    const amount = item.pricePerNight || item.totalPrice || item.price;
    const taxes = Math.round(amount * 0.18);
    const total = amount + taxes;

    return (
        <PaymentWrapper>
            <TopNav />
            {loading && (
                <div className="processing-overlay">
                    <div className="spinner"></div>
                    <h2>Processing Royal Payment...</h2>
                    <p>Please do not refresh or close the window</p>
                </div>
            )}
            <div className="payment-container">
                <div className="payment-main">
                    <div className="rzp-header">
                        <div className="brand">
                            <span>Razorpay</span>
                        </div>
                        <div className="security">
                            <SecurityIcon style={{ fontSize: 16 }} />
                            Trusted by 50L+ businesses
                        </div>
                    </div>

                    <div className="payment-methods">
                        <h2>Select Payment Method</h2>
                        <div className="method-list">
                            <div
                                className={`method-item ${selectedMethod === "upi" ? "active" : ""}`}
                                onClick={() => setSelectedMethod("upi")}
                            >
                                <div className="icon"><QrCodeScannerIcon /></div>
                                <div className="info">
                                    <div className="name">UPI (Google Pay, PhonePe, Bhim)</div>
                                    <div className="sub">Pay instantly via any UPI app</div>
                                </div>
                            </div>

                            <div
                                className={`method-item ${selectedMethod === "card" ? "active" : ""}`}
                                onClick={() => setSelectedMethod("card")}
                            >
                                <div className="icon"><CreditCardIcon /></div>
                                <div className="info">
                                    <div className="name">Card (Visa, Mastercard, RuPay)</div>
                                    <div className="sub">Debit / Credit cards</div>
                                </div>
                            </div>

                            <div
                                className={`method-item ${selectedMethod === "netbanking" ? "active" : ""}`}
                                onClick={() => setSelectedMethod("netbanking")}
                            >
                                <div className="icon"><AccountBalanceIcon /></div>
                                <div className="info">
                                    <div className="name">Netbanking</div>
                                    <div className="sub">All Indian banks available</div>
                                </div>
                            </div>

                            <div
                                className={`method-item ${selectedMethod === "wallet" ? "active" : ""}`}
                                onClick={() => setSelectedMethod("wallet")}
                            >
                                <div className="icon"><AccountBalanceWalletIcon /></div>
                                <div className="info">
                                    <div className="name">Wallet</div>
                                    <div className="sub">Airtel Money, JioMoney, etc.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pay-footer">
                        <div className="total">
                            <span className="label">Amount to Pay</span>
                            <span className="amount">₹{total.toLocaleString()}</span>
                        </div>
                        <button className="pay-btn" onClick={handlePayment}>
                            PAY NOW
                        </button>
                    </div>
                </div>

                <div className="summary-card">
                    <h3>Order Summary</h3>
                    <div className="item-preview">
                        <img src={item.image} alt={item.name} />
                        <div className="info">
                            <h4>{item.name}</h4>
                            <p>{item.bookingType.toUpperCase()}</p>
                        </div>
                    </div>
                    <div className="cost-breakdown">
                        <div className="row">
                            <span>Base Price</span>
                            <span>₹{amount.toLocaleString()}</span>
                        </div>
                        <div className="row">
                            <span>GST (18%)</span>
                            <span>₹{taxes.toLocaleString()}</span>
                        </div>
                        <div className="row total-row">
                            <span>Total</span>
                            <span>₹{total.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </PaymentWrapper>
    );
};

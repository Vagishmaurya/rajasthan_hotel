import { useParams, Link } from "react-router-dom";
import { hotels, cities } from "../../data/rajasthanData";
import { TopNav } from "../shared/TopNav";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

const PageWrapper = styled.div`
  background: #FDF2E9;
  min-height: 100vh;



  .confirmation-content {
    max-width: 700px;
    margin: 0 auto;
    padding: 60px 20px;
    text-align: center;

    .success-icon {
      color: #27AE60;
      font-size: 80px;
      margin-bottom: 20px;
      animation: bounceIn 0.6s ease-out;
    }

    @keyframes bounceIn {
      0% { transform: scale(0); opacity: 0; }
      60% { transform: scale(1.2); }
      100% { transform: scale(1); opacity: 1; }
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 36px;
      color: #2C1810;
      margin-bottom: 8px;
    }

    .subtitle {
      color: #8B7355;
      font-size: 16px;
      margin-bottom: 40px;
    }

    .booking-id {
      display: inline-block;
      background: rgba(39, 174, 96, 0.1);
      color: #27AE60;
      padding: 6px 20px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 30px;
      letter-spacing: 1px;
    }
  }

  .booking-details {
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 8px 30px rgba(44, 24, 16, 0.06);
    text-align: left;
    margin-bottom: 30px;

    .hotel-summary {
      display: flex;
      gap: 20px;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 2px solid #F5E6D3;
      margin-bottom: 20px;

      img {
        width: 140px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
      }

      .info {
        h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: #2C1810;
          margin-bottom: 4px;
        }

        .city {
          color: #8B7355;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .stars {
          color: #D4A017;
        }
      }
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #F5E6D3;
      font-size: 14px;

      .label {
        color: #8B7355;
        font-weight: 500;
      }

      .value {
        color: #2C1810;
        font-weight: 600;
      }

      &:last-child {
        border-bottom: none;
        padding-top: 16px;
        font-size: 18px;

        .value {
          color: #C0392B;
          font-weight: 800;
        }
      }
    }
  }

  .actions {
    display: flex;
    gap: 16px;
    justify-content: center;

    a {
      padding: 14px 32px;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 600;
      transition: all 0.3s;
      text-decoration: none;
    }

    .primary-btn {
      background: linear-gradient(135deg, #C0392B, #E67E22);
      color: white;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(192, 57, 43, 0.3);
      }
    }

    .secondary-btn {
      background: white;
      color: #C0392B;
      border: 2px solid #C0392B;

      &:hover {
        background: rgba(192, 57, 43, 0.05);
      }
    }
  }
`;

export const BookingConfirmation = () => {
    const { id } = useParams();
    const hotel = hotels.find((h) => h.id === Number(id));

    const savedBooking = localStorage.getItem("bookingData");
    let roomInfo = null;
    if (savedBooking) {
        const parsed = JSON.parse(savedBooking);
        roomInfo = parsed.room;
    }

    if (!hotel) {
        return (
            <PageWrapper>
                <div className="confirmation-content" style={{ paddingTop: "100px" }}>
                    <h2>Booking not found</h2>
                    <Link to="/" style={{ color: "#C0392B" }}>← Back to Home</Link>
                </div>
            </PageWrapper>
        );
    }

    const cityObj = cities.find((c) => c.id === hotel.city);
    const room = roomInfo || hotel.rooms[0];
    const bookingId = `RS${Date.now().toString().slice(-8)}`;
    const nights = 2;
    const taxes = Math.round(room.price * nights * 0.18);
    const total = room.price * nights + taxes;

    return (
        <PageWrapper>
            <TopNav />

            <div className="confirmation-content">
                <CheckCircleIcon className="success-icon" style={{ fontSize: 80 }} />
                <h1>Booking Confirmed!</h1>
                <p className="subtitle">Your royal Rajasthan experience awaits</p>
                <div className="booking-id">Booking ID: {bookingId}</div>

                <div className="booking-details">
                    <div className="hotel-summary">
                        <img src={hotel.image} alt={hotel.name} />
                        <div className="info">
                            <h3>{hotel.name}</h3>
                            <p className="city">{cityObj ? cityObj.name : hotel.city}, Rajasthan</p>
                            <div className="stars">
                                {Array.from({ length: hotel.stars }).map((_, i) => (
                                    <StarIcon key={i} style={{ fontSize: 16 }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="detail-row">
                        <span className="label">Room Type</span>
                        <span className="value">{room.type}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Guests</span>
                        <span className="value">Up to {room.capacity} guests</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Check-in</span>
                        <span className="value">15 Mar 2026, 2:00 PM</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Check-out</span>
                        <span className="value">17 Mar 2026, 11:00 AM</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Duration</span>
                        <span className="value">{nights} Nights</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Room Rate</span>
                        <span className="value">₹{room.price.toLocaleString()} × {nights} nights</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Taxes & Fees (18% GST)</span>
                        <span className="value">₹{taxes.toLocaleString()}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Total Amount</span>
                        <span className="value">₹{total.toLocaleString()}</span>
                    </div>
                </div>

                <div className="actions">
                    <Link to="/" className="primary-btn">Back to Home</Link>
                    <Link to="/search" className="secondary-btn">Browse More Hotels</Link>
                </div>
            </div>
        </PageWrapper>
    );
};

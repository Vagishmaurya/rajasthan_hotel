import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TopNav } from "../shared/TopNav";
import { hotels, cities } from "../../data/rajasthanData";
import styled from "styled-components";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StarIcon from "@mui/icons-material/Star";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import SpaIcon from "@mui/icons-material/Spa";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LandscapeIcon from "@mui/icons-material/Landscape";

const PageWrapper = styled.div`
  background: #FDF2E9;
  min-height: 100vh;



  .content {
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 20px 60px;
  }

  .breadcrumb {
    font-size: 13px;
    color: #8B7355;
    margin-bottom: 20px;

    a {
      color: #C0392B;
      &:hover { text-decoration: underline; }
    }
  }

  .gallery {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 8px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 30px;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s;
      cursor: pointer;

      &:hover { transform: scale(1.03); }
    }

    .gallery-right {
      display: flex;
      flex-direction: column;
      gap: 8px;

      img { flex: 1; }
    }
  }

  .detail-grid {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 30px;
  }

  .hotel-main {
    .hotel-header {
      margin-bottom: 24px;

      .type-badge {
        display: inline-block;
        background: #FDF2E9;
        color: #C0392B;
        padding: 4px 14px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        border: 1px solid rgba(192, 57, 43, 0.2);
        margin-bottom: 8px;
      }

      h1 {
        font-family: 'Playfair Display', serif;
        font-size: 34px;
        color: #2C1810;
        margin-bottom: 6px;
      }

      .location {
        color: #8B7355;
        font-size: 15px;
        margin-bottom: 10px;
      }

      .rating-row {
        display: flex;
        align-items: center;
        gap: 8px;

        .rating-badge {
          background: #27AE60;
          color: white;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 700;
        }

        .rating-text {
          font-size: 14px;
          font-weight: 600;
          color: #2C1810;
        }

        .reviews {
          color: #8B7355;
          font-size: 13px;
        }
      }
    }

    .section {
      background: white;
      border-radius: 14px;
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: 0 4px 20px rgba(44, 24, 16, 0.04);

      h2 {
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        color: #2C1810;
        margin-bottom: 16px;
        padding-bottom: 10px;
        border-bottom: 2px solid #F5E6D3;
      }

      .description {
        font-size: 15px;
        color: #5D4E37;
        line-height: 1.8;
      }

      .amenities-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;

        .amenity-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: #FDF2E9;
          border-radius: 8px;
          font-size: 14px;
          color: #5D4E37;

          svg { color: #D4A017; }
        }
      }
    }
  }

  .booking-card {
    background: white;
    border-radius: 16px;
    padding: 28px;
    box-shadow: 0 8px 30px rgba(44, 24, 16, 0.08);
    height: fit-content;
    position: sticky;
    top: 80px;

    .price-header {
      margin-bottom: 20px;

      .original {
        text-decoration: line-through;
        color: #8B7355;
        font-size: 16px;
      }

      .current {
        font-size: 36px;
        font-weight: 800;
        color: #C0392B;
        font-family: 'Inter', sans-serif;
        display: block;
        line-height: 1.1;
      }

      .per-night {
        font-size: 14px;
        color: #8B7355;
      }

      .discount {
        display: inline-block;
        background: linear-gradient(135deg, #C0392B, #E67E22);
        color: white;
        padding: 3px 10px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 700;
        margin-top: 6px;
      }
    }

    .room-selector {
      margin-bottom: 20px;

      h4 {
        font-family: 'Inter', sans-serif;
        font-size: 13px;
        font-weight: 600;
        color: #5D4E37;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 10px;
      }

      .room-option {
        border: 2px solid #F5E6D3;
        border-radius: 10px;
        padding: 12px 14px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &.selected {
          border-color: #C0392B;
          background: rgba(192, 57, 43, 0.04);
        }

        &:hover { border-color: #D4A017; }

        .room-name {
          font-weight: 600;
          font-size: 14px;
          color: #2C1810;
        }

        .room-capacity {
          font-size: 12px;
          color: #8B7355;
        }

        .room-price {
          font-weight: 700;
          color: #C0392B;
          font-size: 15px;
        }
      }
    }

    .booking-form {
      .form-group {
        margin-bottom: 14px;

        label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #5D4E37;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }

        input, select {
          width: 100%;
          padding: 10px 12px;
          border: 2px solid #F5E6D3;
          border-radius: 8px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: border-color 0.3s;

          &:focus { border-color: #D4A017; }
        }
      }

      .date-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
    }

    .book-btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #C0392B, #E67E22);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 700;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      transition: all 0.3s;
      margin-top: 8px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(192, 57, 43, 0.3);
      }
    }

    .cancellation {
      text-align: center;
      margin-top: 12px;
      font-size: 12px;
      color: #27AE60;
      font-weight: 500;
    }
  }
`;

const amenityIcons = {
    "Free WiFi": <WifiIcon />,
    "Swimming Pool": <PoolIcon />,
    "Pool": <PoolIcon />,
    "Rooftop Pool": <PoolIcon />,
    "Spa": <SpaIcon />,
    "Restaurant": <RestaurantIcon />,
    "Rooftop Restaurant": <RestaurantIcon />,
    "Fine Dining": <RestaurantIcon />,
    "Vegetarian Restaurant": <RestaurantIcon />,
    "Parking": <LocalParkingIcon />,
    "Room Service": <RoomServiceIcon />,
    "Airport Transfer": <DirectionsCarIcon />,
    "Lake View": <LandscapeIcon />,
    "Fort View": <LandscapeIcon />,
    "Desert View": <LandscapeIcon />,
    "Mountain View": <LandscapeIcon />,
    "Sunset View": <LandscapeIcon />,
    "City View": <LandscapeIcon />,
};

export const HotelDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const hotel = hotels.find((h) => h.id === Number(id));
    const [selectedRoom, setSelectedRoom] = useState(0);

    if (!hotel) {
        return (
            <PageWrapper>
                <div className="content" style={{ textAlign: "center", paddingTop: "100px" }}>
                    <h2>Hotel not found</h2>
                    <Link to="/" style={{ color: "#C0392B" }}>← Back to Home</Link>
                </div>
            </PageWrapper>
        );
    }

    const cityObj = cities.find((c) => c.id === hotel.city);
    const discount = Math.round((1 - hotel.pricePerNight / hotel.originalPrice) * 100);

    const handleBooking = () => {
        const bookingData = {
            hotel,
            room: hotel.rooms[selectedRoom],
            bookedAt: new Date().toISOString(),
        };
        localStorage.setItem("bookingData", JSON.stringify(bookingData));
        navigate(`/booking/${hotel.id}`);
    };

    return (
        <PageWrapper>
            <TopNav />

            <div className="content">
                <div className="breadcrumb">
                    <Link to="/">Home</Link> → <Link to="/search">Hotels</Link> → {hotel.name}
                </div>

                <div className="gallery">
                    <img src={hotel.images[0]} alt={hotel.name} />
                    <div className="gallery-right">
                        <img src={hotel.images[1]} alt={`${hotel.name} 2`} />
                        <img src={hotel.images[2]} alt={`${hotel.name} 3`} />
                    </div>
                </div>

                <div className="detail-grid">
                    <div className="hotel-main">
                        <div className="hotel-header">
                            <span className="type-badge">{hotel.propertyType}</span>
                            <h1>{hotel.name}</h1>
                            <p className="location">
                                {cityObj ? cityObj.name : hotel.city}, Rajasthan
                            </p>
                            <div className="rating-row">
                                <span className="rating-badge">{hotel.rating}</span>
                                <span className="rating-text">
                                    {hotel.rating >= 4.5 ? "Excellent" : hotel.rating >= 4 ? "Very Good" : "Good"}
                                </span>
                                <span className="reviews">
                                    • {hotel.reviews} reviews •{" "}
                                    {Array.from({ length: hotel.stars }).map((_, i) => (
                                        <StarIcon key={i} style={{ fontSize: 14, color: "#D4A017" }} />
                                    ))}
                                </span>
                            </div>
                        </div>

                        <div className="section">
                            <h2>About This Property</h2>
                            <p className="description">{hotel.description}</p>
                        </div>

                        <div className="section">
                            <h2>Amenities</h2>
                            <div className="amenities-grid">
                                {hotel.amenities.map((a, i) => (
                                    <div className="amenity-item" key={i}>
                                        {amenityIcons[a] || <SpaIcon />}
                                        {a}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="booking-card">
                        <div className="price-header">
                            <span className="original">₹{hotel.originalPrice.toLocaleString()}</span>
                            <span className="current">₹{hotel.rooms[selectedRoom].price.toLocaleString()}</span>
                            <span className="per-night"> / night</span>
                            <div className="discount">{discount}% OFF</div>
                        </div>

                        <div className="room-selector">
                            <h4>Select Room Type</h4>
                            {hotel.rooms.map((room, i) => (
                                <div
                                    className={`room-option ${selectedRoom === i ? "selected" : ""}`}
                                    key={i}
                                    onClick={() => setSelectedRoom(i)}
                                >
                                    <div>
                                        <div className="room-name">{room.type}</div>
                                        <div className="room-capacity">Up to {room.capacity} guests</div>
                                    </div>
                                    <div className="room-price">₹{room.price.toLocaleString()}</div>
                                </div>
                            ))}
                        </div>

                        <div className="booking-form">
                            <div className="date-row">
                                <div className="form-group">
                                    <label>Check-in</label>
                                    <input type="date" />
                                </div>
                                <div className="form-group">
                                    <label>Check-out</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Guests</label>
                                <select>
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4 Guests</option>
                                </select>
                            </div>
                        </div>

                        <button className="book-btn" onClick={handleBooking}>
                            Book Now
                        </button>
                        <p className="cancellation">✓ Free cancellation available</p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

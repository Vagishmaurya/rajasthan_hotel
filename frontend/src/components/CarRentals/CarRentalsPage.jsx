import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TopNav } from "../shared/TopNav";
import { Bottom } from "../HomePage/Bottom";
import { carRentals, cities } from "../../data/rajasthanData";
import styled from "styled-components";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TimerIcon from "@mui/icons-material/Timer";
import MapIcon from "@mui/icons-material/Map";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const HeroBanner = styled.div`
  background: linear-gradient(135deg, #1a5276 0%, #2980B9 50%, #3498DB 100%);
  position: relative;
  overflow: hidden;
  padding: 60px 20px 50px;
  text-align: center;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&h=500&fit=crop') center/cover;
    opacity: 0.12;
  }

  & > * { position: relative; z-index: 1; }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 44px;
    margin-bottom: 10px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }

  p { font-size: 18px; opacity: 0.9; max-width: 600px; margin: 0 auto 30px; }

  .search-bar {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(255,255,255,0.95);
    border-radius: 14px;
    padding: 20px 24px;
    display: flex;
    gap: 14px;
    align-items: flex-end;
    box-shadow: 0 15px 50px rgba(0,0,0,0.2);

    .field { flex: 1;
      label { display: block; font-size: 11px; font-weight: 600; color: #8B7355; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 5px; }
      select, input { width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 14px; font-family: 'Inter', sans-serif; outline: none;
        &:focus { border-color: #2980B9; }
      }
    }

    .search-btn {
      padding: 12px 30px;
      background: linear-gradient(135deg, #2980B9, #3498DB);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      white-space: nowrap;
      &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(41, 128, 185, 0.4); }
    }
  }

  .stats-row {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;

    .stat { text-align: center;
      .num { font-size: 28px; font-weight: 700; font-family: 'Playfair Display', serif; }
      .lbl { font-size: 12px; opacity: 0.7; text-transform: uppercase; letter-spacing: 1px; }
    }
  }
`;

const Content = styled.div`
  background: #FDF2E9;

  .page-inner { max-width: 1200px; margin: 0 auto; padding: 50px 20px; }

  .section-title {
    text-align: center; margin-bottom: 40px;
    h2 { font-family: 'Playfair Display', serif; font-size: 34px; color: #2C1810; margin-bottom: 6px; }
    p { color: #8B7355; font-size: 15px; }
    .line { width: 50px; height: 3px; background: linear-gradient(90deg, #2980B9, #3498DB); margin: 14px auto 0; border-radius: 2px; }
  }

  .cars-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  .car-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 320px 1fr;
    box-shadow: 0 4px 20px rgba(44, 24, 16, 0.06);
    transition: transform 0.4s, box-shadow 0.4s;

    &:hover { transform: translateY(-6px); box-shadow: 0 16px 50px rgba(44, 24, 16, 0.15); }

    .car-img {
      overflow: hidden; position: relative; min-height: 280px;
      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
      .type-tag { position: absolute; top: 14px; left: 14px; background: rgba(41, 128, 185, 0.9); color: white; padding: 5px 14px; border-radius: 8px; font-size: 12px; font-weight: 700; }
      .pax { position: absolute; top: 14px; right: 14px; background: rgba(255,255,255,0.9); color: #2C1810; padding: 5px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 4px; }
    }
    &:hover .car-img img { transform: scale(1.05); }

    .car-info {
      padding: 22px 26px; display: flex; flex-direction: column;

      h3 { font-family: 'Playfair Display', serif; font-size: 22px; color: #2C1810; margin-bottom: 4px; }
      .vehicle { font-size: 14px; color: #2980B9; font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
      .route { font-size: 13px; color: #5D4E37; margin-bottom: 12px; line-height: 1.5; display: flex; gap: 8px; }

      .meta-row {
        display: flex; gap: 16px; margin-bottom: 14px; flex-wrap: wrap;
        .meta { display: flex; align-items: center; gap: 5px; font-size: 12px; color: #8B7355; background: #f5f5f5; padding: 5px 10px; border-radius: 6px;
          svg { font-size: 15px; color: #2980B9; }
        }
      }

      .features {
        display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;
        span { display: flex; align-items: center; gap: 4px; background: #E8F6FF; color: #2980B9; font-size: 12px; padding: 5px 12px; border-radius: 6px; font-weight: 500;
          svg { font-size: 14px; }
        }
      }

      .price-row {
        display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 14px; border-top: 2px solid #F5E6D3;

        .price { .total { font-size: 28px; font-weight: 800; color: #2980B9; font-family: 'Inter', sans-serif; }
          .per-day { font-size: 12px; color: #8B7355; display: block; }
        }

        .rent-btn { padding: 12px 28px; background: linear-gradient(135deg, #2980B9, #3498DB); color: white; border: none; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.3s;
          &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(41, 128, 185, 0.35); }
        }
      }
    }
  }

  .why-rent {
    margin-top: 60px;
    background: white;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 4px 20px rgba(44, 24, 16, 0.04);

    .why-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-top: 30px;

      .why-item {
        text-align: center;
        .icon { width: 56px; height: 56px; background: #E8F6FF; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; color: #2980B9; }
        h4 { font-family: 'Playfair Display', serif; font-size: 15px; color: #2C1810; margin-bottom: 6px; }
        p { font-size: 12px; color: #8B7355; line-height: 1.5; }
      }
    }
  }
`;

export const CarRentalsPage = () => {
    const navigate = useNavigate();

    const handleRent = (car) => {
        localStorage.setItem("bookingData", JSON.stringify({
            type: "car",
            item: car,
            bookedAt: new Date().toISOString()
        }));
        navigate(`/payment/${car.id}`);
    };
    const [pickupCity, setPickupCity] = useState("");

    const filteredCars = pickupCity
        ? carRentals.filter(c => c.route.toLowerCase().includes(pickupCity.toLowerCase()))
        : carRentals;

    return (
        <div>
            <TopNav />
            <HeroBanner>
                <h1>Car Rentals in Rajasthan</h1>
                <p>Explore the Land of Kings at your own pace — from city tours to multi-day road trips</p>
                <div className="search-bar">
                    <div className="field">
                        <label>Pickup City</label>
                        <select value={pickupCity} onChange={(e) => setPickupCity(e.target.value)}>
                            <option value="">All Cities</option>
                            {cities.map(c => <option value={c.name} key={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div className="field">
                        <label>Pickup Date</label>
                        <input type="date" />
                    </div>
                    <div className="field">
                        <label>Return Date</label>
                        <input type="date" />
                    </div>
                    <div className="field">
                        <label>Vehicle Type</label>
                        <select>
                            <option value="">All Types</option>
                            <option>Sedan</option>
                            <option>SUV</option>
                            <option>Jeep</option>
                            <option>Luxury</option>
                            <option>Tempo Traveller</option>
                        </select>
                    </div>
                    <button className="search-btn">Search Cars</button>
                </div>
                <div className="stats-row">
                    <div className="stat"><span className="num">180+</span><span className="lbl">Vehicles</span></div>
                    <div className="stat"><span className="num">12</span><span className="lbl">Cities</span></div>
                    <div className="stat"><span className="num">24/7</span><span className="lbl">Support</span></div>
                    <div className="stat"><span className="num">4.8★</span><span className="lbl">Avg Rating</span></div>
                </div>
            </HeroBanner>

            <Content>
                <div className="page-inner">
                    <div className="section-title">
                        <h2>Popular Car Rentals & Road Trips</h2>
                        <p>Curated drives across Rajasthan's most scenic routes</p>
                        <div className="line" />
                    </div>

                    <div className="cars-grid">
                        {filteredCars.map(car => (
                            <div className="car-card" key={car.id}>
                                <div className="car-img">
                                    <img src={car.image} alt={car.name} />
                                    <div className="type-tag">{car.type}</div>
                                    <div className="pax"><PersonIcon style={{ fontSize: 14 }} /> {car.passengers} seats</div>
                                </div>
                                <div className="car-info">
                                    <h3>{car.name}</h3>
                                    <p className="vehicle"><DirectionsCarIcon style={{ fontSize: 16 }} /> {car.vehicle}</p>
                                    <div className="route"><MapIcon style={{ fontSize: 15, color: '#8B7355', flexShrink: 0, marginTop: 2 }} /> <span>{car.route}</span></div>
                                    <div className="meta-row">
                                        <span className="meta"><TimerIcon /> {car.duration}</span>
                                        <span className="meta"><TimerIcon /> {car.distance}</span>
                                    </div>
                                    <div className="features">
                                        {car.features.map((f, i) => (
                                            <span key={i}>
                                                {f === "AC" ? <AcUnitIcon /> : f === "Fuel Included" ? <LocalGasStationIcon /> : <CheckCircleIcon />}
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="price-row">
                                        <div className="price">
                                            <span className="total">₹{car.totalPrice.toLocaleString()}</span>
                                            <span className="per-day">₹{car.pricePerDay.toLocaleString()}/day</span>
                                        </div>
                                        <button className="book-btn" onClick={() => handleRent(car)}>Rent Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="why-rent">
                        <div className="section-title" style={{ marginBottom: 0 }}>
                            <h2>Why Rent with Rajasthan Stays?</h2>
                            <div className="line" />
                        </div>
                        <div className="why-grid">
                            <div className="why-item">
                                <div className="icon"><DirectionsCarIcon style={{ fontSize: 24 }} /></div>
                                <h4>Vetted Vehicles</h4>
                                <p>All cars are inspected & sanitized before every trip</p>
                            </div>
                            <div className="why-item">
                                <div className="icon"><PersonIcon style={{ fontSize: 24 }} /></div>
                                <h4>Experienced Drivers</h4>
                                <p>Local drivers who know every road and hidden gem</p>
                            </div>
                            <div className="why-item">
                                <div className="icon"><LocalGasStationIcon style={{ fontSize: 24 }} /></div>
                                <h4>Fuel Included</h4>
                                <p>No hidden charges — fuel is included in all packages</p>
                            </div>
                            <div className="why-item">
                                <div className="icon"><StarIcon style={{ fontSize: 24 }} /></div>
                                <h4>Free Cancellation</h4>
                                <p>Cancel up to 24 hrs before pickup for full refund</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Bottom />
        </div>
    );
};

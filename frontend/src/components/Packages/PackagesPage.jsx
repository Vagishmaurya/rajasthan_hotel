import { useState } from "react";
import { TopNav } from "../shared/TopNav";
import { useNavigate } from "react-router-dom";
import { Bottom } from "../HomePage/Bottom";
import { popularPackages, cities } from "../../data/rajasthanData";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const HeroBanner = styled.div`
  background: linear-gradient(135deg, #6C3483 0%, #8E44AD 40%, #C0392B 100%);
  position: relative; overflow: hidden;
  padding: 60px 20px 50px; text-align: center; color: white;

  @media (max-width: 768px) {
    padding: 40px 15px 30px;
  }

  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: url('https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1400&h=500&fit=crop') center/cover; opacity: 0.12; }
  & > * { position: relative; z-index: 1; }

  h1 { font-family: 'Playfair Display', serif; font-size: 44px; margin-bottom: 10px; text-shadow: 0 2px 10px rgba(0,0,0,0.2); 
    @media (max-width: 768px) { font-size: 32px; }
  }
  p { font-size: 18px; opacity: 0.9; max-width: 650px; margin: 0 auto 30px; 
    @media (max-width: 768px) { font-size: 15px; }
  }

  .filter-bar {
    max-width: 700px; margin: 0 auto; background: rgba(255,255,255,0.95); border-radius: 14px; padding: 18px 24px; display: flex; gap: 14px; align-items: flex-end; box-shadow: 0 15px 50px rgba(0,0,0,0.2);
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      padding: 15px;
    }

    .field { flex: 1;
      label { display: block; font-size: 11px; font-weight: 600; color: #8B7355; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 5px; }
      select { width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 14px; font-family: 'Inter', sans-serif; outline: none; &:focus { border-color: #8E44AD; } }
    }
    .search-btn { padding: 12px 30px; background: linear-gradient(135deg, #8E44AD, #C0392B); color: white; border: none; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; white-space: nowrap;
      @media (max-width: 768px) { width: 100%; margin-top: 5px; }
      &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(142, 68, 173, 0.4); }
    }
  }

  .badge-row {
    display: flex; justify-content: center; gap: 24px; margin-top: 28px; flex-wrap: wrap;
    @media (max-width: 768px) { gap: 12px; }
    .badge { background: rgba(255,255,255,0.15); padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 500; backdrop-filter: blur(4px); display: flex; align-items: center; gap: 6px;
      @media (max-width: 480px) { font-size: 11px; padding: 6px 12px; }
      svg { font-size: 16px; }
    }
  }
`;

const Content = styled.div`
  background: #FDF2E9;
  .page-inner { max-width: 1200px; margin: 0 auto; padding: 50px 20px; 
    @media (max-width: 768px) { padding: 30px 15px; }
  }

  .section-title {
    text-align: center; margin-bottom: 40px;
    h2 { font-family: 'Playfair Display', serif; font-size: 34px; color: #2C1810; margin-bottom: 6px; 
      @media (max-width: 768px) { font-size: 26px; }
    }
    p { color: #8B7355; font-size: 15px; }
    .line { width: 50px; height: 3px; background: linear-gradient(90deg, #8E44AD, #C0392B); margin: 14px auto 0; border-radius: 2px; }
  }

  .packages-list {
    display: flex; flex-direction: column; gap: 28px;
  }

  .package-card {
    background: white; border-radius: 16px; overflow: hidden;
    display: grid; grid-template-columns: 380px 1fr;
    box-shadow: 0 4px 20px rgba(44, 24, 16, 0.06);
    transition: transform 0.4s, box-shadow 0.4s;

    @media (max-width: 968px) { grid-template-columns: 1fr; }

    &:hover { transform: translateY(-6px); box-shadow: 0 16px 50px rgba(44, 24, 16, 0.15); }

    .pkg-img {
      overflow: hidden; position: relative;
      @media (max-width: 968px) { height: 250px; }
      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; min-height: 320px; 
        @media (max-width: 968px) { min-height: 250px; }
      }
      .best-seller { position: absolute; top: 16px; left: 16px; background: #D4A017; color: #2C1810; padding: 6px 14px; border-radius: 6px; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }
      .discount { position: absolute; top: 16px; right: 16px; background: #C0392B; color: white; padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; }
    }
    &:hover .pkg-img img { transform: scale(1.05); }

    .pkg-info {
      padding: 28px 30px; display: flex; flex-direction: column;
      @media (max-width: 480px) { padding: 20px; }

      .pkg-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; 
        @media (max-width: 480px) { flex-direction: column; gap: 10px; }
      }
      h3 { font-family: 'Playfair Display', serif; font-size: 26px; color: #2C1810; 
        @media (max-width: 768px) { font-size: 22px; }
      }
      .duration { display: inline-flex; align-items: center; gap: 5px; font-size: 13px; color: white; background: #8E44AD; padding: 4px 12px; border-radius: 6px; font-weight: 600; }
      .cities-route { font-size: 14px; color: #5D4E37; margin-bottom: 14px; display: flex; align-items: center; gap: 6px; line-height: 1.6; }

      .includes-grid {
        display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 16px;
        @media (max-width: 600px) { grid-template-columns: repeat(3, 1fr); }
        .include-item { text-align: center; padding: 10px 6px; background: #FDF2E9; border-radius: 10px;
          svg { font-size: 20px; color: #8E44AD; display: block; margin: 0 auto 4px; }
          span { font-size: 11px; color: #5D4E37; font-weight: 500; }
        }
      }

      .itinerary-preview {
        background: #FAFAFA; border-radius: 10px; padding: 14px 18px; margin-bottom: 16px;
        h4 { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: #8B7355; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
        .days { display: flex; gap: 15px; flex-wrap: wrap;
          .day { flex: 1; min-width: 120px; padding: 6px 10px; font-size: 12px; color: #5D4E37; border-left: 2px solid #E8E8E8; padding-left: 10px;
            @media (max-width: 480px) { min-width: 100%; border-left: none; border-bottom: 1px solid #E8E8E8; padding-bottom: 10px; }
            strong { display: block; color: #8E44AD; font-size: 11px; margin-bottom: 2px; }
            &:first-child { border-left: 2px solid #8E44AD; @media (max-width: 480px) { border-left: none; border-bottom: 2px solid #8E44AD; } }
          }
        }
      }

      .meta-row {
        display: flex; align-items: center; gap: 16px; margin-bottom: 16px; flex-wrap: wrap;
        .meta { display: flex; align-items: center; gap: 5px; font-size: 13px; color: #5D4E37;
          svg { font-size: 16px; color: #D4A017; }
        }
      }

      .price-row {
        display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 16px; border-top: 2px solid #F5E6D3;
        @media (max-width: 600px) { flex-direction: column; align-items: stretch; gap: 20px; }

        .price {
          .original { text-decoration: line-through; color: #8B7355; font-size: 15px; margin-right: 8px; }
          .current { font-size: 32px; font-weight: 800; color: #C0392B; font-family: 'Inter', sans-serif; 
            @media (max-width: 480px) { font-size: 26px; }
          }
          .per { font-size: 12px; color: #8B7355; display: block; }
          .save { font-size: 12px; color: #27AE60; font-weight: 600; margin-top: 2px; }
        }
        .book-btn { 
          padding: 14px 34px; 
          background: linear-gradient(135deg, #8E44AD, #C0392B); 
          color: white; 
          border: none; 
          border-radius: 12px; 
          font-size: 16px; 
          font-weight: 700; 
          cursor: pointer; 
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(142, 68, 173, 0.2);
          
          &:hover { 
            transform: translateY(-3px) scale(1.02); 
            box-shadow: 0 8px 25px rgba(142, 68, 173, 0.4); 
            background: linear-gradient(135deg, #9B59B6, #C0392B);
          }

          &:active {
            transform: translateY(-1px);
          }
        }
      }
    }
  }

  .build-custom {
    margin-top: 60px; background: linear-gradient(135deg, #8E44AD, #C0392B); border-radius: 16px; padding: 50px 40px; color: white; text-align: center;
    @media (max-width: 768px) { padding: 40px 20px; }

    h2 { font-family: 'Playfair Display', serif; font-size: 32px; margin-bottom: 10px; 
      @media (max-width: 768px) { font-size: 24px; }
    }
    p { font-size: 16px; opacity: 0.9; margin-bottom: 24px; max-width: 500px; margin-left: auto; margin-right: auto; 
      @media (max-width: 768px) { font-size: 14px; }
    }
    .cta-btn { display: inline-block; padding: 14px 40px; background: white; color: #8E44AD; border-radius: 10px; font-size: 16px; font-weight: 700; cursor: pointer; transition: all 0.3s; border: none;
      @media (max-width: 480px) { width: 100%; padding: 12px; }
      &:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.2); }
    }
  }
`;

const itineraries = {
  1: [
    { day: "Day 1-2", place: "Jaipur" },
    { day: "Day 3-4", place: "Jodhpur" },
    { day: "Day 5-6", place: "Jaisalmer" },
    { day: "Day 7-8", place: "Udaipur" },
    { day: "Day 9-10", place: "Jaipur" },
  ],
  2: [
    { day: "Day 1-2", place: "Jodhpur" },
    { day: "Day 3-4", place: "Jaisalmer" },
    { day: "Day 5", place: "Return" },
  ],
  3: [
    { day: "Day 1-2", place: "Udaipur" },
    { day: "Day 3-4", place: "Mount Abu" },
  ],
  4: [
    { day: "Day 1-2", place: "Jaipur" },
    { day: "Day 3-4", place: "Ajmer" },
    { day: "Day 5-6", place: "Pushkar" },
  ],
};

const includeIcons = {
  "Hotels": <HotelIcon />,
  "Car": <DirectionsCarIcon />,
  "Safari": <CameraAltIcon />,
  "Meals": <RestaurantIcon />,
  "Guide": <GroupIcon />,
  "Luxury Hotel": <HotelIcon />,
  "Jeep Safari": <DirectionsCarIcon />,
  "Desert Camp": <CameraAltIcon />,
  "Transport": <DirectionsCarIcon />,
  "Temple Tours": <LocationOnIcon />,
  "Boat Ride": <CameraAltIcon />,
  "Dinner": <RestaurantIcon />,
};

export const PackagesPage = () => {
  const navigate = useNavigate();

  const handleBook = (pkg) => {
    localStorage.setItem("bookingData", JSON.stringify({
      type: "package",
      item: pkg,
      bookedAt: new Date().toISOString()
    }));
    navigate(`/payment/${pkg.id}`);
  };

  const [durationFilter, setDurationFilter] = useState("");

  const filtered = durationFilter
    ? popularPackages.filter(p => p.duration.includes(durationFilter))
    : popularPackages;

  return (
    <div>
      <TopNav />
      <HeroBanner>
        <h1>Tours & Holiday Packages</h1>
        <p>Complete holiday packages with hotels, transport, safaris, meals & expert guides — all in one booking</p>
        <div className="filter-bar">
          <div className="field">
            <label>Destination</label>
            <select>
              <option value="">All Destinations</option>
              {cities.map(c => <option value={c.name} key={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="field">
            <label>Duration</label>
            <select value={durationFilter} onChange={e => setDurationFilter(e.target.value)}>
              <option value="">Any Duration</option>
              <option value="4 Days">3-5 Days</option>
              <option value="5 Days">5-7 Days</option>
              <option value="10 Days">8+ Days</option>
            </select>
          </div>
          <div className="field">
            <label>Budget</label>
            <select>
              <option>Any Budget</option>
              <option>Under ₹20,000</option>
              <option>₹20,000 - ₹40,000</option>
              <option>Above ₹40,000</option>
            </select>
          </div>
          <button className="search-btn">Find Packages</button>
        </div>
        <div className="badge-row">
          <div className="badge"><CheckCircleIcon /> Verified Partners</div>
          <div className="badge"><StarIcon /> 4.8 Avg Rating</div>
          <div className="badge"><GroupIcon /> 3,200+ Booked</div>
          <div className="badge"><AccessTimeIcon /> Customizable</div>
        </div>
      </HeroBanner>

      <Content>
        <div className="page-inner">
          <div className="section-title">
            <h2>Curated Rajasthan Packages</h2>
            <p>Designed by local experts for the most authentic royal experience</p>
            <div className="line" />
          </div>

          <div className="packages-list">
            {filtered.map(pkg => {
              const discount = Math.round((1 - pkg.price / pkg.originalPrice) * 100);
              const saving = pkg.originalPrice - pkg.price;
              return (
                <div className="package-card" key={pkg.id}>
                  <div className="pkg-img">
                    <img src={pkg.image} alt={pkg.name} />
                    {pkg.bookings > 1000 && <div className="best-seller">★ Best Seller</div>}
                    <div className="discount">{discount}% OFF</div>
                  </div>
                  <div className="pkg-info">
                    <div className="pkg-header">
                      <h3>{pkg.name}</h3>
                      <span className="duration"><AccessTimeIcon style={{ fontSize: 14 }} /> {pkg.duration}</span>
                    </div>
                    <p className="cities-route"><LocationOnIcon style={{ fontSize: 16, color: '#8E44AD' }} /> {pkg.cities.join(" → ")}</p>

                    <div className="includes-grid">
                      {pkg.includes.map((inc, i) => (
                        <div className="include-item" key={i}>
                          {includeIcons[inc] || <CheckCircleIcon />}
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>

                    {itineraries[pkg.id] && (
                      <div className="itinerary-preview">
                        <h4>Itinerary Preview</h4>
                        <div className="days">
                          {itineraries[pkg.id].map((d, i) => (
                            <div className="day" key={i}>
                              <strong>{d.day}</strong>
                              {d.place}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="meta-row">
                      <span className="meta"><StarIcon /> {pkg.rating} rating</span>
                      <span className="meta"><GroupIcon /> {pkg.bookings.toLocaleString()} booked</span>
                    </div>

                    <div className="price-row">
                      <div className="price">
                        <span className="original">₹{pkg.originalPrice.toLocaleString()}</span>
                        <span className="current">₹{pkg.price.toLocaleString()}</span>
                        <span className="per">per person</span>
                        <span className="save">You save ₹{saving.toLocaleString()}</span>
                        <button className="book-btn" onClick={() => handleBook(pkg)}>Book Package</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="build-custom">
            <h2>Can't Find the Perfect Package?</h2>
            <p>Our travel experts will craft a custom itinerary tailored to your preferences, budget, and schedule</p>
            <button className="cta-btn">Build Custom Package →</button>
          </div>
        </div>
      </Content>
      <Bottom />
    </div>
  );
};

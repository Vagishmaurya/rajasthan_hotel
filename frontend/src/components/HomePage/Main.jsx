import { Navbar } from "./Navbar";
import { Icondiv } from "./Icondiv";
import { Fromto } from "./Fromto";
import { Bottom } from "./Bottom";
import { TopNav } from "../shared/TopNav";
import { Link } from "react-router-dom";
import { useState } from "react";
import { hotels, cities, offers, testimonials, carRentals, desertSafaris, popularPackages, experiences, stats } from "../../data/rajasthanData";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StarIcon from "@mui/icons-material/Star";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupIcon from "@mui/icons-material/Group";
import TimerIcon from "@mui/icons-material/Timer";
import MapIcon from "@mui/icons-material/Map";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentsIcon from "@mui/icons-material/Payments";
import SecurityIcon from "@mui/icons-material/Security";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LandscapeIcon from "@mui/icons-material/Landscape";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import styled from "styled-components";

/* ═══════════════ STYLED SECTIONS ═══════════════ */

const StatsBar = styled.div`
  background: linear-gradient(135deg, #2C1810 0%, #4A2C1A 100%);
  padding: 40px 20px;
  .stats-grid {
    max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; text-align: center; color: white;
    .stat-item {
      .stat-number { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; color: #D4A017; display: block; }
      .stat-label { font-size: 12px; opacity: 0.7; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px; }
    }
  }
`;

const SectionTitle = styled.div`
  text-align: center; margin-bottom: 40px;
  h2 { font-family: 'Playfair Display', serif; font-size: 38px; color: #2C1810; margin-bottom: 8px; }
  .subtitle { color: #8B7355; font-size: 16px; max-width: 600px; margin: 0 auto; }
  .divider { width: 60px; height: 3px; background: linear-gradient(90deg, #C0392B, #D4A017); margin: 16px auto 0; border-radius: 2px; }
`;

const ServiceCards = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 70px 20px 50px;
  .services-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
  }
  .service-card {
    background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(44, 24, 16, 0.06);
    transition: transform 0.4s, box-shadow 0.4s; text-decoration: none; color: inherit; display: block;
    &:hover { transform: translateY(-8px); box-shadow: 0 16px 50px rgba(44, 24, 16, 0.18); }
    .card-img { height: 160px; overflow: hidden; position: relative;
      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
      .card-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center;
        .icon-circle { width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,0.95); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.3s; }
      }
    }
    &:hover .card-img img { transform: scale(1.1); }
    &:hover .icon-circle { transform: scale(1.1); }
    .card-info { padding: 16px 20px; text-align: center;
      h3 { font-family: 'Playfair Display', serif; font-size: 18px; color: #2C1810; margin-bottom: 4px; }
      p { font-size: 13px; color: #8B7355; line-height: 1.5; }
      .count { font-size: 12px; color: #C0392B; font-weight: 600; margin-top: 8px; }
    }
  }
`;

const CitiesSection = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 70px 20px;
  .cities-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .city-card {
    position: relative; border-radius: 16px; overflow: hidden; height: 240px; cursor: pointer; transition: transform 0.4s, box-shadow 0.4s;
    &:hover { transform: translateY(-8px); box-shadow: 0 16px 50px rgba(44, 24, 16, 0.25); }
    img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
    &:hover img { transform: scale(1.1); }
    .city-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px; background: linear-gradient(transparent, rgba(44, 24, 16, 0.9)); color: white;
      h3 { font-family: 'Playfair Display', serif; font-size: 24px; margin-bottom: 2px; }
      p { font-size: 13px; opacity: 0.85; }
    }
    .hotel-count { position: absolute; top: 14px; right: 14px; background: rgba(212, 160, 23, 0.9); color: #2C1810; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; }
  }
`;

const HotelsSection = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 70px 20px;
  .hotels-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .hotel-card {
    background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(44, 24, 16, 0.08); transition: transform 0.4s, box-shadow 0.4s; cursor: pointer;
    &:hover { transform: translateY(-8px); box-shadow: 0 16px 50px rgba(44, 24, 16, 0.18); }
    .hotel-img { height: 200px; overflow: hidden; position: relative;
      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
      .discount-badge { position: absolute; top: 12px; left: 12px; background: linear-gradient(135deg, #C0392B, #E67E22); color: white; padding: 4px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; }
      .type-badge { position: absolute; top: 12px; right: 12px; background: rgba(44, 24, 16, 0.75); backdrop-filter: blur(4px); color: white; padding: 4px 12px; border-radius: 6px; font-size: 10px; font-weight: 600; }
      .wishlist { position: absolute; bottom: 12px; right: 12px; width: 34px; height: 34px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; cursor: pointer; transition: all 0.3s;
        &:hover { background: #C0392B; color: white; transform: scale(1.1); }
      }
    }
    &:hover .hotel-img img { transform: scale(1.1); }
    .hotel-info { padding: 16px 20px 20px;
      h3 { font-family: 'Playfair Display', serif; font-size: 18px; color: #2C1810; margin-bottom: 4px; }
      .city-name { font-size: 13px; color: #8B7355; margin-bottom: 8px; }
      .rating { display: flex; align-items: center; gap: 4px; margin-bottom: 12px; font-size: 13px; color: #5D4E37;
        .star { color: #D4A017; font-size: 16px; }
        .reviews { color: #8B7355; margin-left: 4px; }
      }
      .amenities { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;
        span { background: #FDF2E9; color: #8B7355; font-size: 10px; padding: 3px 8px; border-radius: 4px; font-weight: 500; }
      }
      .price-row { display: flex; align-items: center; justify-content: space-between;
        .price { .original { text-decoration: line-through; color: #8B7355; font-size: 13px; margin-right: 6px; } .current { font-size: 22px; font-weight: 700; color: #C0392B; font-family: 'Inter', sans-serif; } .per-night { font-size: 11px; color: #8B7355; } }
        .book-btn { padding: 8px 20px; background: linear-gradient(135deg, #C0392B, #E67E22); color: white; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.3s;
          &:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(192, 57, 43, 0.3); } }
      }
    }
  }
  .view-all { text-align: center; margin-top: 40px;
    a { display: inline-block; padding: 14px 40px; border: 2px solid #C0392B; color: #C0392B; border-radius: 10px; font-weight: 600; font-size: 15px; transition: all 0.3s;
      &:hover { background: #C0392B; color: white; transform: translateY(-2px); }
    }
  }
`;

const CarPreviewSection = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 70px 20px;
  .cars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .car-card {
    background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(44, 24, 16, 0.06); transition: transform 0.4s, box-shadow 0.4s;
    &:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(44, 24, 16, 0.15); }
    .car-img { height: 180px; overflow: hidden; position: relative;
      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
      .type-tag { position: absolute; top: 12px; left: 12px; background: rgba(41, 128, 185, 0.9); color: white; padding: 4px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; }
      .pax { position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.9); color: #2C1810; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; display: flex; align-items: center; gap: 4px; }
    }
    &:hover .car-img img { transform: scale(1.08); }
    .car-info { padding: 16px 20px 20px;
      h3 { font-family: 'Playfair Display', serif; font-size: 17px; color: #2C1810; margin-bottom: 4px; }
      .vehicle { font-size: 13px; color: #2980B9; font-weight: 600; margin-bottom: 8px; }
      .route { font-size: 12px; color: #5D4E37; margin-bottom: 10px; line-height: 1.5; display: flex; align-items: flex-start; gap: 6px; }
      .meta-row { display: flex; gap: 14px; margin-bottom: 14px; flex-wrap: wrap;
        .meta { display: flex; align-items: center; gap: 4px; font-size: 11px; color: #8B7355; svg { font-size: 14px; } }
      }
      .price-row { display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid #F5E6D3;
        .price { .amount { font-size: 22px; font-weight: 700; color: #2980B9; font-family: 'Inter', sans-serif; } .label { font-size: 11px; color: #8B7355; display: block; } }
        .rent-btn { padding: 8px 20px; background: linear-gradient(135deg, #2980B9, #3498DB); color: white; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.3s;
          &:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(41, 128, 185, 0.3); } }
      }
    }
  }
  .view-all { text-align: center; margin-top: 40px;
    a { display: inline-block; padding: 14px 40px; border: 2px solid #2980B9; color: #2980B9; border-radius: 10px; font-weight: 600; font-size: 15px; transition: all 0.3s;
      &:hover { background: #2980B9; color: white; transform: translateY(-2px); } }
  }
`;

const SafariPreviewSection = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 70px 20px;
  .safari-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .safari-card {
    background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(44, 24, 16, 0.06); transition: transform 0.4s, box-shadow 0.4s;
    &:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(44, 24, 16, 0.15); }
    .safari-img { height: 200px; overflow: hidden; position: relative;
      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
      .duration-tag { position: absolute; bottom: 12px; left: 12px; background: rgba(44, 24, 16, 0.85); color: white; padding: 5px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 5px; }
      .rating-tag { position: absolute; top: 12px; right: 12px; background: #27AE60; color: white; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 700; display: flex; align-items: center; gap: 3px; }
    }
    &:hover .safari-img img { transform: scale(1.08); }
    .safari-info { padding: 16px 20px 20px;
      h3 { font-family: 'Playfair Display', serif; font-size: 18px; color: #2C1810; margin-bottom: 4px; }
      .location { font-size: 13px; color: #E67E22; font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 4px; }
      .highlights { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;
        span { background: #FFF3E0; color: #E67E22; font-size: 10px; padding: 3px 8px; border-radius: 4px; font-weight: 600; } }
      .price-row { display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid #F5E6D3;
        .price { .original { text-decoration: line-through; color: #8B7355; font-size: 13px; margin-right: 6px; } .current { font-size: 22px; font-weight: 700; color: #E67E22; font-family: 'Inter', sans-serif; } .per { font-size: 11px; color: #8B7355; display: block; } }
        .book-btn { padding: 8px 20px; background: linear-gradient(135deg, #E67E22, #F39C12); color: white; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.3s;
          &:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(230, 126, 34, 0.3); } }
      }
    }
  }
  .view-all { text-align: center; margin-top: 40px;
    a { display: inline-block; padding: 14px 40px; border: 2px solid #E67E22; color: #E67E22; border-radius: 10px; font-weight: 600; font-size: 15px; transition: all 0.3s;
      &:hover { background: #E67E22; color: white; transform: translateY(-2px); } }
  }
`;

const OffersSection = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 70px 20px;
  .offers-scroll { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .offer-card {
    border-radius: 14px; padding: 28px 24px; color: white; position: relative; overflow: hidden; transition: transform 0.3s; cursor: pointer;
    &:hover { transform: translateY(-4px); }
    &::after { content: ''; position: absolute; top: -40px; right: -40px; width: 100px; height: 100px; border-radius: 50%; background: rgba(255,255,255,0.1); }
    h3 { font-family: 'Playfair Display', serif; font-size: 20px; margin-bottom: 6px; position: relative; }
    p { font-size: 14px; opacity: 0.9; margin-bottom: 18px; position: relative; }
    .code { display: inline-block; background: rgba(255,255,255,0.2); padding: 5px 16px; border-radius: 6px; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; position: relative; border: 1px dashed rgba(255,255,255,0.4); }
  }
`;

const WhyUsSection = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 70px 20px;
  .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .why-card {
    text-align: center; padding: 30px 20px; background: white; border-radius: 16px; transition: transform 0.3s, box-shadow 0.3s; box-shadow: 0 4px 16px rgba(44, 24, 16, 0.04);
    &:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(44, 24, 16, 0.1); }
    .icon-circle { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #FDF2E9, #F5E6D3); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #C0392B; }
    h4 { font-family: 'Playfair Display', serif; font-size: 17px; color: #2C1810; margin-bottom: 8px; }
    p { font-size: 13px; color: #8B7355; line-height: 1.6; }
  }
`;

const TestimonialsSection = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 70px 20px;
  .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .testimonial-card {
    background: white; padding: 28px; border-radius: 16px; box-shadow: 0 4px 20px rgba(44, 24, 16, 0.05); border-left: 4px solid #D4A017; transition: transform 0.3s;
    &:hover { transform: translateY(-4px); }
    .quote { font-size: 14px; color: #5D4E37; line-height: 1.7; margin-bottom: 16px; font-style: italic; }
    .stars { margin-bottom: 10px; color: #D4A017; }
    .author { display: flex; align-items: center; gap: 12px;
      .avatar { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, #C0392B, #E67E22); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 16px; }
      .name { font-weight: 600; color: #2C1810; font-size: 14px; }
      .location { font-size: 12px; color: #8B7355; }
    }
  }
`;

/* ═══════════════ MAIN COMPONENT ═══════════════ */

export const Main = () => {
  const [searchData, setSearchData] = useState({ city: "", checkin: "", checkout: "", guests: "2" });

  const handleData = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const saveSearch = () => {
    localStorage.setItem("searchData", JSON.stringify(searchData));
  };

  const featuredHotels = hotels.slice(0, 6);

  return (
    <div>
      <TopNav />
      <Navbar>
        <div className="topdiv">
          <Link to="/" className="brand">
            <AccountBalanceIcon className="brand-icon" />
            <div>
              <h1>Rajasthan Stays</h1>
              <span>Heritage Hotel Booking</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link to="/search">Hotels</Link>
            <Link to="/car-rentals">Car Rentals</Link>
            <Link to="/desert-safari">Desert Safari</Link>
            <Link to="/packages">Packages</Link>
            <a href="#offers">Offers</a>
          </div>
        </div>

        <Icondiv />

        <div className="hero-content">
          <h2>Experience Royal Rajasthan</h2>
          <p>Book heritage hotels, car rentals, desert safaris & curated tour packages in the Land of Kings</p>
        </div>

        <div className="search-box">
          <Fromto handleChange={handleData} />
          <button className="search-btn" onClick={saveSearch}>
            <Link to="/search">SEARCH HOTELS</Link>
          </button>
        </div>
      </Navbar>

      {/* Stats Bar */}
      <StatsBar>
        <div className="stats-grid">
          <div className="stat-item"><span className="stat-number">{stats.hotelsListed}+</span><span className="stat-label">Hotels</span></div>
          <div className="stat-item"><span className="stat-number">{(stats.happyGuests / 1000).toFixed(0)}K+</span><span className="stat-label">Happy Guests</span></div>
          <div className="stat-item"><span className="stat-number">{stats.citiesCovered}</span><span className="stat-label">Cities</span></div>
          <div className="stat-item"><span className="stat-number">{(stats.safarisConducted / 1000).toFixed(0)}K+</span><span className="stat-label">Safari Tours</span></div>
          <div className="stat-item"><span className="stat-number">{stats.carsAvailable}+</span><span className="stat-label">Vehicles</span></div>
          <div className="stat-item"><span className="stat-number">{stats.yearsExperience}+</span><span className="stat-label">Years</span></div>
        </div>
      </StatsBar>

      <div style={{ background: "#FDF2E9" }}>

        {/* Quick Service Cards */}
        <ServiceCards>
          <SectionTitle>
            <h2>What Are You Looking For?</h2>
            <p className="subtitle">Everything you need for an unforgettable Rajasthan experience</p>
            <div className="divider" />
          </SectionTitle>
          <div className="services-grid">
            <Link to="/search" className="service-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" alt="Hotels" />
                <div className="card-overlay"><div className="icon-circle" style={{ color: '#C0392B' }}><StarIcon style={{ fontSize: 26 }} /></div></div>
              </div>
              <div className="card-info">
                <h3>Hotels & Resorts</h3>
                <p>Heritage hotels, palaces & luxury resorts</p>
                <div className="count">{hotels.length}+ properties</div>
              </div>
            </Link>
            <Link to="/car-rentals" className="service-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=250&fit=crop" alt="Cars" />
                <div className="card-overlay"><div className="icon-circle" style={{ color: '#2980B9' }}><DirectionsCarIcon style={{ fontSize: 26 }} /></div></div>
              </div>
              <div className="card-info">
                <h3>Car Rentals</h3>
                <p>Self-drive & chauffeur-driven road trips</p>
                <div className="count" style={{ color: '#2980B9' }}>{carRentals.length}+ packages</div>
              </div>
            </Link>
            <Link to="/desert-safari" className="service-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1549144511-f099e773c147?w=400&h=250&fit=crop" alt="Safari" />
                <div className="card-overlay"><div className="icon-circle" style={{ color: '#E67E22' }}><LandscapeIcon style={{ fontSize: 26 }} /></div></div>
              </div>
              <div className="card-info">
                <h3>Desert Safari</h3>
                <p>Camel rides, dune bashing & desert camps</p>
                <div className="count" style={{ color: '#E67E22' }}>{desertSafaris.length}+ experiences</div>
              </div>
            </Link>
            <Link to="/packages" className="service-card">
              <div className="card-img">
                <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=250&fit=crop" alt="Packages" />
                <div className="card-overlay"><div className="icon-circle" style={{ color: '#8E44AD' }}><CardTravelIcon style={{ fontSize: 26 }} /></div></div>
              </div>
              <div className="card-info">
                <h3>Tours & Packages</h3>
                <p>Complete holiday packages with everything</p>
                <div className="count" style={{ color: '#8E44AD' }}>{popularPackages.length}+ tours</div>
              </div>
            </Link>
          </div>
        </ServiceCards>

        {/* Cities */}
        <CitiesSection id="cities">
          <SectionTitle>
            <h2>Explore Rajasthan</h2>
            <p className="subtitle">Discover the most enchanting destinations in the Land of Kings</p>
            <div className="divider" />
          </SectionTitle>
          <div className="cities-grid">
            {cities.map((city) => {
              const count = hotels.filter(h => h.city === city.id).length;
              return (
                <Link to={`/search?city=${city.id}`} key={city.id}>
                  <div className="city-card">
                    <img src={city.image} alt={city.name} />
                    <div className="city-overlay"><h3>{city.name}</h3><p>{city.tagline}</p></div>
                    <div className="hotel-count">{count} Hotels</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </CitiesSection>

        {/* Popular Hotels */}
        <div style={{ background: "white", padding: "70px 0" }}>
          <HotelsSection>
            <SectionTitle>
              <h2>Popular Hotels</h2>
              <p className="subtitle">Handpicked heritage stays for an unforgettable royal experience</p>
              <div className="divider" />
            </SectionTitle>
            <div className="hotels-grid">
              {featuredHotels.map((hotel) => {
                const discount = Math.round((1 - hotel.pricePerNight / hotel.originalPrice) * 100);
                const cityObj = cities.find(c => c.id === hotel.city);
                return (
                  <Link to={`/hotel/${hotel.id}`} key={hotel.id} style={{ textDecoration: 'none' }}>
                    <div className="hotel-card">
                      <div className="hotel-img">
                        <img src={hotel.image} alt={hotel.name} />
                        <div className="discount-badge">{discount}% OFF</div>
                        <div className="type-badge">{hotel.propertyType}</div>
                        <div className="wishlist">♡</div>
                      </div>
                      <div className="hotel-info">
                        <h3>{hotel.name}</h3>
                        <p className="city-name">{cityObj ? cityObj.name : hotel.city}, Rajasthan</p>
                        <div className="rating">
                          <StarIcon className="star" style={{ fontSize: 16 }} />
                          <strong>{hotel.rating}</strong>
                          <span className="reviews">({hotel.reviews} reviews)</span>
                        </div>
                        <div className="amenities">{hotel.amenities.slice(0, 4).map((a, i) => (<span key={i}>{a}</span>))}</div>
                        <div className="price-row">
                          <div className="price">
                            <span className="original">₹{hotel.originalPrice.toLocaleString()}</span>
                            <span className="current">₹{hotel.pricePerNight.toLocaleString()}</span>
                            <span className="per-night"> / night</span>
                          </div>
                          <button className="book-btn">View Details</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="view-all"><Link to="/search">View All Hotels →</Link></div>
          </HotelsSection>
        </div>

        {/* Car Rentals Preview */}
        <CarPreviewSection id="cars">
          <SectionTitle>
            <h2>Car Rentals & Road Trips</h2>
            <p className="subtitle">Explore Rajasthan at your own pace with curated driving itineraries</p>
            <div className="divider" />
          </SectionTitle>
          <div className="cars-grid">
            {carRentals.slice(0, 3).map(car => (
              <div className="car-card" key={car.id}>
                <div className="car-img">
                  <img src={car.image} alt={car.name} />
                  <div className="type-tag">{car.type}</div>
                  <div className="pax"><PersonIcon style={{ fontSize: 13 }} /> {car.passengers}</div>
                </div>
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p className="vehicle">{car.vehicle}</p>
                  <div className="route"><MapIcon style={{ fontSize: 14, color: '#8B7355', flexShrink: 0, marginTop: 1 }} /> {car.route}</div>
                  <div className="meta-row">
                    <span className="meta"><TimerIcon /> {car.duration}</span>
                    <span className="meta"><DirectionsCarIcon /> {car.distance}</span>
                  </div>
                  <div className="price-row">
                    <div className="price">
                      <span className="amount">₹{car.totalPrice.toLocaleString()}</span>
                      <span className="label">total</span>
                    </div>
                    <button className="rent-btn">Rent Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all"><Link to="/car-rentals">View All Car Rentals →</Link></div>
        </CarPreviewSection>

        {/* Desert Safari Preview */}
        <div style={{ background: "white", padding: "70px 0" }}>
          <SafariPreviewSection>
            <SectionTitle>
              <h2>Desert Safaris & Adventures</h2>
              <p className="subtitle">Thrilling experiences across the Thar Desert and beyond</p>
              <div className="divider" />
            </SectionTitle>
            <div className="safari-grid">
              {desertSafaris.slice(0, 3).map(safari => (
                <div className="safari-card" key={safari.id}>
                  <div className="safari-img">
                    <img src={safari.image} alt={safari.name} />
                    <div className="duration-tag"><AccessTimeIcon style={{ fontSize: 14 }} /> {safari.duration}</div>
                    <div className="rating-tag"><StarIcon style={{ fontSize: 13 }} /> {safari.rating}</div>
                  </div>
                  <div className="safari-info">
                    <h3>{safari.name}</h3>
                    <p className="location"><LocationOnIcon style={{ fontSize: 14 }} /> {safari.location}</p>
                    <div className="highlights">{safari.highlights.slice(0, 4).map((h, i) => (<span key={i}>{h}</span>))}</div>
                    <div className="price-row">
                      <div className="price">
                        <span className="original">₹{safari.originalPrice.toLocaleString()}</span>
                        <span className="current">₹{safari.price.toLocaleString()}</span>
                        <span className="per">per person</span>
                      </div>
                      <button className="book-btn">Book Safari</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all"><Link to="/desert-safari">View All Safaris →</Link></div>
          </SafariPreviewSection>
        </div>

        {/* Special Offers */}
        <OffersSection id="offers">
          <SectionTitle>
            <h2>Special Offers</h2>
            <p className="subtitle">Grab these exclusive deals before they're gone</p>
            <div className="divider" />
          </SectionTitle>
          <div className="offers-scroll">
            {offers.map((offer) => (
              <div className="offer-card" key={offer.id} style={{ background: offer.color }}>
                <LocalOfferIcon style={{ fontSize: 28, opacity: 0.5, position: 'absolute', top: 16, right: 16 }} />
                <h3>{offer.title}</h3>
                <p>{offer.subtitle}</p>
                <div className="code">{offer.code}</div>
              </div>
            ))}
          </div>
        </OffersSection>

        {/* Why Us */}
        <div style={{ background: "white", padding: "70px 0" }}>
          <WhyUsSection>
            <SectionTitle>
              <h2>Why Rajasthan Stays?</h2>
              <p className="subtitle">Your trusted partner for unforgettable Rajasthan experiences</p>
              <div className="divider" />
            </SectionTitle>
            <div className="why-grid">
              <div className="why-card"><div className="icon-circle"><VerifiedIcon style={{ fontSize: 28 }} /></div><h4>Verified Properties</h4><p>Every hotel, camp, and villa is personally verified for quality and authenticity.</p></div>
              <div className="why-card"><div className="icon-circle"><PaymentsIcon style={{ fontSize: 28 }} /></div><h4>Best Price Guarantee</h4><p>We match any lower price. Book with confidence for the best deal.</p></div>
              <div className="why-card"><div className="icon-circle"><SupportAgentIcon style={{ fontSize: 28 }} /></div><h4>24/7 Concierge</h4><p>Our Rajasthan experts are available round-the-clock for any queries.</p></div>
              <div className="why-card"><div className="icon-circle"><SecurityIcon style={{ fontSize: 28 }} /></div><h4>Secure Booking</h4><p>Payments and data protected with bank-grade security encryption.</p></div>
            </div>
          </WhyUsSection>
        </div>

        {/* Testimonials */}
        <TestimonialsSection>
          <SectionTitle>
            <h2>Guest Stories</h2>
            <p className="subtitle">What our guests say about their royal experience</p>
            <div className="divider" />
          </SectionTitle>
          <div className="testimonials-grid">
            {testimonials.slice(0, 6).map((t) => (
              <div className="testimonial-card" key={t.id}>
                <div className="stars">{Array.from({ length: t.rating }).map((_, i) => (<StarIcon key={i} style={{ fontSize: 16 }} />))}</div>
                <p className="quote">"{t.text}"</p>
                <div className="author">
                  <div className="avatar">{t.name[0]}</div>
                  <div><div className="name">{t.name}</div><div className="location">{t.location}</div></div>
                </div>
              </div>
            ))}
          </div>
        </TestimonialsSection>

        <Bottom />
      </div>
    </div>
  );
};

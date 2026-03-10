import { Navbar } from "./Navbar";
import { Icondiv } from "./Icondiv";
import { Fromto } from "./Fromto";
import { Bottom } from "./Bottom";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { hotels, cities, offers, testimonials } from "../../data/rajasthanData";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";

const CitiesSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: #2C1810;
    text-align: center;
    margin-bottom: 8px;
  }

  .subtitle {
    text-align: center;
    color: #8B7355;
    font-size: 16px;
    margin-bottom: 40px;
  }

  .cities-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .city-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    height: 220px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(44, 24, 16, 0.2);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.08);
    }

    .city-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 24px;
      background: linear-gradient(transparent, rgba(44, 24, 16, 0.85));
      color: white;

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        margin-bottom: 2px;
      }

      p {
        font-size: 13px;
        opacity: 0.85;
      }
    }
  }
`;

const HotelsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: #2C1810;
    text-align: center;
    margin-bottom: 8px;
  }

  .subtitle {
    text-align: center;
    color: #8B7355;
    font-size: 16px;
    margin-bottom: 40px;
  }

  .hotels-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .hotel-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(44, 24, 16, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(44, 24, 16, 0.15);
    }

    .hotel-img {
      height: 200px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      .discount-badge {
        position: absolute;
        top: 12px;
        left: 12px;
        background: linear-gradient(135deg, #C0392B, #E67E22);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
      }

      .type-badge {
        position: absolute;
        top: 12px;
        right: 12px;
        background: rgba(44, 24, 16, 0.7);
        backdrop-filter: blur(4px);
        color: white;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
    }

    &:hover .hotel-img img {
      transform: scale(1.08);
    }

    .hotel-info {
      padding: 16px 20px 20px;

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 18px;
        color: #2C1810;
        margin-bottom: 4px;
      }

      .city-name {
        font-size: 13px;
        color: #8B7355;
        margin-bottom: 8px;
      }

      .rating {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 12px;
        font-size: 13px;
        color: #5D4E37;

        .star {
          color: #D4A017;
          font-size: 16px;
        }

        .reviews {
          color: #8B7355;
          margin-left: 4px;
        }
      }

      .amenities {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 14px;

        span {
          background: #FDF2E9;
          color: #8B7355;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: 500;
        }
      }

      .price-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .price {
          .original {
            text-decoration: line-through;
            color: #8B7355;
            font-size: 13px;
            margin-right: 6px;
          }

          .current {
            font-size: 22px;
            font-weight: 700;
            color: #C0392B;
            font-family: 'Inter', sans-serif;
          }

          .per-night {
            font-size: 11px;
            color: #8B7355;
          }
        }

        .book-btn {
          padding: 8px 20px;
          background: linear-gradient(135deg, #C0392B, #E67E22);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(192, 57, 43, 0.3);
          }
        }
      }
    }
  }
`;

const OffersSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: #2C1810;
    text-align: center;
    margin-bottom: 8px;
  }

  .subtitle {
    text-align: center;
    color: #8B7355;
    font-size: 16px;
    margin-bottom: 40px;
  }

  .offers-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .offer-card {
    border-radius: 14px;
    padding: 24px;
    color: white;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover { transform: translateY(-4px); }

    &::after {
      content: '';
      position: absolute;
      top: -30px;
      right: -30px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: rgba(255,255,255,0.12);
    }

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      margin-bottom: 6px;
    }

    p {
      font-size: 13px;
      opacity: 0.9;
      margin-bottom: 16px;
    }

    .code {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      padding: 4px 14px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }
`;

const TestimonialsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: #2C1810;
    text-align: center;
    margin-bottom: 8px;
  }

  .subtitle {
    text-align: center;
    color: #8B7355;
    font-size: 16px;
    margin-bottom: 40px;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .testimonial-card {
    background: white;
    padding: 28px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(44, 24, 16, 0.06);
    border-left: 4px solid #D4A017;

    .quote {
      font-size: 15px;
      color: #5D4E37;
      line-height: 1.7;
      margin-bottom: 16px;
      font-style: italic;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 12px;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #C0392B, #E67E22);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
        font-size: 16px;
      }

      .name {
        font-weight: 600;
        color: #2C1810;
        font-size: 14px;
      }

      .location {
        font-size: 12px;
        color: #8B7355;
      }
    }

    .stars {
      margin-bottom: 12px;
      color: #D4A017;
    }
  }
`;

const cityImages = {
  "jaipur": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop",
  "udaipur": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
  "jodhpur": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
  "jaisalmer": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop",
  "pushkar": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
  "mount-abu": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
};

export const Main = () => {
  const [searchData, setSearchData] = useState({
    city: "",
    checkin: "",
    checkout: "",
    guests: "2",
  });

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
      <Header />
      <Navbar>
        {/* Top Navigation */}
        <div className="topdiv">
          <Link to="/" className="brand">
            <AccountBalanceIcon className="brand-icon" />
            <div>
              <h1>Rajasthan Stays</h1>
              <span>Heritage Hotel Booking</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/search">Explore Hotels</Link>
            <a href="#cities">Destinations</a>
            <a href="#offers">Offers</a>
          </div>
        </div>

        {/* Category Icons */}
        <Icondiv />

        {/* Hero Content */}
        <div className="hero-content">
          <h2>Experience Royal Rajasthan</h2>
          <p>Book heritage hotels, luxury resorts & desert camps in the Land of Kings</p>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <Fromto handleChange={handleData} />
          <button className="search-btn" onClick={saveSearch}>
            <Link to="/search">SEARCH HOTELS</Link>
          </button>
        </div>
      </Navbar>

      {/* Main Content */}
      <div style={{ background: "#FDF2E9" }}>
        {/* Featured Cities */}
        <CitiesSection id="cities">
          <h2>Explore Rajasthan</h2>
          <p className="subtitle">Discover the most enchanting destinations in the Land of Kings</p>
          <div className="cities-grid">
            {cities.map((city) => (
              <Link to={`/search?city=${city.id}`} key={city.id}>
                <div className="city-card">
                  <img src={cityImages[city.id]} alt={city.name} />
                  <div className="city-overlay">
                    <h3>{city.name}</h3>
                    <p>{city.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CitiesSection>

        {/* Popular Hotels */}
        <HotelsSection>
          <h2>Popular Hotels</h2>
          <p className="subtitle">Handpicked stays for an unforgettable Rajasthan experience</p>
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
                    </div>
                    <div className="hotel-info">
                      <h3>{hotel.name}</h3>
                      <p className="city-name">{cityObj ? cityObj.name : hotel.city}</p>
                      <div className="rating">
                        <StarIcon className="star" style={{ fontSize: 16 }} />
                        <strong>{hotel.rating}</strong>
                        <span className="reviews">({hotel.reviews} reviews)</span>
                      </div>
                      <div className="amenities">
                        {hotel.amenities.slice(0, 4).map((a, i) => (
                          <span key={i}>{a}</span>
                        ))}
                      </div>
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
        </HotelsSection>

        {/* Special Offers */}
        <OffersSection id="offers">
          <h2>Special Offers</h2>
          <p className="subtitle">Grab these exclusive deals before they're gone</p>
          <div className="offers-grid">
            {offers.map((offer) => (
              <div className="offer-card" key={offer.id} style={{ background: offer.color }}>
                <h3>{offer.title}</h3>
                <p>{offer.subtitle}</p>
                <div className="code">Use: {offer.code}</div>
              </div>
            ))}
          </div>
        </OffersSection>

        {/* Testimonials */}
        <TestimonialsSection>
          <h2>Guest Stories</h2>
          <p className="subtitle">What our guests say about their royal experience</p>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <div className="stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} style={{ fontSize: 18 }} />
                  ))}
                </div>
                <p className="quote">"{t.text}"</p>
                <div className="author">
                  <div className="avatar">{t.name[0]}</div>
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="location">{t.location}</div>
                  </div>
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

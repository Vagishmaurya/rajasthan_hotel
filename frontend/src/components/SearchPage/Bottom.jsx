import styled from "styled-components";
import { Link } from "react-router-dom";
import { cities } from "../../data/rajasthanData";
import StarIcon from "@mui/icons-material/Star";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import SpaIcon from "@mui/icons-material/Spa";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

const Style = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 28px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px 60px;
  min-height: 60vh;

  .filters {
    background: white;
    border-radius: 14px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(44, 24, 16, 0.06);
    height: fit-content;
    position: sticky;
    top: 80px;

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 20px;
      color: #2C1810;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid #F5E6D3;
    }

    .filter-group {
      margin-bottom: 24px;

      h4 {
        font-family: 'Inter', sans-serif;
        font-size: 13px;
        font-weight: 600;
        color: #5D4E37;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 12px;
      }

      .filter-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 0;
        cursor: pointer;

        input[type="checkbox"], input[type="radio"] {
          accent-color: #C0392B;
          width: 16px;
          height: 16px;
        }

        label {
          font-size: 14px;
          color: #5D4E37;
          cursor: pointer;
        }
      }

      .price-range {
        width: 100%;

        .price-label {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #8B7355;
          margin-bottom: 6px;
        }

        input[type="range"] {
          width: 100%;
          accent-color: #C0392B;
          height: 6px;
        }

        .price-value {
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          color: #C0392B;
          margin-top: 6px;
        }
      }
    }
  }

  .results {
    .results-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h2 {
        font-family: 'Playfair Display', serif;
        font-size: 24px;
        color: #2C1810;
      }

      .count {
        color: #8B7355;
        font-size: 14px;
      }
    }

    .no-results {
      text-align: center;
      padding: 60px 20px;
      color: #8B7355;

      h3 {
        font-size: 24px;
        color: #5D4E37;
        margin-bottom: 8px;
      }

      p { font-size: 15px; }
    }

    .hotel-listing {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .hotel-card {
      background: white;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(44, 24, 16, 0.06);
      display: grid;
      grid-template-columns: 300px 1fr;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-decoration: none;
      color: inherit;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 30px rgba(44, 24, 16, 0.12);
      }

      .card-img {
        height: 240px;
        overflow: hidden;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .badge {
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

        .type-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(44, 24, 16, 0.7);
          backdrop-filter: blur(4px);
          color: white;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
        }
      }

      &:hover .card-img img {
        transform: scale(1.05);
      }

      .card-info {
        padding: 20px 24px;
        display: flex;
        flex-direction: column;

        h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: #2C1810;
          margin-bottom: 4px;
        }

        .city {
          color: #8B7355;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .rating-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;

          .rating-badge {
            background: #27AE60;
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 700;
          }

          .rating-text {
            font-size: 13px;
            color: #5D4E37;
          }

          .reviews {
            color: #8B7355;
            font-size: 12px;
          }
        }

        .description {
          font-size: 13px;
          color: #5D4E37;
          line-height: 1.6;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .amenities-row {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;

          .amenity {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 12px;
            color: #8B7355;
          }
        }

        .price-book-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid #F5E6D3;

          .price {
            .original {
              text-decoration: line-through;
              color: #8B7355;
              font-size: 14px;
            }

            .current {
              font-size: 26px;
              font-weight: 800;
              color: #C0392B;
              font-family: 'Inter', sans-serif;
              display: block;
              line-height: 1;
            }

            .per-night {
              font-size: 12px;
              color: #8B7355;
            }
          }

          .book-btn {
            padding: 12px 28px;
            background: linear-gradient(135deg, #C0392B, #E67E22);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            transition: all 0.3s;

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(192, 57, 43, 0.3);
            }
          }
        }
      }
    }
  }
`;

const amenityIcons = {
  "Free WiFi": <WifiIcon style={{ fontSize: 14 }} />,
  "Swimming Pool": <PoolIcon style={{ fontSize: 14 }} />,
  "Pool": <PoolIcon style={{ fontSize: 14 }} />,
  "Rooftop Pool": <PoolIcon style={{ fontSize: 14 }} />,
  "Spa": <SpaIcon style={{ fontSize: 14 }} />,
  "Restaurant": <RestaurantIcon style={{ fontSize: 14 }} />,
  "Rooftop Restaurant": <RestaurantIcon style={{ fontSize: 14 }} />,
  "Fine Dining": <RestaurantIcon style={{ fontSize: 14 }} />,
  "Parking": <LocalParkingIcon style={{ fontSize: 14 }} />,
};

export const Bottom = ({ data, filters, onFilter }) => {
  return (
    <Style>
      <div className="filters">
        <h3>Filters</h3>

        <div className="filter-group">
          <h4>Price Range</h4>
          <div className="price-range">
            <div className="price-label">
              <span>₹1,000</span>
              <span>₹30,000</span>
            </div>
            <input
              type="range"
              min="1000"
              max="30000"
              step="500"
              value={filters.priceRange}
              onChange={(e) => onFilter("priceRange", Number(e.target.value))}
            />
            <div className="price-value">Up to ₹{filters.priceRange.toLocaleString()}</div>
          </div>
        </div>

        <div className="filter-group">
          <h4>Star Rating</h4>
          {[5, 4, 3, 2].map((star) => (
            <div className="filter-item" key={star}>
              <input
                type="radio"
                name="stars"
                id={`star-${star}`}
                checked={filters.stars === star}
                onChange={() => onFilter("stars", star)}
              />
              <label htmlFor={`star-${star}`}>
                {Array.from({ length: star }).map((_, i) => (
                  <StarIcon key={i} style={{ fontSize: 14, color: "#D4A017" }} />
                ))}
                {" & above"}
              </label>
            </div>
          ))}
          <div className="filter-item">
            <input
              type="radio"
              name="stars"
              id="star-all"
              checked={filters.stars === 0}
              onChange={() => onFilter("stars", 0)}
            />
            <label htmlFor="star-all">All Ratings</label>
          </div>
        </div>

        <div className="filter-group">
          <h4>Property Type</h4>
          {["Heritage Hotel", "Luxury Resort", "Desert Camp", "Haveli", "Boutique Hotel", "Guest House", "Villa"].map((type) => (
            <div className="filter-item" key={type}>
              <input type="checkbox" id={`type-${type}`} />
              <label htmlFor={`type-${type}`}>{type}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="results">
        <div className="results-header">
          <h2>
            {filters.city
              ? `Hotels in ${cities.find((c) => c.id === filters.city)?.name || "Rajasthan"}`
              : "All Hotels in Rajasthan"}
          </h2>
          <span className="count">{data.length} properties found</span>
        </div>

        {data.length === 0 ? (
          <div className="no-results">
            <h3>No hotels found</h3>
            <p>Try adjusting your filters to see more results</p>
          </div>
        ) : (
          <div className="hotel-listing">
            {data.map((hotel) => {
              const cityObj = cities.find((c) => c.id === hotel.city);
              const discount = Math.round(
                (1 - hotel.pricePerNight / hotel.originalPrice) * 100
              );
              return (
                <Link
                  to={`/hotel/${hotel.id}`}
                  key={hotel.id}
                  className="hotel-card"
                >
                  <div className="card-img">
                    <img src={hotel.image} alt={hotel.name} />
                    <div className="badge">{discount}% OFF</div>
                    <div className="type-tag">{hotel.propertyType}</div>
                  </div>
                  <div className="card-info">
                    <h3>{hotel.name}</h3>
                    <p className="city">{cityObj ? cityObj.name : hotel.city}, Rajasthan</p>
                    <div className="rating-row">
                      <span className="rating-badge">{hotel.rating}</span>
                      <span className="rating-text">
                        {hotel.rating >= 4.5
                          ? "Excellent"
                          : hotel.rating >= 4
                            ? "Very Good"
                            : "Good"}
                      </span>
                      <span className="reviews">
                        ({hotel.reviews} reviews)
                      </span>
                    </div>
                    <p className="description">{hotel.description}</p>
                    <div className="amenities-row">
                      {hotel.amenities.slice(0, 5).map((a, i) => (
                        <span className="amenity" key={i}>
                          {amenityIcons[a] || null} {a}
                        </span>
                      ))}
                    </div>
                    <div className="price-book-row">
                      <div className="price">
                        <span className="original">
                          ₹{hotel.originalPrice.toLocaleString()}
                        </span>
                        <span className="current">
                          ₹{hotel.pricePerNight.toLocaleString()}
                        </span>
                        <span className="per-night">per night</span>
                      </div>
                      <button className="book-btn">Book Now</button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Style>
  );
};

import styled from "styled-components";
import { cities } from "../../data/rajasthanData";

const Style = styled.div`
  background: linear-gradient(135deg, #922B21 0%, #C0392B 40%, #E67E22 100%);
  padding-bottom: 30px;

  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 40px;

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      color: white;
      text-decoration: none;

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 20px;
      }
    }

    .nav-links {
      display: flex;
      gap: 20px;

      a {
        color: rgba(255,255,255,0.9);
        font-size: 14px;
        font-weight: 500;
        padding: 6px 14px;
        border-radius: 6px;
        transition: background 0.3s;

        &:hover { background: rgba(255,255,255,0.12); }
      }
    }
  }

  .search-bar {
    max-width: 1100px;
    margin: 10px auto 0;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(8px);
    border-radius: 12px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;

    .field {
      flex: 1;
      min-width: 140px;

      label {
        display: block;
        font-size: 10px;
        color: rgba(255,255,255,0.7);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 4px;
        font-weight: 600;
      }

      select, input {
        width: 100%;
        padding: 8px 10px;
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 6px;
        background: rgba(255,255,255,0.15);
        color: white;
        font-size: 13px;
        font-family: 'Inter', sans-serif;
        outline: none;

        &:focus {
          border-color: #D4A017;
        }

        option {
          background: #922B21;
          color: white;
        }
      }
    }

    button {
      padding: 10px 28px;
      background: #D4A017;
      color: #2C1810;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s;
      margin-top: 16px;

      &:hover {
        background: #F1C40F;
        transform: translateY(-1px);
      }
    }
  }
`;

export const SearchBox = ({ filters, onFilter }) => {
  return (
    <Style>
      <div className="search-bar">
        <div className="field">
          <label>Destination</label>
          <select
            value={filters.city}
            onChange={(e) => onFilter("city", e.target.value)}
          >
            <option value="">All Cities</option>
            {cities.map((c) => (
              <option value={c.id} key={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Check-in</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>Check-out</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>Guests</label>
          <select>
            <option>2 Guests</option>
            <option>1 Guest</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>
        <div className="field">
          <label>Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilter("sortBy", e.target.value)}
          >
            <option value="default">Recommended</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
    </Style>
  );
};

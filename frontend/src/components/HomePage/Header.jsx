import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SpaIcon from "@mui/icons-material/Spa";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Icondivcss = styled.div`
  .icondiv {
    height: 60px;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    z-index: 100;
    text-align: center;
    box-shadow: 0 2px 12px rgba(44, 24, 16, 0.08);

    .brand-small {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: 30px;
      color: #C0392B;
      text-decoration: none;

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 20px;
        font-weight: 700;
      }
    }

    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 50%;
      margin-left: auto;
      margin-right: auto;

      p {
        padding: 0px;
        margin: -4px 0 0;
        color: #5D4E37;
        font-size: 11px;
        font-weight: 500;
      }
      span {
        color: #8B7355;
        cursor: pointer;
        transition: color 0.3s;
      }
      span:hover {
        color: #C0392B;
      }
      div:hover p {
        color: #C0392B;
      }
    }
  }
  .disnone {
    display: none;
  }
`;

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);

  return (
    <Icondivcss>
      <div className={nav ? "icondiv" : "disnone"}>
        <Link to="/" className="brand-small">
          <AccountBalanceIcon style={{ fontSize: 24 }} />
          <h3>Rajasthan Stays</h3>
        </Link>
        <div className="icons">
          <div>
            <span><HotelIcon style={{ fontSize: 26, padding: 2 }} /></span>
            <p>Hotels</p>
          </div>
          <div>
            <span><HomeWorkIcon style={{ fontSize: 26, padding: 2 }} /></span>
            <p>Heritage Stays</p>
          </div>
          <div>
            <span><AccountBalanceIcon style={{ fontSize: 26, padding: 2 }} /></span>
            <p>Palaces</p>
          </div>
          <div>
            <span><SpaIcon style={{ fontSize: 26, padding: 2 }} /></span>
            <p>Spa & Wellness</p>
          </div>
          <div>
            <span><RestaurantIcon style={{ fontSize: 26, padding: 2 }} /></span>
            <p>Dining</p>
          </div>
        </div>
      </div>
    </Icondivcss>
  );
};

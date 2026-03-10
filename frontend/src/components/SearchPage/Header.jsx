import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SpaIcon from "@mui/icons-material/Spa";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Icondivcss = styled.div`
  .icondiv {
    height: 60px;
    width: 100%;
    margin: auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
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
        font-size: 18px;
        font-weight: 700;
      }
    }

    .icons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 40%;
      margin-left: auto;
      margin-right: 30px;

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
      span:hover, div:hover p {
        color: #C0392B;
      }
    }
  }
`;

export const Header = () => {
  return (
    <Icondivcss>
      <div className="icondiv">
        <Link to="/" className="brand-small">
          <AccountBalanceIcon style={{ fontSize: 22 }} />
          <h3>Rajasthan Stays</h3>
        </Link>
        <div className="icons">
          <div>
            <span><HotelIcon style={{ fontSize: 24, padding: 2 }} /></span>
            <p>Hotels</p>
          </div>
          <div>
            <span><HomeWorkIcon style={{ fontSize: 24, padding: 2 }} /></span>
            <p>Heritage</p>
          </div>
          <div>
            <span><AccountBalanceIcon style={{ fontSize: 24, padding: 2 }} /></span>
            <p>Palaces</p>
          </div>
          <div>
            <span><SpaIcon style={{ fontSize: 24, padding: 2 }} /></span>
            <p>Wellness</p>
          </div>
        </div>
      </div>
    </Icondivcss>
  );
};

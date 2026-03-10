import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LandscapeIcon from "@mui/icons-material/Landscape";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Nav = styled.nav`
  background: white;
  box-shadow: 0 2px 16px rgba(44, 24, 16, 0.08);
  position: sticky;
  top: 0;
  z-index: 200;

  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 64px;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #C0392B;
    text-decoration: none;
    z-index: 202;

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .service-tabs {
    display: flex;
    gap: 0;
    height: 64px;
    flex: 1;
    justify-content: center;

    @media (max-width: 968px) {
      display: ${props => props.isOpen ? 'flex' : 'none'};
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: white;
      padding-top: 80px;
      justify-content: flex-start;
      z-index: 201;
      animation: fadeIn 0.3s ease;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .tab {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 24px;
    height: 100%;
    color: #8B7355;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
    position: relative;

    svg { font-size: 20px; }

    @media (max-width: 968px) {
      height: 60px;
      width: 100%;
      padding: 0 30px;
      border-bottom: 1px solid #f5f5f5;
      font-size: 16px;
    }

    &:hover {
      color: #C0392B;
      background: rgba(192, 57, 43, 0.03);
    }

    &.active {
      color: #C0392B;
      border-bottom-color: #C0392B;
      font-weight: 600;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 8px;
        height: 8px;
        background: #C0392B;
        border-radius: 50%;
        bottom: -5px;

        @media (max-width: 968px) {
          left: 15px;
          bottom: 50%;
          transform: translateY(50%);
        }
      }
    }
  }

  .right-links {
    display: flex;
    gap: 16px;
    align-items: center;
    flex-shrink: 0;

    @media (max-width: 968px) {
      display: ${props => props.isOpen ? 'flex' : 'none'};
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 202;
      flex-direction: column;
      width: 80%;
    }

    .help-btn {
      font-size: 13px;
      color: #5D4E37;
      padding: 6px 14px;
      border-radius: 6px;
      transition: background 0.3s;
      cursor: pointer;

      &:hover { background: #FDF2E9; }

      @media (max-width: 968px) {
        text-align: center;
        width: 100%;
      }
    }

    .login-btn {
      padding: 8px 20px;
      background: linear-gradient(135deg, #C0392B, #E67E22);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      text-decoration: none;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(192, 57, 43, 0.3);
      }

      @media (max-width: 968px) {
        text-align: center;
        width: 100%;
        padding: 12px;
      }
    }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
    color: #C0392B;
    z-index: 202;

    @media (max-width: 968px) {
      display: block;
    }
  }
`;

export const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    const isActive = (route) => {
        if (route === "/search" && (path === "/search" || path.startsWith("/hotel") || path.startsWith("/booking"))) return true;
        if (route === "/" && path === "/") return true;
        return path === route;
    };

    return (
        <Nav isOpen={isOpen}>
            <div className="nav-inner">
                <Link to="/" className="brand" onClick={() => setIsOpen(false)}>
                    <AccountBalanceIcon style={{ fontSize: 24 }} />
                    <h3>Rajasthan Stays</h3>
                </Link>

                <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </div>

                <div className="service-tabs">
                    <Link to="/search" className={`tab ${isActive("/search") ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                        <HotelIcon /> Hotels
                    </Link>
                    <Link to="/car-rentals" className={`tab ${isActive("/car-rentals") ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                        <DirectionsCarIcon /> Car Rentals
                    </Link>
                    <Link to="/desert-safari" className={`tab ${isActive("/desert-safari") ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                        <LandscapeIcon /> Desert Safari
                    </Link>
                    <Link to="/packages" className={`tab ${isActive("/packages") ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                        <CardTravelIcon /> Tours & Packages
                    </Link>
                </div>

                <div className="right-links">
                    <span className="help-btn" onClick={() => setIsOpen(false)}>Help</span>
                    <span className="login-btn" onClick={() => setIsOpen(false)}>Login</span>
                </div>
            </div>
        </Nav>
    );
};

import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SpaIcon from "@mui/icons-material/Spa";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PoolIcon from "@mui/icons-material/Pool";
import { Icondivcss } from "./Icondivcss";

export const Icondiv = () => {
  return (
    <Icondivcss>
      <div className="icondiv">
        <div>
          <span><HotelIcon style={{ fontSize: 36, padding: 4 }} /></span>
          <p>Hotels</p>
        </div>
        <div>
          <span><HomeWorkIcon style={{ fontSize: 36, padding: 4 }} /></span>
          <p>Heritage Stays</p>
        </div>
        <div>
          <span><AccountBalanceIcon style={{ fontSize: 36, padding: 4 }} /></span>
          <p>Palaces</p>
        </div>
        <div>
          <span><SpaIcon style={{ fontSize: 36, padding: 4 }} /></span>
          <p>Spa & Wellness</p>
        </div>
        <div>
          <span><PoolIcon style={{ fontSize: 36, padding: 4 }} /></span>
          <p>Resorts</p>
        </div>
      </div>
    </Icondivcss>
  );
};

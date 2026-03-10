import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TopNav } from "../shared/TopNav";
import { Bottom } from "../HomePage/Bottom";
import { desertSafaris } from "../../data/rajasthanData";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const HeroBanner = styled.div`
  background: linear-gradient(135deg, #7D3C14 0%, #C0392B 40%, #E67E22 100%);
  position: relative;
  overflow: hidden;
  padding: 60px 20px 50px;
  text-align: center;
  color: white;

  &::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: url('https://images.unsplash.com/photo-1549144511-f099e773c147?w=1400&h=500&fit=crop') center/cover;
    opacity: 0.15;
  }
  & > * { position: relative; z-index: 1; }

  h1 { font-family: 'Playfair Display', serif; font-size: 44px; margin-bottom: 10px; text-shadow: 0 2px 10px rgba(0,0,0,0.2); }
  p { font-size: 18px; opacity: 0.9; max-width: 650px; margin: 0 auto 30px; }

  .filter-bar {
    max-width: 700px;
    margin: 0 auto;
    background: rgba(255,255,255,0.95);
    border-radius: 14px;
    padding: 18px 24px;
    display: flex;
    gap: 14px;
    align-items: flex-end;
    box-shadow: 0 15px 50px rgba(0,0,0,0.2);

    .field { flex: 1;
      label { display: block; font-size: 11px; font-weight: 600; color: #8B7355; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 5px; }
      select { width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 14px; font-family: 'Inter', sans-serif; outline: none;
        &:focus { border-color: #E67E22; }
      }
    }
    .search-btn { padding: 12px 30px; background: linear-gradient(135deg, #E67E22, #F39C12); color: white; border: none; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; white-space: nowrap;
      &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(230, 126, 34, 0.4); }
    }
  }

  .highlights-row {
    display: flex; justify-content: center; gap: 40px; margin-top: 30px;
    .hl { display: flex; align-items: center; gap: 8px; font-size: 14px; opacity: 0.9;
      svg { font-size: 20px; }
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
    .line { width: 50px; height: 3px; background: linear-gradient(90deg, #E67E22, #F39C12); margin: 14px auto 0; border-radius: 2px; }
  }

  .safari-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .safari-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(44, 24, 16, 0.06);
    transition: transform 0.4s, box-shadow 0.4s;

    &:hover { transform: translateY(-8px); box-shadow: 0 16px 50px rgba(44, 24, 16, 0.18); }

    .safari-img {
      height: 220px; overflow: hidden; position: relative;
      img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
      .duration-tag { position: absolute; bottom: 14px; left: 14px; background: rgba(44, 24, 16, 0.85); color: white; padding: 6px 14px; border-radius: 8px; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 5px; backdrop-filter: blur(4px); }
      .rating-tag { position: absolute; top: 14px; right: 14px; background: #27AE60; color: white; padding: 5px 12px; border-radius: 8px; font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 4px; }
      .group-tag { position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,0.9); color: #2C1810; padding: 5px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 4px; }
    }
    &:hover .safari-img img { transform: scale(1.1); }

    .safari-info {
      padding: 20px 22px 22px;

      h3 { font-family: 'Playfair Display', serif; font-size: 20px; color: #2C1810; margin-bottom: 6px; }
      .location { font-size: 13px; color: #E67E22; font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 5px; }
      .description { font-size: 13px; color: #5D4E37; line-height: 1.7; margin-bottom: 14px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

      .highlights {
        display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;
        span { display: flex; align-items: center; gap: 4px; background: #FFF3E0; color: #E67E22; font-size: 11px; padding: 5px 10px; border-radius: 6px; font-weight: 600;
          svg { font-size: 13px; }
        }
      }

      .reviews-line { font-size: 12px; color: #8B7355; margin-bottom: 14px; }

      .price-row {
        display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 2px solid #F5E6D3;
        .price {
          .original { text-decoration: line-through; color: #8B7355; font-size: 14px; margin-right: 6px; }
          .current { font-size: 26px; font-weight: 800; color: #E67E22; font-family: 'Inter', sans-serif; }
          .per { font-size: 11px; color: #8B7355; display: block; }
        }
        .book-btn { padding: 11px 24px; background: linear-gradient(135deg, #E67E22, #F39C12); color: white; border: none; border-radius: 10px; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.3s;
          &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(230, 126, 34, 0.35); }
        }
      }
    }
  }

  .experience-strip {
    margin-top: 60px; background: linear-gradient(135deg, #2C1810 0%, #4A2C1A 100%); border-radius: 16px; padding: 40px; color: white; display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; text-align: center;
    .exp-item {
      .icon { font-size: 36px; color: #D4A017; margin-bottom: 10px; display: block; }
      h4 { font-family: 'Playfair Display', serif; font-size: 16px; margin-bottom: 6px; }
      p { font-size: 12px; opacity: 0.7; line-height: 1.5; }
    }
  }
`;

export const DesertSafariPage = () => {
  const navigate = useNavigate();

  const handleBook = (safari) => {
    localStorage.setItem("bookingData", JSON.stringify({
      type: "safari",
      item: safari,
      bookedAt: new Date().toISOString()
    }));
    navigate(`/payment/${safari.id}`);
  };
  const [locFilter, setLocFilter] = useState("");

  const filtered = locFilter
    ? desertSafaris.filter(s => s.location.toLowerCase().includes(locFilter.toLowerCase()))
    : desertSafaris;

  return (
    <div>
      <TopNav />
      <HeroBanner>
        <h1>Desert Safaris & Adventures</h1>
        <p>Thrilling camel rides, dune bashing, cultural shows & overnight camps under the stars of the Thar Desert</p>
        <div className="filter-bar">
          <div className="field">
            <label>Location</label>
            <select value={locFilter} onChange={e => setLocFilter(e.target.value)}>
              <option value="">All Locations</option>
              <option value="Jaisalmer">Jaisalmer</option>
              <option value="Jodhpur">Jodhpur</option>
              <option value="Pushkar">Pushkar</option>
              <option value="Jaipur">Jaipur</option>
            </select>
          </div>
          <div className="field">
            <label>Date</label>
            <select><option>Choose Date</option><option>This Weekend</option><option>Next Week</option><option>Custom Date</option></select>
          </div>
          <div className="field">
            <label>Group Size</label>
            <select><option>2 People</option><option>4 People</option><option>6 People</option><option>10+ People</option></select>
          </div>
          <button className="search-btn">Find Safaris</button>
        </div>
        <div className="highlights-row">
          <div className="hl"><CameraAltIcon /> Photography Tours</div>
          <div className="hl"><NightsStayIcon /> Overnight Stays</div>
          <div className="hl"><LocalFireDepartmentIcon /> Bonfire Nights</div>
          <div className="hl"><MusicNoteIcon /> Cultural Shows</div>
        </div>
      </HeroBanner>

      <Content>
        <div className="page-inner">
          <div className="section-title">
            <h2>{locFilter ? `Safaris in ${locFilter}` : "All Desert Safaris & Adventures"}</h2>
            <p>Hand-curated experiences — from serene camel rides to adrenaline-pumping dune bashing</p>
            <div className="line" />
          </div>

          <div className="safari-grid">
            {filtered.map(safari => (
              <div className="safari-card" key={safari.id}>
                <div className="safari-img">
                  <img src={safari.image} alt={safari.name} />
                  <div className="duration-tag"><AccessTimeIcon style={{ fontSize: 14 }} /> {safari.duration}</div>
                  <div className="rating-tag"><StarIcon style={{ fontSize: 14 }} /> {safari.rating}</div>
                  <div className="group-tag"><GroupIcon style={{ fontSize: 14 }} /> {safari.groupSize} people</div>
                </div>
                <div className="safari-info">
                  <h3>{safari.name}</h3>
                  <p className="location"><LocationOnIcon style={{ fontSize: 15 }} /> {safari.location}</p>
                  <p className="description">{safari.description}</p>
                  <div className="highlights">
                    {safari.highlights.slice(0, 4).map((h, i) => (
                      <span key={i}><CheckCircleIcon /> {h}</span>
                    ))}
                  </div>
                  <p className="reviews-line">⭐ {safari.reviews} verified reviews</p>
                  <div className="price-row">
                    <div className="price">
                      <span className="original">₹{safari.originalPrice.toLocaleString()}</span>
                      <span className="current">₹{safari.price.toLocaleString()}</span>
                      <span className="per">per person</span>
                    </div>
                    <button className="book-btn" onClick={() => handleBook(safari)}>Book Safari</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-strip">
            <div className="exp-item"><span className="icon">🐪</span><h4>Camel Safaris</h4><p>Glide across golden dunes at sunset on decorated camels</p></div>
            <div className="exp-item"><span className="icon">🏕️</span><h4>Desert Camping</h4><p>Luxury tents under a canopy of a billion stars</p></div>
            <div className="exp-item"><span className="icon">💃</span><h4>Folk Performances</h4><p>Kalbeliya & Ghoomar dance by bonfire light</p></div>
            <div className="exp-item"><span className="icon">🏜️</span><h4>Dune Bashing</h4><p>Adrenaline-filled 4x4 rides over massive sand dunes</p></div>
          </div>
        </div>
      </Content>
      <Bottom />
    </div>
  );
};

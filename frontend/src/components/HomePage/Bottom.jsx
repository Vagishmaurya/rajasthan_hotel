import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Bottomcss = styled.div`
  background: #2C1810;
  color: #D4C5B0;
  padding: 60px 40px 30px;

  .footer-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-bottom: 40px;

    h3 {
      color: #D4A017;
      font-family: 'Playfair Display', serif;
      font-size: 16px;
      margin-bottom: 16px;
      letter-spacing: 1px;
    }

    p {
      font-size: 13px;
      line-height: 2;
      cursor: pointer;
      transition: color 0.3s;

      &:hover { color: #F39C12; }
    }
  }

  .footer-about {
    max-width: 1200px;
    margin: 0 auto 40px;
    padding-top: 30px;
    border-top: 1px solid rgba(212,160,23,0.2);

    h3 {
      color: #D4A017;
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      margin-bottom: 12px;
    }

    p {
      font-size: 13px;
      line-height: 1.8;
      max-width: 800px;
    }
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    border-top: 1px solid rgba(212,160,23,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .socials {
      display: flex;
      gap: 16px;

      div {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(212,160,23,0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background: #D4A017;
          color: #2C1810;
        }
      }
    }

    p {
      font-size: 12px;
      color: #8B7355;
    }
  }
`;

export const Bottom = () => {
    return (
        <Bottomcss>
            <div className="footer-grid">
                <div>
                    <h3>POPULAR CITIES</h3>
                    <p>Hotels in Jaipur</p>
                    <p>Hotels in Udaipur</p>
                    <p>Hotels in Jodhpur</p>
                    <p>Hotels in Jaisalmer</p>
                    <p>Hotels in Pushkar</p>
                    <p>Hotels in Mount Abu</p>
                    <p>Hotels in Bikaner</p>
                    <p>Hotels in Ajmer</p>
                </div>
                <div>
                    <h3>PROPERTY TYPES</h3>
                    <p>Heritage Hotels</p>
                    <p>Luxury Resorts</p>
                    <p>Desert Camps</p>
                    <p>Palace Hotels</p>
                    <p>Havelis</p>
                    <p>Villas & Homestays</p>
                    <p>Budget Hotels</p>
                </div>
                <div>
                    <h3>EXPERIENCES</h3>
                    <p>Desert Safari</p>
                    <p>Camel Rides</p>
                    <p>Palace Tours</p>
                    <p>Cultural Shows</p>
                    <p>Rajasthani Cuisine</p>
                    <p>Spa & Wellness</p>
                    <p>Heritage Walks</p>
                </div>
                <div>
                    <h3>RAJASTHAN STAYS</h3>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cancellation Policy</p>
                    <p>Partner With Us</p>
                    <p>Careers</p>
                </div>
            </div>
            <div className="footer-about">
                <h3>Discover Rajasthan</h3>
                <p>
                    Rajasthan, the Land of Kings, is India's most vibrant and culturally rich state. From the pink-hued walls of Jaipur to the golden dunes of Jaisalmer, from the romantic lakes of Udaipur to the mighty forts of Jodhpur — every city tells a story of royal grandeur. Rajasthan Stays curates the finest heritage hotels, luxury resorts, and authentic desert camps to give you an unforgettable royal experience.
                </p>
            </div>
            <div className="footer-bottom">
                <div className="socials">
                    <div><FacebookIcon style={{ fontSize: 18 }} /></div>
                    <div><TwitterIcon style={{ fontSize: 18 }} /></div>
                    <div><InstagramIcon style={{ fontSize: 18 }} /></div>
                </div>
                <p>© 2026 Rajasthan Stays. All rights reserved.</p>
            </div>
        </Bottomcss>
    );
};
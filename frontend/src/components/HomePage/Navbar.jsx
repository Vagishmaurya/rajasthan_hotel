import styled from 'styled-components'
export const Navbar = styled.div`
  min-height: 600px;
  background: linear-gradient(135deg, #922B21 0%, #C0392B 30%, #E67E22 70%, #F39C12 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&h=900&fit=crop') center/cover no-repeat;
    opacity: 0.15;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  .topdiv {
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;
    text-decoration: none;

    .brand-icon {
      font-size: 36px;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    span {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 400;
      opacity: 0.8;
      letter-spacing: 2px;
      text-transform: uppercase;
      display: block;
      margin-top: -4px;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 24px;

    a {
      color: rgba(255,255,255,0.9);
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
      padding: 8px 16px;
      border-radius: 8px;

      &:hover {
        background: rgba(255,255,255,0.15);
        color: white;
      }
    }
  }

  .hero-content {
    text-align: center;
    padding: 60px 20px 30px;
    color: white;

    h2 {
      font-family: 'Playfair Display', serif;
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 12px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }

    p {
      font-size: 18px;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
      font-weight: 300;
    }
  }

  .search-box {
    max-width: 900px;
    margin: 30px auto 0;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 24px 30px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    display: flex;
    align-items: flex-end;
    gap: 16px;
    flex-wrap: wrap;

    .search-field {
      flex: 1;
      min-width: 150px;

      label {
        display: block;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #8B7355;
        margin-bottom: 6px;
      }

      select, input {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #F5E6D3;
        border-radius: 8px;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        color: #2C1810;
        background: white;
        transition: border-color 0.3s;
        outline: none;

        &:focus {
          border-color: #D4A017;
        }
      }
    }

    .search-btn {
      padding: 12px 36px;
      background: linear-gradient(135deg, #C0392B 0%, #E67E22 100%);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(192, 57, 43, 0.3);
      min-width: 140px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(192, 57, 43, 0.4);
      }

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`

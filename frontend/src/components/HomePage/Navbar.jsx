import styled from 'styled-components'
export const Navbar = styled.div`
  min-height: 600px;
  background: linear-gradient(135deg, #922B21 0%, #C0392B 30%, #E67E22 70%, #F39C12 100%);
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  width: 100%;

  @media (max-width: 768px) {
    min-height: 100vh;
    overflow-x: hidden;
  }

  @media (max-width: 480px) {
    min-height: 100vh;
    overflow-x: hidden;
  }

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
    position: relative;

    @media (max-width: 968px) {
      padding: 15px 20px;
    }

    @media (max-width: 768px) {
      padding: 15px 20px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 100vw;
      z-index: 1000;
      background: rgba(44, 24, 16, 0.95);
      backdrop-filter: blur(10px);
      box-sizing: border-box;
    }
  }

  .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .mobile-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;

    &.active {
      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;
    text-decoration: none;

    @media (max-width: 480px) {
      gap: 8px;
    }

    .brand-icon {
      font-size: 36px;
      
      @media (max-width: 768px) {
        font-size: 32px;
      }
      
      @media (max-width: 480px) {
        font-size: 28px;
      }
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
      
      @media (max-width: 768px) {
        font-size: 24px;
      }
      
      @media (max-width: 480px) {
        font-size: 20px;
        letter-spacing: 0.5px;
      }
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
      
      @media (max-width: 480px) {
        font-size: 9px;
        letter-spacing: 1px;
      }
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 24px;

    @media (max-width: 968px) {
      gap: 16px;
    }

    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      right: -300px;
      width: 280px;
      height: 100vh;
      background: linear-gradient(180deg, #2C1810 0%, #4A2C1A 100%);
      flex-direction: column;
      align-items: stretch;
      padding: 80px 0 30px;
      gap: 0;
      transition: right 0.3s ease;
      z-index: 999;
      box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);

      &.active {
        right: 0;
      }
    }

    a {
      color: rgba(255,255,255,0.9);
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
      padding: 8px 16px;
      border-radius: 8px;
      white-space: nowrap;
      text-decoration: none;

      @media (max-width: 768px) {
        padding: 16px 30px;
        font-size: 16px;
        border-radius: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        gap: 12px;

        &:hover {
          background: rgba(212, 160, 23, 0.2);
          color: #D4A017;
          padding-left: 40px;
        }
      }

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

    @media (max-width: 968px) {
      padding: 50px 15px 25px;
    }

    @media (max-width: 768px) {
      padding: 100px 20px 30px;
    }

    @media (max-width: 480px) {
      padding: 100px 15px 20px;
    }

    h2 {
      font-family: 'Playfair Display', serif;
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 12px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);

      @media (max-width: 968px) {
        font-size: 40px;
      }

      @media (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 10px;
      }

      @media (max-width: 480px) {
        font-size: 26px;
        margin-bottom: 8px;
        line-height: 1.2;
      }
    }

    p {
      font-size: 18px;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
      font-weight: 300;
      line-height: 1.5;

      @media (max-width: 968px) {
        font-size: 16px;
        max-width: 500px;
      }

      @media (max-width: 768px) {
        font-size: 15px;
        max-width: 400px;
      }

      @media (max-width: 480px) {
        font-size: 14px;
        padding: 0 5px;
        line-height: 1.4;
      }
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

    @media (max-width: 968px) {
      margin: 20px 20px 0;
      padding: 20px;
      max-width: calc(100% - 40px);
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      margin: 15px 15px 0;
      padding: 18px;
      gap: 14px;
      max-width: calc(100% - 30px);
      width: calc(100% - 30px);
      box-sizing: border-box;
    }

    @media (max-width: 480px) {
      margin: 10px 10px 0;
      padding: 15px;
      border-radius: 12px;
      gap: 12px;
      max-width: calc(100% - 20px);
      width: calc(100% - 20px);
    }

    .search-field {
      flex: 1;
      min-width: 150px;

      @media (max-width: 768px) {
        min-width: 100%;
        flex: none;
      }

      label {
        display: block;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #8B7355;
        margin-bottom: 6px;

        @media (max-width: 480px) {
          font-size: 10px;
          margin-bottom: 4px;
        }
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

        @media (max-width: 480px) {
          padding: 8px 10px;
          font-size: 13px;
        }

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

      @media (max-width: 968px) {
        padding: 10px 30px;
        font-size: 15px;
      }

      @media (max-width: 768px) {
        width: 100%;
        margin-top: 10px;
        padding: 12px;
      }

      @media (max-width: 480px) {
        font-size: 14px;
        padding: 10px;
        min-width: auto;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(192, 57, 43, 0.4);

        @media (max-width: 768px) {
          transform: none;
        }
      }

      a {
        color: white;
        text-decoration: none;
        display: block;
        width: 100%;
      }
    }
  }
`

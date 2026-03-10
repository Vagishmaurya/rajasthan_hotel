import styled from "styled-components";

export const Icondivcss = styled.div`
  .icondiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    padding: 16px 0 8px;

    @media (max-width: 968px) {
      gap: 24px;
      padding: 14px 0 6px;
    }

    @media (max-width: 768px) {
      display: none;
    }

    div {
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 8px 12px;
      border-radius: 12px;
      min-width: 80px;

      @media (max-width: 968px) {
        padding: 6px 8px;
        min-width: 70px;
      }

      &:hover {
        background: rgba(212, 160, 23, 0.1);
        transform: translateY(-2px);
      }
    }

    span {
      color: #D4A017;
      display: block;
      
      svg {
        transition: all 0.3s ease;
      }
    }

    p {
      font-size: 12px;
      font-weight: 600;
      color: white;
      margin-top: 4px;
      letter-spacing: 0.5px;

      @media (max-width: 968px) {
        font-size: 11px;
        margin-top: 3px;
        letter-spacing: 0.3px;
      }
    }
  }
`;
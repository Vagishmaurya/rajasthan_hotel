import styled from "styled-components";

export const Icondivcss = styled.div`
  .icondiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    padding: 16px 0 8px;

    div {
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 8px 12px;
      border-radius: 12px;

      &:hover {
        background: rgba(212, 160, 23, 0.1);
        transform: translateY(-2px);
      }
    }

    span {
      color: #D4A017;
    }

    p {
      font-size: 12px;
      font-weight: 600;
      color: white;
      margin-top: 4px;
      letter-spacing: 0.5px;
    }
  }
`;
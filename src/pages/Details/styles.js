import styled from "styled-components";

export const Container = styled.div`

  height: 100vh;
  main {
    display: flex;
    flex-direction: column;
    max-width: 1140px;

    margin: 0 auto;

    >div:nth-child(1) {
      margin-top: 40px;
      margin-bottom: 24px;

      display: flex;
      justify-self: flex-start;


    }

    >div:nth-child(2) {
      display: flex;
      align-items: center;
      width: 100%;

      margin-bottom: 24px;

      h1 {
        font-family: 'Roboto Slab';
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
      }

      >div {
        margin-top: 10px;
        margin-left: 19px;
      }
    }
  }
  
`;

export const Stars = styled.div`
  >svg {
    width: 18px;
    height: 18px;

    border: none;
   
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;

export const CreateInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  >img {
    width: 16px;
    height: 16px;

    border-radius: 50%;

    margin-right: 8px;
  }

  >div {
    display: flex;
    margin-left: 8px;

    gap: 8px;

    >svg {
      color: ${({theme})=> theme.COLORS.ROSE};
    }
  }
`;
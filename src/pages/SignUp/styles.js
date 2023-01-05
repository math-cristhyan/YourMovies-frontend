import styled from "styled-components";
import BackgroundImg from "../../assets/cineSignIn.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;

  padding: 0 136px;

  font-family: 'Roboto Slab', serif;

  >h1 {
    color: ${({theme})=> theme.COLORS.ROSE};
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
  }


  >p {
    margin-bottom: 48px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #c4c4cf;
  }

  h2 {
    margin-bottom: 65px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    color: #F4EDE8;
  }

  >button {
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
  }

  >a {
    font-family: 'Roboto Slab', serif;

    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: ${({theme})=> theme.COLORS.ROSE};
    display: flex;
    align-self: center;
    margin-top: 42px;

    >svg {
      align-self: center;
    }

  }

`;

export const BackgroundSignIn = styled.div`
  flex: 1;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
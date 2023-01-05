import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;

  grid-template-rows: 144px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;

    >div:nth-child(4) {
      margin-top: 24px;
    }

    >button {
      width: 100%;

      margin-top: 12PX;

      font-family: 'Roboto Slab';
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
    }
  }
`;

export const Header = styled.div`
  grid-area: header;

  background: ${({theme})=> theme.COLORS.TAGBG};
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 100%;
  position: relative;

  margin-top: -90px;
  margin-bottom: 64px;

  >div {
    display: flex;
    align-items: center;
    justify-content: center;

    >label {
      position: absolute;
      bottom: 5px;
      right: 85px;

      cursor: pointer;
      padding: 8px;
      background: ${({theme})=> theme.COLORS.ROSE};
      
      border-radius: 50%;

      >svg {
        color: ${({theme})=> theme.COLORS.BACKGROUND_900};
        width: 20px;
        height: 20px;

        margin-top: 2px;
      }
    }

    >input {
      display: none;
    }

    >img {
      width: 186px;
      height: 186px;

      border-radius: 50%;
    }
  }
`;

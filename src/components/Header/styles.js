import styled from "styled-components";


export const Container = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #3E3B47;

  padding: 24px 123px;

  >h1 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({theme})=> theme.COLORS.ROSE};
  }

  input {
    padding: 19px 24px;
    border-radius: 10px;
    width: 630px;

    color: ${({theme})=> theme.COLORS.BACKGROUND_700};
    background: ${({theme})=> theme.COLORS.BACKGROUND_800};

    border: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  >div {
   text-align: right;
  }

  h2 {
    font-family: 'Roboto slab', serif;
    font-size: 14px;
    font-weight: 700;
  }

  p {
    font-family: 'Roboto slab', serif;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  }

  >img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`;
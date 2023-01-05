import styled from "styled-components";

export const Container = styled.div `
display: grid;
height: 100vh;
grid-template-areas: 
"header"
"content";

>main {
  width: 1137px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto;

  overflow-y: auto;

  > h1 {
    margin-top: 24px;
    margin-bottom: 40px;

    font-family: 'Roboto Slab';
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }
}
`;

export const ArrowLeft = styled.a`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  gap: 8px;

  font-family: 'Roboto Slab';
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: ${({theme})=> theme.COLORS.ROSE};

  margin-top: 40px;

  >svg {
    color: ${({theme})=> theme.COLORS.ROSE};
  }
`;

export const InputArea = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;

  input {
    font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    &::placeholder {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }

`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 227px;

  background: ${({theme})=> theme.COLORS.BACKGROUND_800};
  border: none;
  border-radius: 10px;
  resize: none;

  outline: none;
  
  margin: 40px 0;

  color: ${({theme})=> theme.COLORS.BACKGROUND_700};

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  &::placeholder {
    padding: 10px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  }

`;  

export const Markup = styled.div`
  width: 100%;
  height: 88px;
  padding: 16px;
  background: #0D0C0F;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  border-radius: 8px;

  gap: 24px;

  margin-bottom: 40px;
`;

export const ButtonsArea = styled.div`
  width: 100%;
  
  display: flex;
  gap: 40px;

  margin-bottom: 20px;

  background: ${({theme})=> theme.COLORS.BACKGROUND_900};

  >button:nth-child(1) {
    width: 100%;
    background: #0D0C0F;
    color: ${({theme})=> theme.COLORS.ROSE};
  }

  >button:nth-child(2) {
    width: 100%;

    background: ${({theme})=> theme.COLORS.ROSE};
  }

  button {
    padding: 18px 0;
    border: none;
    border-radius: 10px;

    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
  }
`;
import styled from "styled-components";

export const Container = styled.div`
display: flex;
max-width: 200px;
align-items: center;
justify-content: center;
padding: 16px;
background: ${({isNew, theme})=> isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

border: ${({isNew, theme})=> isNew ? `1px dashed ${theme.COLORS.BACKGROUND_700}` : "none" };

border-radius: 10px;

white-space: nowrap;

font-family: 'Roboto';
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: ${({isNew, theme})=> isNew ? theme.COLORS.BACKGROUND_700: "#ffffff"};

>button {
  background: none;
  border: none;
  display: flex;
  align-items: center;

  margin-left: 16px;

  >svg {
    width: 22px;
    height: 24px;

    color: #FF859B;
  }
}
`;

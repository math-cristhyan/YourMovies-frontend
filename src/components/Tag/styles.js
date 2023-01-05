import styled from "styled-components";

export const Container = styled.span`
  background: ${({theme})=> theme.COLORS.BACKGROUND_800};
  color: #e5e5e5;

  padding: 5px 16px;
  margin-top: 20px;
  margin-right: 8px;

  border-radius: 8px;

  font-family: 'Roboto', serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

`;
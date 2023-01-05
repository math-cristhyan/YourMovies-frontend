import styled from "styled-components";


export const Container = styled.div`
  >a {
    display:flex;
    align-items: center;
    gap: 5px;

    font-family: 'Roboto Slab';
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: ${({theme})=> theme.COLORS.ROSE};
  }
`;
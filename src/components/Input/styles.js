import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: ${({theme})=> theme.COLORS.BACKGROUND_800};

  border-radius: 10px;
  margin-bottom: 8px;

  align-items: center;

  > svg {
    color: ${({theme})=> theme.COLORS.BACKGROUND_700};
    margin-left: 8px;
  }

  >input {
    width: 100%;
    background: transparent;
    border: none;
    color:${({theme})=>theme.COLORS.BACKGROUND_700};

    padding: 17px 0 18px 10px;
    outline: none;

    &placeholder {
      color: ${({theme})=>theme.COLORS.BACKGROUND_700};
    }
  }
`;
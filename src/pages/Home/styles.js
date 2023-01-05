import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 116px 116px auto;

  grid-template-areas: 
  "header"
  "myfilms"
  "content";

  .page {
    width: 1121px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    grid-area: myfilms;

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 50px 0 37px;

    >h1 {
      font-family: 'Roboto Slab', serif;
      font-weight: 400;
      font-size: 32px;
    }
  }
}

  > main {
    width: 1121px;
    margin: 0 auto;
    overflow-y: auto;

    
  }

  main::-webkit-scrollbar {
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    width: 8px;
  }

  main::-webkit-scrollbar-thumb {
    background-color: ${({theme})=> theme.COLORS.ROSE};

    border-radius: 8px;
  }
`;

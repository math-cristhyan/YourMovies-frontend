import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;

  width: 1100px;
  background: ${({theme})=> theme.COLORS.VINHO};

  border-radius: 16px;
  margin-bottom: 24px;

  >h1 {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 24px;
  }

  >div  {
    margin: 8px 0 8px;
    svg {
      width: 12px;
      height: 12px;
      color: ${({theme})=> theme.COLORS.ROSE};
      
    }
  }

  > p {
    max-height: 53px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;

    overflow-y: auto;

    font-family: 'Roboto', serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #999591;

    margin-bottom: 40px;

    ::-webkit-scrollbar{
      appearance: none;
    }

  }
  

`;
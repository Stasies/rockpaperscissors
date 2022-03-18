import styled from "styled-components";
export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  .img {
    height: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
  }
  img {
    width: 300px;
    justify-self: flex-end;
  }
  p {
    justify-self: flex-end;
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    img {
      width: 250px;
    }
  }
  @media screen and (max-width: 426px) {
    img {
      width: 150px;
    }
    p {
      text-align: center;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 320px) {
    p {
      font-size: 16px;
    }
  }
`;

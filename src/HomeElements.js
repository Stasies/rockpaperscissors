import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0;
  padding: 0;
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 48px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
  @media screen and (max-width: 426px) {
    h1 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 320px) {
    h1 {
      font-size: 36px;
    }
  }
`;
export const HomeWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .images {
    width: 300px;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    .images {
      width: 230px;
    }
  }
  @media screen and (max-width: 426px) {
    width: 100%;
    .RPS {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .images {
      width: 130px;
      margin-top: 60px;
    }
  }
  @media screen and (max-width: 376px) {
    .RPS {
      flex-direction: column;
    }
    .images {
      width: 200px;
    }
  }
`;

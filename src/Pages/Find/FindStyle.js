import styled from "styled-components";
import theme from "Styles/theme";

export const ListContainer = styled.div`
  height: 570px;
  width: 100%;
`;
export const ItemContainer = styled.div`
  z-index: 1000;
  background-color: #fff;
  margin-top: 2.5vh;
  height: 11vh;
  max-width: 100%;
  color: ${theme.blue};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 7px 0px;

  @media ${({ theme }) => theme.desktop} {
    flex-direction: row;
    justify-content: space-between;
    padding: 7px 4vw;
    height: 11vh;
    max-height: 95px;
    margin-bottom: 3.5vh;
  }
`;

export const ItemTile = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  @media ${({ theme }) => theme.desktop} {
    font-size: 24px;
  }
`;

export const ItemDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  padding-bottom: 2px;
  width: 70%;
  height: 25px;
  text-align: center;
  background: ${theme.dateWeather};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  @media ${({ theme }) => theme.desktop} {
    height: 35px;
    width: 22%;
    font-size: 1.1vw;
    font-weight: 600;
    margin-top: 0px;
  }
`;

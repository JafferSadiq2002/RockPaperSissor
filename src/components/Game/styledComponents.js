import styled from 'styled-components'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
export const MainContainer = styled.div`
  box-sizing : border-box;
  background-color : #223a5f;
  padding : 10px;
  height : 100vh;
  width : 100vw;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  align-items : center;
`
export const NavBar = styled.nav`
  background-color : transperant;
  border : 2px solid #ffffff;
  border-radius : 10px;
  padding : 10px;
  width : 100%;
  display : flex;
  justify-content : space-between;
  @media (min-width : 768px) {
    width : 70%;
  }
`
export const NamesContainer = styled.div`
  color : #ffffff;
  
  width : 30px;
`
export const MainHeading = styled.h1`
  font-size : 30px;
  font-weight : bold;
`
export const ScoreContainer = styled.div`
  background-color : #ffffff;
  color : #223a5f;
  padding : 10px;
  border : 0px;
  border-radius : 10px;
  text-align : center;
  width : 40%;
`
export const ScoreText = styled.p`
  font-size : 20px;
  font-weight : 700;
`
export const Score = styled.p`
  font-size : 30px;
  font-weight : 700;
  font-family : 'Roboto';
`
export const GameButtonsContainer = styled.div`
  width : 100%;
  
  display : flex;
  justify-content : center;
  @media (min-width : 768px) {
    width : 75%;
  }
  @media (min-width : 1200px) {
    width : 50%
  }
  
  
`
export const Button = styled.button`
  border : 0px;
  background-color : transparent;

`
export const ButtonsListConntainer = styled.ul`
  display : flex;
  justify-content : center;
  width : 80%;
  flex-wrap : wrap;
  list-style-type : none;
  padding : 0px;
  flex-wrap : wrap;

`
export const ChoiceImage = styled.img`
  width : 130px;
  @media (min-width : 768px) {
    width : 200px;
  }
`
export const RulesButton = styled.button`
  background-color : #ffffff;
  padding : 10px;
  border : 0px;
  border-radius : 10px;
  font-size : 18px;
  color : #223a5f;
  
`
export const PopupContainer = styled(Popup)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* Overlay effect */
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
`
export const ModelContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 90%;
  @media (min-width : 768px) {
    width : 70%;
  }
  @media (min-width : 1200px){
    width : 40%;
  }
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;
export const RulesImage = styled.img`
  width : 90%;
  
`
export const CloseButton = styled(RiCloseLine)`
  align-self : flex-end;
`
export const GameResultContainer = styled.div`
  width : 90%;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  
`
export const ChoiceContainer = styled.div`
  width : 100%;
  display : flex;
  align-items : center;
  justify-content : space-between;
  @media (min-width : 768px) {
    width : 60%;
  }
`
export const Player = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`
export const PlayerTitle = styled.p`
  color : #ffffff;
  font-size : 20px;
  margin: 0px;
  margin-bottom  : 5px;
`
export const PlayerChoiceImage = styled.img`
  width  : 130px;
  @media (min-width : 768px) {
    width : 200px;
  }
`
export const OpponentChoiceImage = styled.img`
  width  : 130px;
  @media (min-width : 768px) {
    width : 200px;
  }
`
export const ResultContainer = styled.div`
  width : 100%;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`
export const GameStatus = styled.p`
  color : #ffffff;
  font-size : 30px;
  font-family : 'Roboto';
  margin: 0px;
  margin-bottom  : 5px;
`
export const PlayAgianBtn = styled.button`
  background-color : #ffffff;
  padding : 10px;
  border : 0px;
  border-radius : 10px;
  color : #223a5f;
  font-size : 18px;
  
`

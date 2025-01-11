import React,{useState} from 'react'
import {
  MainContainer,
  NavBar,
  NamesContainer,
  MainHeading,
  ScoreContainer,
  ScoreText,
  Score,
  GameButtonsContainer,
  ButtonsListConntainer,
  ChoiceImage,
  PopupContainer,
  RulesButton,
  ModelContainer,
  Overlay,
  RulesImage,
  CloseButton,
  GameResultContainer,
  ChoiceContainer,
  Player,
  PlayerTitle,
  OpponentChoiceImage,
  PlayerChoiceImage,
  ResultContainer,
  GameStatus,
  PlayAgianBtn,
  Button,
} from './styledComponents'
const gameResultConstants = {
  won: 'WON',
  loss: 'LOSE',
  draw: 'DRAW',
}
const  Game  = (props) => {
  const [score,setScore] = useState(0)
  const [result,setResult] = useState('')
  const [playerChoice,setPlayerChoice] = useState('')
  const [opponentChoice,setOpponentChoice] = useState('')
  const [isPlaying,setIsPlaying] = useState(true)
  const {choicesList} = props
  const onSelectChoice = event => {
    
    const updatedPlayerChoice = event.target.src

    const updatedOpponentChoice =
      choicesList[Math.floor(Math.random() * 3)].imageUrl

    let result = null

    if (updatedPlayerChoice === choicesList[0].imageUrl) {
      if (updatedOpponentChoice === choicesList[1].imageUrl) {
        result = gameResultConstants.won
      } else if (updatedOpponentChoice === updatedPlayerChoice) {
        result = gameResultConstants.draw
      } else {
        result = gameResultConstants.loss
      }
    } else if (updatedPlayerChoice === choicesList[1].imageUrl) {
      if (updatedOpponentChoice === choicesList[2].imageUrl) {
        result = gameResultConstants.won
      } else if (updatedOpponentChoice === updatedPlayerChoice) {
        result = gameResultConstants.draw
      } else {
        result = gameResultConstants.loss
      }
    } else {
      if (updatedOpponentChoice === choicesList[0].imageUrl) {
        result = gameResultConstants.won
      } else if (updatedOpponentChoice === updatedPlayerChoice) {
        result = gameResultConstants.draw
      } else {
        result = gameResultConstants.loss
      }
    }

    if (result === gameResultConstants.won) {
      const updatedScore = score + 1
      setScore(updatedScore)
    } else if (result === gameResultConstants.draw) {
      setScore(score)
    } else {
      const updatedScore = score - 1
      setScore(updatedScore)
    }
    setIsPlaying(false)
    setOpponentChoice(updatedOpponentChoice)
    setPlayerChoice(updatedPlayerChoice)
    setResult(result)
  }
  const onPlayAgainGame = () => {
    setIsPlaying(true)
  }
  const renderScoreBoard = () => {
    return (
      <NavBar>
        <NamesContainer>
          <MainHeading>Rock Paper Scissors</MainHeading>
        </NamesContainer>
        <ScoreContainer>
          <ScoreText>Score</ScoreText>
          <Score>{score}</Score>
        </ScoreContainer>
      </NavBar>
    )
  }
  const gameStatus = () => {
    switch (result) {
      case gameResultConstants.won:
        return 'YOU WON'
      case gameResultConstants.loss:
        return 'YOU LOSE'
      case gameResultConstants.draw:
        return 'IT IS DRAW'
      default:
        return null
    }
  }
  const renderGameResults = () => {
    return (
      <GameResultContainer>
        <ChoiceContainer>
          <Player>
            <PlayerTitle>YOU</PlayerTitle>
            <PlayerChoiceImage src={playerChoice} alt="your choice" />
          </Player>
          <Player>
            <PlayerTitle>OPPONENT</PlayerTitle>
            <OpponentChoiceImage src={opponentChoice} alt="opponent choice" />
          </Player>
        </ChoiceContainer>
        <ResultContainer>
          <GameStatus>{gameStatus()}</GameStatus>
          <PlayAgianBtn onClick={onPlayAgainGame}>PLAY AGAIN</PlayAgianBtn>
        </ResultContainer>
      </GameResultContainer>
    )
  }
  const renderGamePlayGround = () => {
    

    return (
      <GameButtonsContainer>
        <ButtonsListConntainer>
          {choicesList.map(eachChoice => (
            <li>
              <Button
                data-testid={eachChoice.testId}
                onClick={onSelectChoice}
              >
                <ChoiceImage
                  src={eachChoice.imageUrl}
                  id={eachChoice.id}
                  alt={eachChoice.id}
                />
              </Button>
            </li>
          ))}
        </ButtonsListConntainer>
      </GameButtonsContainer>
    )
  }
    return (
      <MainContainer>
        {renderScoreBoard()}
        {isPlaying ? renderGamePlayGround() : renderGameResults()}
        <div className="popup-container">
          <PopupContainer
            modal
            trigger={
              <div style={{textAlign : 'right',width : '95vw'}}>
                <RulesButton type="button" className="trigger-button">
                  Rules
                </RulesButton>
              </div>
            }
            position="bottom right"
          >
            {close => (
              <>
              <Overlay>
                <ModelContainer>
                    <CloseButton size={30} onClick={() => close()} />
                    <RulesImage
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                </ModelContainer>
              </Overlay>
              </>
            )}
          </PopupContainer>
        </div>
      </MainContainer>
    )
  }


export default Game

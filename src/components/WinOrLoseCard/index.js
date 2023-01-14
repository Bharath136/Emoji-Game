import './index.css'

const WinOrLoseCard = props => {
  const {imgList, emojisList, score, onPlayAgain} = props
  const onPlay = () => {
    onPlayAgain()
  }
  return imgList.length >= emojisList.length ? (
    <div className="emoji-score-card">
      <div className="score-text-container">
        <h1 className="score-heading">You Won</h1>
        <p className="score-message">Best Score</p>
        <h1 className="score">
          {score}/{emojisList.length}
        </h1>
        <button className="play-again-btn" type="button">
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="won"
        className="out-img"
      />
    </div>
  ) : (
    <div className="emoji-score-card">
      <div className="score-text-container">
        <h1 className="score-heading">You Lose</h1>
        <p className="score-message">Best Score</p>
        <p className="score">
          {score}/{emojisList.length}
        </p>
        <button className="play-again-btn" type="button" onClick={onPlay}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="out-img"
      />
    </div>
  )
}

export default WinOrLoseCard

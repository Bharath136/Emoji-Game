import './index.css'

const NavBar = props => {
  const {score, topScore, isTerminated} = props
  const scores = isTerminated ? (
    ''
  ) : (
    <div className="emoji-scores-container">
      <p className="emoji-score">{`Score: ${score}`}</p>
      <p className="emoji-score">{`Top Score: ${topScore}`}</p>
    </div>
  )
  return (
    <nav className="emoji-nav-bar">
      <div className="emoji-nav-bar-brand">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-nav-logo"
        />
        <h1 className="emoji-brand-name">Emoji Game</h1>
      </div>
      {scores}
    </nav>
  )
}
export default NavBar

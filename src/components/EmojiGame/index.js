/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    imgList: [],
    isTerminated: false,
    topScoresList: [],
  }

  onClickImg = id => {
    const {imgList, topScoresList} = this.state
    const isPresent = imgList.includes(id)
    if (isPresent === true) {
      this.setState({isTerminated: true})
      this.setState({
        score: imgList.length,
        topScoresList: [...topScoresList, imgList.length],
      })
    } else {
      this.setState({imgList: [...imgList, id]})
      this.setState({score: imgList.length})
    }

    console.log(imgList)
  }

  onPlayAgain = () => {
    this.setState({score: 0, imgList: [], isTerminated: false})
  }

  render() {
    const {score, isTerminated, imgList, topScoresList} = this.state

    const topScore = topScoresList.length === 0 ? 0 : Math.max(...topScoresList)

    console.log(topScoresList)

    const {emojisList} = this.props

    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

    const result = (
      <WinOrLoseCard
        imgList={imgList}
        emojisList={emojisList}
        score={score}
        onPlayAgain={this.onPlayAgain}
      />
    )

    const output = isTerminated
      ? result
      : shuffledEmojisList().map(eachCard => (
          <EmojiCard
            cardDetails={eachCard}
            key={eachCard.id}
            onClickImg={this.onClickImg}
          />
        ))

    return (
      <div className="main-container">
        <NavBar score={score} topScore={topScore} isTerminated={isTerminated} />

        <div className="emoji-cards-container">
          <ul className="emoji-cards-list">{output}</ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame

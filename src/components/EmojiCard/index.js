import './index.css'

const EmojiCard = props => {
  const {cardDetails, onClickImg} = props
  const {emojiUrl, emojiName, id} = cardDetails

  const onClick = () => {
    onClickImg(id)
  }
  return (
    <li>
      <button className="emoji-card-button" type="button" onClick={onClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard

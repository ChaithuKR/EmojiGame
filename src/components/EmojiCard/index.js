// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachEmoji} = props
  const {emojiUrl, emojiName} = eachEmoji

  return (
    <li className="emoji-item">
      <button className="emoji-button" type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard

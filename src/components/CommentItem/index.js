// Write your code here
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    initialContainerBackgroundClassNames,
    commentDetails,
    deleteComment,
    likeComment,
  } = props
  const initialRandomColor =
    initialContainerBackgroundClassNames[Math.floor(Math.random() * 6)]
  const {id, initial, name, commentText, isLiked} = commentDetails
  const dateCreated = formatDistanceToNow(new Date())
  const likedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const deleteTheComment = () => {
    deleteComment(id)
  }
  const likeTheComment = () => {
    likeComment(id)
  }

  return (
    <li>
      <div>
        <div style={{backgroundColor: {initialRandomColor}}}>{initial}</div>
        <p>{name}</p>
        <p>{dateCreated}</p>
        <p>{commentText}</p>
      </div>
      <div>
        <div>
          <button type="button" onClick={likeTheComment}>
            <img src={likedImg} alt="like" />
          </button>

          <p>{isLiked ? 'Liked' : 'Like'}</p>
        </div>
        <button type="button" onClick={deleteTheComment} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem

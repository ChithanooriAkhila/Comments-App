import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {comments: '', name: '', commentText: ''}

  addName = event => {
    this.setState({name: event.target.value})
  }

  addCommentText = event => {
    this.setState({commentText: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, commentText} = this.state

    const obj = {
      id: uuidv4(),
      initial: name[0],
      name,
      commentText,
      isLiked: false,
    }
    this.setState(prevState => ({
      comments: [...prevState.comments, obj],
      name: '',
      commentText: '',
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => id !== comment.id),
    }))
  }

  likeComment = id => {
    this.setState(prevState => ({
      comments: prevState.comments.map(comment => {
        if (id === comment.id) {
          return {...comment, isLiked: !comment.isLiked}
        }
        return comment
      }),
    }))
  }

  render() {
    const {comments, name, commentText} = this.state
    const noOfComments = comments.length

    return (
      <div>
        <div>
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.addComment}>
              <input
                type="text"
                placeholder="Your Name"
                onChange={this.addName}
                value={name}
              />
              <textarea
                placeholder="Your Comment"
                onChange={this.addCommentText}
                value={commentText}
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div>
          <p>
            <span>{noOfComments}</span>Comments
          </p>
          <ul>
            {comments &&
              comments.map(comment => (
                <CommentItem
                  initialContainerBackgroundClassNames={
                    initialContainerBackgroundClassNames
                  }
                  commentDetails={comment}
                  deleteComment={this.deleteComment}
                  likeComment={this.likeComment}
                  key={comment.id}
                />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments

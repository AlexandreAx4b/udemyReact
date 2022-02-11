import './style.css'
import { PostCards } from "../PostCards"

export const Posts = ({posts}) => (
  <div className="posts">
    {posts.map(post => (
      <PostCards
        key={post.id}
        title={post.title}
        body={post.body}
        cover={post.cover}
        id={post.id}
      />
    ))}
  </div>
)
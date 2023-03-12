import './post.css'
import { Link } from 'react-router-dom'

export default function Post({ post }) {
  const PF = 'https://reactblog.onrender.com/images/'
  return (
    <div className='post'>
      <Link to={`/post/${post._id}`} className='link'>
        {post.photo && <img className='postImg' src={PF + post.photo} alt='' />}
      </Link>
      <div className='postInfo'>
        <div className='postCats'>
          {post.categories.map((c) => (
            <span className='postCat'>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className='link'>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <hr />
        {/* <div className='postSubTitle'>
          <span className='postAuthor'>
            Author :&nbsp;
            <Link to={`/?user=${post.username}`} className='link'>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='postDate'>
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div> */}
      </div>
      {/* <div
        className='postDes'
        dangerouslySetInnerHTML={{ __html: post.desc }}
      ></div> */}
    </div>
  )
}

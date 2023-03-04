import './singlePost.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path)
      setPost(res.data)
    }
    getPost()
  }, [path])

  const PF = 'http://localhost:5000/images/'
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && (
          <img src={PF + post.photo} alt='' className='singlePostImg' />
        )}
      </div>
      <h1 className='singlePostTitle'>
        {post.title}
        <div className='singlePostEdit'>
          <i className='singlePostIcon fa-regular fa-pen-to-square'></i>
          <i className='singlePostIcon fa-solid fa-trash-can'></i>
        </div>
      </h1>
      <div className='singlePostInfo'>
        <span className='singlePostAuthor'>
          Author:
          <Link to={`/?user=${post.username}`} className='link'>
            <b>{post.username}</b>
          </Link>
        </span>
        <span className='singlePostDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className='singlePostDes'>{post.desc}</p>
    </div>
  )
}

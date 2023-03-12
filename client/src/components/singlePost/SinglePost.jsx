import './singlePost.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { axiosInstance } from '../../config'
import { Context } from '../../context/Context'

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  const { user } = useContext(Context)

  // this is to update post
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [updateMode, setUpdateMode] = useState(false)
  //

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get('/posts/' + path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost()
  }, [path])

  const PF = 'https://react-blog-6nyi.onrender.com/images/'

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      })
      window.location.replace('/')
    } catch (err) {}
  }

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/posts/${post._id}`, {
        username: user.username,
        title: title,
        desc: desc,
      })
      setUpdateMode(false)
    } catch (err) {}
  }
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && (
          <img src={PF + post.photo} alt='' className='singlePostImg' />
        )}
        {updateMode ? (
          <input
            type='text'
            value={title}
            className='singlePostTitleInput'
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className='singlePostTitle'>
            {title}
            {post.username === user?.username && (
              <div className='singlePostEdit'>
                <i
                  className='singlePostIcon fa-regular fa-pen-to-square'
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className='singlePostIcon fa-solid fa-trash-can'
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author :&nbsp;
            <Link to={`/?user=${post.username}`} className='link'>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='singlePostDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className='singlePostDescInput'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <div
            className='singlePostDesc'
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
        )}
        {updateMode && (
          <button className='singlePostButton' onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  )
}

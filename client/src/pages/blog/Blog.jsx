import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import './blog.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts, setPosts] = useState([])

  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <div className='blog'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}

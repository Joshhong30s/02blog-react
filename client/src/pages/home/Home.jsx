import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import './home.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { axiosInstance } from '../../config'

export default function Home() {
  const [posts, setPosts] = useState([])

  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get('/posts' + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}

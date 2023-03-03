import './sidebar.css'
import me3 from '../header/me3.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [cats, setCats] = useState([])
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='imgMe3' src={me3} alt='' />
        <p className='sidebarTitleP'>
          Hi, I'm a self-taught fullstack developer and a new father. This is to
          record and share everything I've been working on!!
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW ME</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fa-brands fa-square-twitter'></i>
          <i className='sidebarIcon fa-brands fa-linkedin'></i>
          <i className='sidebarIcon fa-brands fa-square-github'></i>
          <i className='sidebarIcon fa-brands fa-square-facebook'></i>
        </div>
      </div>
    </div>
  )
}

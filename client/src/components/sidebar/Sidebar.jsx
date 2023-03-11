import './sidebar.css'
import me from '../header/me5.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../config'

export default function Sidebar() {
  const [cats, setCats] = useState([])
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get('/categories')
      setCats(res.data)
    }
    getCats()
  }, [])

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const handleLineClick = () => {
    if (isMobile) {
      window.location.href = 'https://line.me/ti/p/0u5WhCBHF-'
    } else {
      window.open('https://line.me/ti/p/0u5WhCBHF-', '_blank')
    }
  }

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='imgMe3' src={me} alt='' />
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
        <span className='sidebarTitle'>CONTACT ME</span>
        <div className='sidebarSocial sidebarIcon'>
          <a
            href='https://github.com/Joshhong30s/02blog-react'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='topIcon fa-brands fa-square-github social-icon'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/josh-hong-163644102/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='topIcon fa-brands fa-linkedin social-icon'></i>
          </a>
          <i
            className='topIcon fa-brands fa-line social-icon'
            onClick={handleLineClick}
          ></i>
          <a href='mailto:your-email-address@example.com'>
            <i className='topIcon fa-solid fa-square-envelope'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

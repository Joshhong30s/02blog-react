import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './topbar.css'

export default function Topbar() {
  const { user, dispatch } = useContext(Context)
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }
  const PF = 'https://react-blog-6nyi.onrender.com/images/'
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const handleLineClick = () => {
    if (isMobile) {
      window.location.href = 'https://line.me/ti/p/0u5WhCBHF-'
    } else {
      window.open('https://line.me/ti/p/0u5WhCBHF-', '_blank')
    }
  }
  return (
    <div className='top'>
      <div className='topLeft'>
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
        <i className='topIcon fa-brands fa-line' onClick={handleLineClick}></i>
        <a href='mailto:your-email-address@example.com'>
          <i className='topIcon fa-solid fa-square-envelope'></i>
        </a>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/work'>
              WORK
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/blog'>
              BLOG
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/contact'>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      <div className='topRight'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          {user ? (
            <li className='topListItem' onClick={handleLogout}>
              LOGOUT
            </li>
          ) : (
            <>
              <li className='topListItem'>
                <Link className='link' to='/login'>
                  LOGIN
                </Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to='/register'>
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
        {user && (
          <Link to='/setting'>
            <img className='topImg' src={PF + user.profilePic} alt='' />
          </Link>
        )}
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}

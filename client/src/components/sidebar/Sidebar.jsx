import './sidebar.css'
import cat from '../header/cat.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='imgCat' src={cat} alt='' />
        <p className='sidebarTitleP'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          illo
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Parenting</li>
          <li className='sidebarListItem'>Work</li>
          <li className='sidebarListItem'>Reading</li>
          <li className='sidebarListItem'>Writing</li>
          <li className='sidebarListItem'>Gaming</li>
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

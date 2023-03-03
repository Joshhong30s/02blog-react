import './header.css'
import baby from './baby.jpg'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>Daddy Josh</span>
        <span className='headerTitleLg'>Programming & Parenting</span>
      </div>
      <img className='headerImg' src={baby} alt='' />
    </div>
  )
}

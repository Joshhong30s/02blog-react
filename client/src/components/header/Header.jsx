import './header.css'
import baby from './baby.jpg'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>Talk is Cheap</span>
        <span className='headerTitleLg'>Show Me the code</span>
      </div>
      <img className='headerImg' src={baby} alt='' />
    </div>
  )
}

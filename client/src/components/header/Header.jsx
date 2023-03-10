import './header.css'
import parents from './parents5.jpg'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>Daddy Josh & Mommy Janice</span>
        <span className='headerTitleLg'>Programming, Parenting, Living</span>
      </div>
      <img className='headerImg' src={parents} alt='' />
    </div>
  )
}

import './construction.css'
import { Link } from 'react-router-dom'

export default function Construction() {
  return (
    <div className='construction-page'>
      <div className='construction-message'>
        <h1>Coming Soon!</h1>
        <p>This project is currently under construction.</p>
        <p>Please check back later for updates.</p>
      </div>
      <Link to='/' className='back-button'>
        Go back to Home Page
      </Link>
    </div>
  )
}

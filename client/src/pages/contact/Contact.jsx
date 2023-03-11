import './contact.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import contact from '../../components/header/contact.jpg'
import { axiosInstance } from '../../config'

export default function Register() {
  const [visitor, setVisitor] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axiosInstance.post('/auth/register', {
        visitor,
        email,
        message,
      })
      res.data && window.location.replace('/login')
    } catch (err) {}
  }

  return (
    <div className='contact'>
      <img className='contactImg' src={contact} alt='' />
      <div className='contactImgContainer'>
        <span className='contactTitle'>Contact</span>
        <form className='contactForm form' onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type='text'
            className='visitorName'
            placeholder='Please enter your name..'
            onChange={(e) => setVisitor(e.target.value)}
          />
          <label>Your Email</label>
          <input
            type='text'
            className='visitorEmail'
            placeholder='Please enter your email..'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Your Messages</label>
          <input
            type='text'
            className='visitorInput'
            placeholder='Please leave messages..'
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='contactButton' type='submit'>
            Confirm & Submit
          </button>
          <button className='backHomeButton'>
            <Link className='link' to='/'>
              Back to HOME
            </Link>
          </button>
        </form>
      </div>
    </div>
  )
}

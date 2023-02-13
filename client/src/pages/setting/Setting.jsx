import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'
import profile from '../../components/header/Profile.JPG'

export default function Setting() {
  return (
    <div className='setting'>
      <div className='settingWrapper'>
        <div className='settingTitle'>
          <span className='settingUpdateTitle'>Update Your Account</span>
          <span className='settingDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingForm'>
          <label className=''>Profile Picture</label>
          <div className='settingPP'>
            <img src={profile} alt='' />
            <label htmlFor='fileInput'>
              <i className='settingPPIcon fa-regular fa-circle-user'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Josh' />
          <label>Email</label>
          <input type='email' placeholder='josh@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

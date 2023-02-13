import './write.css'
import backcar from '../../components/header/backcar.jpg'

export default function Write() {
  return (
    <div className='write'>
      {/* creates a form element with a classname'writeForm */}
      <img className='writeImg' src={backcar} alt='' />
      <form className='writeFrom'>
        {/* creates a div element with classname writeformgroup, to grops form elements together */}
        <div className='writeFormGroup'>
          {/* add a label ele associated with file input, htmlfor is used to make the association */}
          <label htmlFor='fileInput'>
            <i class='writeIcon fa-solid fa-plus'></i>
          </label>
          {/* add a input ele to upload a file, with none style it makes input element invisible */}
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          {/* add input ele with placeholder"title", autofocus means user start typing while page refreshed */}
          <input
            type='text'
            placeholder='title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell you story...'
            type='text'
            className='writeInput writeText'
          ></textarea>
        </div>
      </form>
      <button className='writeSubmit'>Publish</button>
    </div>
  )
}

import './write.css'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { axiosInstance } from '../../config'

export default function Write(props) {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)
  const [categories, setCategories] = useState('')
  const { user } = useContext(Context)
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      title,
      desc: content,
      categories: [categories],
    }
    if (file) {
      const data = new FormData()
      const filename = file.name
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename
      try {
        await axiosInstance.post('/upload', data)
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post('/posts', newPost)
      window.location.replace('/post/' + res.data._id)
    } catch (err) {}
  }

  return (
    <div className='write'>
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
      )}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormElement'>
          <label htmlFor='fileInput'>
            <i className='writeFileInput fa-solid fa-plus'></i>
          </label>
          <div className='writeFormElement'>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className='writeFormElement'>
            <input
              type='text'
              placeholder='Title'
              className='writeTitleInput'
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='writeFormElement'>
            <input
              placeholder='Categories'
              type='text'
              className='writeCatInput'
              onChange={(e) => setCategories(e.target.value)}
            ></input>
          </div>
          {console.log('rendering')}
          <div className='writeFormElement editor-container'>
            <ReactQuill
              value={content}
              onChange={setContent}
              onError={(err) => console.error(err)}
              className='myEditorClass'
              theme='snow'
              placeholder='Here to write...'
            />
          </div>
          <button className='writeFormElement writeSubmit' type='submit'>
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}

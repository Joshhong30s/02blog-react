import './post.css'
import backcar from '../header/backcar.jpg'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src={backcar} alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Life</span>
          <span className='postCat'>Parenting</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit amet</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDes'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        dolorem quas eligendi a cumque ducimus ratione assumenda nemo voluptatem
        laborum tenetur provident iste culpa sed numquam molestias dolor earum
        laborum tenetur provident iste culpa sed numquam molestias dolor earum
        laborum tenetur provident iste culpa sed numquam molestias dolor earum
        laborum tenetur provident iste culpa sed numquam molestias dolor earum
        laborum tenetur provident iste culpa sed numquam molestias dolor earum
        laborum tenetur provident iste culpa sed numquam molestias dolor earum
        laborum tenetur provident iste culpa sed numquam molestias dolor earum
        laborum tenetur provident iste culpa sed numquam molestias dolor earum
        sapiente. sapiente.
      </p>
    </div>
  )
}

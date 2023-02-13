import './singlePost.css'
import wall from '../header/wall.jpg'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src={wall} alt='' className='singlePostImg' />
      </div>
      <h1 className='singlePostTitle'>
        Lorem ipsum dolor sit
        <div className='singlePostEdit'>
          <i className='singlePostIcon fa-regular fa-pen-to-square'></i>
          <i className='singlePostIcon fa-solid fa-trash-can'></i>
        </div>
      </h1>
      <div className='singlePostInfo'>
        <span className='singlePostAuthor'>
          Author: <b>Josh</b>
        </span>
        <span className='singlePostDate'>1 hour ago</span>
      </div>
      <p className='singlePostDes'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        quaerat magnam error adipisci dolores doloribus voluptas maiores,
        nesciunt libero? Debitis non sed minus magni temporibus ex autem
        perferendis rerum magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sapiente quaerat magnam error adipisci dolores
        doloribus voluptas maiores, nesciunt libero? Debitis non sed minus magni
        temporibus ex autem perferendis rerum magnam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sapiente quaerat magnam error adipisci
        dolores doloribus voluptas maiores, nesciunt libero? Debitis non sed
        minus magni temporibus ex autem perferendis rerum magnam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sapiente quaerat magnam
        error adipisci dolores doloribus voluptas maiores, nesciunt libero?
        Debitis non sed minus magni temporibus ex autem perferendis rerum
        magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sapiente quaerat magnam error adipisci dolores doloribus voluptas
        maiores, nesciunt libero? Debitis non sed minus magni temporibus ex
        autem perferendis rerum magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sapiente quaerat magnam error adipisci dolores
        doloribus voluptas maiores, nesciunt libero? Debitis non sed minus magni
        temporibus ex autem perferendis rerum magnam!
      </p>
    </div>
  )
}

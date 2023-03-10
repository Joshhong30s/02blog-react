import './work.css'
import blog from '../../components/header/blog.jpg'
import dashboard from '../../components/header/dashboard.jpg'
import kanban from '../../components/header/kanban.jpg'
import ai from '../../components/header/ai.jpg'
import { Link } from 'react-router-dom'

const projects = [
  {
    name: 'MERN Stack Blog',
    techstack: 'MongoDB, Express, Node.js, React',
    image: blog,
    link: 'https://example.com/react-blog',
  },
  {
    name: 'MERN Stack Dashboard',
    techstack: 'MongoDB, Express, Node.js, React',
    image: dashboard,
    link: '/construction',
  },
  {
    name: 'Kanban Todo-app',
    techstack: 'MongoDB, Express, Node.js, React',
    image: kanban,
    link: '/construction',
  },
  {
    name: 'AI Image Generation',
    techstack: 'MongoDB, Express, Node.js, React',
    image: ai,
    link: '/construction',
  },
]

export default function Portfolio() {
  return (
    <div className='portfolio'>
      {projects.map((project, index) => (
        <div className='project-card' key={index}>
          {project.link === '/construction' ? (
            <Link to='/construction'>
              <img src={project.image} alt={project.name} />
            </Link>
          ) : (
            <a href={project.link} target='_blank' rel='noreferrer'>
              <img src={project.image} alt={project.name} />
            </a>
          )}

          <div className='project-info'>
            <h3>{project.name}</h3>
            <p>{project.techstack}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

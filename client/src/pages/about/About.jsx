import './about.css'
import dadAvatar from '../../components/header/dadAvatar.png'
import momAvatar from '../../components/header/momAvatar.png'

export default function About() {
  return (
    <>
      <div className='aboutContainer'>
        <div className='aboutColumn'>
          <img src={dadAvatar} alt='Dad Avatar' className='aboutAvatar' />
          <div className='aboutName'>Daddy Josh</div>
          <div className='aboutJob'>
            Fullstack Developer, B2B Sales Developer
          </div>
          <div className='aboutDes'>
            <div className='aboutSkill'>
              Skills: Javascript, React, Express, HTML5, Tailwind CSS
            </div>

            <div className='aboutInterest'>Interests: Coding, Writing</div>
            <div className='aboutPersonality'>
              Personality: Creative, Detail-oriented
            </div>
          </div>
        </div>
        <div className='aboutColumn'>
          <img src={momAvatar} alt='Mom Avatar' className='aboutAvatar' />
          <div className='aboutName'>Mommy Janice</div>
          <div className='aboutJob'>Consultant for Overseas Education</div>
          <div className='aboutDes'>
            <div className='aboutSkill'>
              Skills: Consulting, Qualification Assessment, Event
            </div>
            <div className='aboutInterest'>Interests: Shopping, Traveling</div>
            <div className='aboutPersonality'>
              Personality: Enthusiastic, Sunny
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

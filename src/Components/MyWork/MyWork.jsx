import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="work-title">
          <h1>My latest work</h1>
          <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
{
  mywork_data.map((work,idx)=>(
    <div className='projects-card' key={idx}>
      <div className="project-image">
        <img src={work.w_img} alt={work.w_name} />
        {work.w_link && (
          <div className="project-overlay">
            <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="project-overlay-link">
              View Site
            </a>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{work.w_name}</h3>
        {work.w_link && (
          <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="project-visit-btn">
            Visit Project <span>&#8594;</span>
          </a>
        )}
      </div>
    </div>
  ))
}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  )
}

export default MyWork
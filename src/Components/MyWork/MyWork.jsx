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
    <div className='projects' key={idx}>
      <h3>{work.w_name}</h3>
      {work.w_link ? (
        <>
          <a href={work.w_link} target="_blank" rel="noopener noreferrer">
            <img src={work.w_img} alt="" />
          </a>
          <a href={work.w_link} target="_blank" rel="noopener noreferrer" style={{marginTop: '10px', color: '#007bff', textDecoration: 'none', fontWeight: 'bold'}}>
            Visit Project
          </a>
        </>
      ) : (
        <img src={work.w_img} alt="" />
      )}
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
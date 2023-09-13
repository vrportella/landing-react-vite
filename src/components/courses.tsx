import CoursesData from '../data/courses.json'

export default function courses() {
  const DATA = CoursesData;
  return (
    <div className="course-cards">
      <div className="intro-card">Check out our most popular courses!</div>
      
      {DATA.map((item, index) => (
        <div className="course-card" key={index}>
          <img className="course-card__logo" src={'/img/icon-'+item.icon+'.svg'} />
          <h2 className="course-card__heading">{item.title}</h2>
          <p className="course-card__description">
            {item.description}
          </p>
          <a href="#" className="course-card__link">Get Started</a>
        </div>
      ))}
    </div>
  )
}

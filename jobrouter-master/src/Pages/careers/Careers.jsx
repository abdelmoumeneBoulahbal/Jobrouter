import { Link, useLoaderData } from "react-router-dom"
import styles from './Careers.module.css'

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p className={styles.career_title}>{career.title}</p>
          <p className={styles.career_location}>Based in {career.location}</p>          
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers');
 
  if(!res.ok){
    throw Error('Could not fetch that Career!');
  }

  return res.json();
}
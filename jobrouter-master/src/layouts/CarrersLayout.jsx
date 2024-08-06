import { Outlet } from "react-router-dom"

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Ipsum, dolor sit amet consectetur adipisicing elit 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. 
      </p>
      
      <Outlet />
    </div>
  )
}
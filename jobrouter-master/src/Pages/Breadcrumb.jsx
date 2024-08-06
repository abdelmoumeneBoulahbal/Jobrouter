import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  
    const location  = useLocation();

    let currentLink = '';
  
    const crumbs = location.pathname.split('/')
      .map(crumb => {
        currentLink += `/${crumb}`
        
        return(
          <div key={crumb} className="crumb">
            <Link to={currentLink}> {crumb}</Link>
          </div>
        )
      })
    
    return (
    <div className="breadcrumbs">
    {crumbs}
    </div>
  )
}

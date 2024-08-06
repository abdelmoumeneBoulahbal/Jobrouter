/* react-router */
import { 
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

/* pages */
import Home from './Pages/Home';
import About from './Pages/About';
import Faq from './Pages/help/Faq';
import Contact from './Pages/help/Contact'; 
import Careers, { careersLoader } from './Pages/careers/Careers';


/* layouts */
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import NotFound from './Pages/NotFound';
import CareersLayout from './layouts/CarrersLayout'
import CareerDetail, { careerDetailLoader } from './Pages/careers/CareerDetail';
import CareersError from './Pages/careers/CareersError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />}/>
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader} 
         
        />
        <Route 
          path=':id'
          element={<CareerDetail />} 
          loader={careerDetailLoader}
          
        />
      </Route>
      
      
      <Route path="*" element={<NotFound />} />


    </Route>
  )
);


function App() {
  return (

      <RouterProvider router={router} />
  );
}

export default App;

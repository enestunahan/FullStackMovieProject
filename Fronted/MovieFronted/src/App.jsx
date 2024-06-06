import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Movies from './Components/Movies/Movies'
import {Routes , Route, useLocation} from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Admin from './Components/Admin/Admin'
import Login from './Components/Login/Login'

function App() {


  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== '/admin';
  const[isAuthenticated , setIsAuthenticated] = useState(false);

  return (
    <>
     
    {showNavbarAndFooter && <Navbar/>}

     <Routes>
          <Route path = ''        element =  {<Home/>}/>
          <Route path = '/movies' element =  {<Movies/>}/>
          <Route path = '/admin'  element =  {<Admin/>}/>
          {/* <Route path='/login'>
              <Login setIsAuthenticated = {setIsAuthenticated} />
          </Route>
          <PrivateRoute path= '/admin' element={<Admin/>} isAuthenticated={isAuthenticated}/> */}
          <Route path='/admin' element = {<Admin/>} />
     </Routes>
     

    {showNavbarAndFooter && <Footer/>}  
     

    </>
  )
}

const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => (
  <Route
      {...rest}
      render={(props) =>
          isAuthenticated ? (
              <Component {...props} />
          ) : (
              <Redirect to="/login" />
          )
      }
  />
);


export default App

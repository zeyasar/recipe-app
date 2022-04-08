import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import Details from '../pages/details/Details';
import PrivateRouter from "./PrivateAppRouter";




const AppRouter = () => {

    
    return(
       <BrowserRouter>
           <Routes>
               <Route path='/home' element={<PrivateRouter><Home/></PrivateRouter>}/>
               <Route path='/about' element={<PrivateRouter><About/></PrivateRouter>}/>
               <Route path='/' element={<Login/>}/>
               <Route path='home/details/:mealName' element={<PrivateRouter><Details/></PrivateRouter>}/>
           </Routes>
       </BrowserRouter>
    )
}

export default AppRouter;
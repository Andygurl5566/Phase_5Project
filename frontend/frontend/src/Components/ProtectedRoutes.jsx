import { Outlet } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";


// const useAuth = () => {
// const user = { loggedIn: false}
// return user && user.loggedIn
// }

const ProtectedRoutes = ({online}) => {

    console.log(online)
   const isAuth = online
    // return online ? <Outlet/> : <Login/>

    return true ? <Outlet/> : <Login/>
    // return isAuth ? <Outlet/> : <Login/>
    
}

export default ProtectedRoutes;
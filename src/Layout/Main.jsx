import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import NavBar from "../pages/NavBar/NavBar";



const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;
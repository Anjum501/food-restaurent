import Banner from "./Banner/Banner";
import Catagory from "./Catagory/Catagory";
import Menu from "./Menu/Menu";
import Testimonials from "./Testimonials/Testimonials";
import Feature from "./feature/Feature";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Menu></Menu>
            <Feature></Feature>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;
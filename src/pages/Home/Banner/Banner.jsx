import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img} />
            
        </div>
        <div>
            <img src={img2} />
           
        </div>
        <div>
            <img src={img3} />
        
        </div>
    </Carousel>
    );
};

export default Banner;
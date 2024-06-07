import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg';
import './feature.css';
const Feature = () => {
    return (
        <div className='feature mb-8 pt-8 '>
            <SectionTitle subheading={"check it out"}
            heading={"feature item"}></SectionTitle>
            <div className=' md:flex justify-center items-center py-8 px-16'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='ml-10 text-white'>
                    <p className='mb-4'>aug 20, 2024</p>
                    <p className='mb-4'>where i can get some</p>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum doloremque voluptate vero suscipit deserunt unde aut quaerat cupiditate ipsam at,
                     temporibus nihil est nam eos cum veniam tempora? Excepturi, quibusdam?</p>
                     <button className='btn btn-outline border-0 border-b-4  mb-8'>order now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Feature;
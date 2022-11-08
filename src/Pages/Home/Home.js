import { Carousel } from 'flowbite-react';
import React from 'react';
import './Home.css'
import img1 from '../../assets/banner/banner1.png'
import img2 from '../../assets/banner/banner2.webp'
import img3 from '../../assets/banner/banner3.webp'
import img4 from '../../assets/banner/banner4.jpg'
import img5 from '../../assets/banner/banner5.jpg'
import img6 from '../../assets/banner/banner6.jpg'

const Home = () => {
    return (
        <div className="grid m-12 h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 header-section">
            <Carousel>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </Carousel>

            <div className='bg-blue-500 rounded-full shadow-2xl text-section'>
                <div className='text-white flex flex-wrap justify-center'>
                    <p className='mt-24 ml-8 text-4xl title1'> Supply of emergency medicines at your service</p>
                    <p className='mt-8 title2'>The Leading Online Medicine services Platform of Bangladesh.</p>
                </div>
            </div>

        </div>
    );
};

export default Home;
import React from 'react'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Assets/Bannerimg/first1.jpg';
import banner2 from '../../../Assets/Bannerimg/second.jpg';
import banner3 from '../../../Assets/Bannerimg/thierdbaner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
             <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="heading">Welcome To The Travel Agency</h3>
                        <h1 className="touragency">WE PROVIDE ONLY THE BEST TOURS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut omnis beatae quam quibusdam facere expedita explicabo eaque non sit. Amet vitae exercitationem ad rerum consequuntur numquam magni nemo dolorem, itaque eius perferendis praesentium consequatur. Dolores, nihil, molestiae sunt tenetur aut similique nostrum deleniti amet minima. Esse magnam inventore, ea.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="heading">Welcome To The Travel Agency</h3>
                        <h1 className="touragency ">WE PROVIDE ONLY THE BEST TOURS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut omnis beatae quam quibusdam facere expedita explicabo eaque non sit. Amet vitae exercitationem ad rerum consequuntur numquam magni nemo dolorem, itaque eius perferendis praesentium consequatur. Dolores, nihil, molestiae sunt tenetur aut similique nostrum deleniti amet minima. Esse magnam inventore, ea.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="heading">Welcome To The Travel Agency</h3>
                        <h1 className="touragency">WE PROVIDE ONLY THE BEST TOURS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ut omnis beatae quam quibusdam facere expedita explicabo eaque non sit. Amet vitae exercitationem ad rerum consequuntur numquam magni nemo dolorem, itaque eius perferendis praesentium consequatur. Dolores, nihil, molestiae sunt tenetur aut similique nostrum deleniti amet minima. Esse magnam inventore, ea.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner

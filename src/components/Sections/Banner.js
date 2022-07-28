import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination} from 'swiper';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation
                slidesPerView={1}
                autoplay={{delay: 2000}}
                pagination={{clickable: true}}
                >
                    <SwiperSlide>
                        <div className="slide1">
                            <div className="swiper-wrapper">
                                <div className="swiper-text">
                                    <h1>Tuneup Your Car to Next Level</h1>
                                    <p>We believe in providing top quality workmanship and are so confident in our level of service that we back it up with a good quality.</p>
                                    <div className="link-box">
                                        <Link to='/' className='common-btn'><span>views all services</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide2">
                            <div className="swiper-wrapper">
                                <div className="swiper-text">
                                    <h1>Highly Skilled Certified Engineers</h1>
                                    <p>We believe in providing top quality workmanship and are so confident in our level of service that we back it up with a good quality.</p>
                                    <div className="link-box">
                                        <Link to='/about' className='common-btn'><span>views all services</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide3">
                            <div className="swiper-wrapper">
                                <div className="swiper-text">
                                    <h1>Mordren Workshop for car Repair</h1>
                                    <p>We believe in providing top quality workmanship and are so confident in our level of service that we back it up with a good quality.</p>
                                    <div className="link-box">
                                        <Link to='/' className='common-btn'><span>views all services</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
            </Swiper>
        </div>
    );
};

export default Banner;
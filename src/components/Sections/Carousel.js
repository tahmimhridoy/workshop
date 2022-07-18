import React from 'react';
import './Carousel.css';
import author from '../../images/author-1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper';


import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
    return (
        <section className="carousel-section">
            <div className="container">
                
                <Swiper
                modules={[ Autoplay, Pagination]}
                slidesPerView={1}
                autoplay={{delay: 2000}}
                pagination={{clickable: true}}
                >
                    <SwiperSlide>
                        <div className="carousel-container">
                            <div className="img-wrapper">
                                <img src={author} alt="" />
                                <div className="quote">“</div>
                            </div>
                            <div className="content-wrapper">
                                <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit. Vesti bulum nec odio ipsum. Lorem ipsum dolor sit amet, cons ectetur elit.</p>
                                <div className='author'>
                                    <h5>- Tahmim Hridoy</h5>
                                    <p>CEO OF MINDA</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-container">
                            <div className="img-wrapper">
                                <img src={author} alt="" />
                                <div className="quote">“</div>
                            </div>
                            <div className="content-wrapper">
                                <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit. Vesti bulum nec odio ipsum. Lorem ipsum dolor sit amet, cons ectetur elit.</p>
                                <div className='author'>
                                    <h5>- Tahmim Hridoy</h5>
                                    <p>CEO OF MINDA</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-container">
                            <div className="img-wrapper">
                                <img src={author} alt="" />
                                <div className="quote">“</div>
                            </div>
                            <div className="content-wrapper">
                                <p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit. Vesti bulum nec odio ipsum. Lorem ipsum dolor sit amet, cons ectetur elit.</p>
                                <div className='author'>
                                    <h5>- Tahmim Hridoy</h5>
                                    <p>CEO OF MINDA</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    
            </Swiper>
            </div>
        </section>
    );
};

export default Carousel;
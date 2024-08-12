import React from 'react';
import { Data } from './Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './projects.css';

export const Projects = () => {
    return (
        <section className="project container1 section" id="projects">
            <h2 className="section_title">Projects</h2>
            <span className="section-subtitle ">My Works</span>

            <Swiper className="project_container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    }
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, icon, title, description, project, website }) => {
                    return (
                        <SwiperSlide className="project_card" key={id}>
                            <i className={icon} id='project_icon'></i>

                            <h3 className="project_name">{title}</h3>

                            <p className="project_description">{description}</p>
                            <div className="d-flex project_links align-content-center">
                            <a href={website} className='btn btn1'>Website <i class='bx bx-link-external'></i></a>
                            <a href={project} className='btn btn2'>Project <i class='bx bx-link' ></i></a>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </section>
    )
}

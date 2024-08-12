import React, { useState } from 'react';
import './services.css';

export const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index)  => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section-subtitle ">What I Do?</span>

            <div className="services_container container1 grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">
                            Web <br /> Development
                        </h3>
                    </div>
                    <span className="services_button" onClick={() => 
                    toggleTab(1)}>
                        View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services_modal-title">Web Developer</h3>
                            <p className="services_modal-description">
                                My web development expertise revolves around creating dynamic and responsive websites that blend creativity with functionality. With proficiency in HTML, CSS, JavaScript, and other cutting-edge technologies, I build websites that not only captivate visitors with stunning visuals but also provide seamless navigation and interactivity.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">
                            Ui/Ux <br /> Development
                        </h3>
                    </div>
                    <span className="services_button" onClick={() => 
                    toggleTab(2)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services_modal-title">Ui/Ux Developer</h3>
                            <p className="services_modal-description">
                            My UI design work focuses on crafting visually captivating and user-friendly digital interfaces. With a keen eye for detail and a deep understanding of user experience principles, I create intuitive layouts that enhance usability and engagement.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">
                            Reponsive <br /> Design
                        </h3>
                    </div>
                    <span className="services_button" onClick={() => 
                    toggleTab(3)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services_modal-title">Web Developer</h3>
                            <p className="services_modal-description">
                            In my responsive design projects, I specialize in creating websites that adapt seamlessly across various devices and screen sizes. Using a combination of fluid layouts, flexible grids, and media queries, I ensure that every aspect of the website adjusts gracefully to provide an optimal viewing experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

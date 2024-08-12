import React from 'react';
import './skills.css';

export const Frontend = (props) => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">
                Frontend Skills
            </h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                    <i class='bx bxl-html5'></i>
                        <div>
                            <h3 className="skills_name">
                                HTML<span className='skills_subtitle d-block'>Beginner</span>
                            </h3>
                            <span className="skills_level">
                                <div class="progress" style={{width:"80px", height:"5px", backgroundColor:"rgb(200, 200, 200)"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="skills_data">
                    <i class='bx bxl-css3'></i>
                        <div>
                            <h3 className="skills_name">
                                CSS<span className='skills_subtitle d-block'>Beginner</span>
                            </h3>
                            <span className="skills_level">
                                <div class="progress" style={{width:"80px", height:"5px", backgroundColor:"rgb(200, 200, 200)"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="skills_data">
                    <i class='bx bxl-javascript'></i>
                        <div>
                            <h3 className="skills_name">
                                Javascript<span className='skills_subtitle d-block'>Beginner</span>
                            </h3>
                            <span className="skills_level">
                                <div class="progress" style={{width:"80px", height:"5px", backgroundColor:"rgb(200, 200, 200)"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="skills_data">
                    <i class='bx bxl-bootstrap' ></i>
                        <div>
                            <h3 className="skills_name">
                                Bootstrap<span className='skills_subtitle d-block'>Beginner</span>
                            </h3>
                            <span className="skills_level">
                                <div class="progress" style={{width:"80px", height:"5px", backgroundColor:"rgb(200, 200, 200)"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="skills_data">
                    <i class='bx bxl-react' ></i>
                        <div>
                            <h3 className="skills_name">
                                React JS<span className='skills_subtitle d-block'>Beginner</span>
                            </h3>
                            <span className="skills_level">
                                <div class="progress" style={{width:"80px", height:"5px", backgroundColor:"rgb(200, 200, 200)"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

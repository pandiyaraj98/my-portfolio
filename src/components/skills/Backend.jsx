import './skills.css';

export const Backend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">
                Backend Skills
            </h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                    <i class='bx bxl-java' ></i>
                        <div>
                            <h3 className="skills_name">
                                Java<span className='skills_subtitle d-block'> Beginner</span>
                            </h3>
                            <span className="skills_level">
                                <div class="progress" style={{width:"80px", height:"5px"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="skills_data">
                    <i class='bx bxl-spring-boot' ></i>
                        <div>
                            <h3 className="skills_name">
                                Springboot<span className='skills_subtitle d-block'> Beginner</span>
                            </h3>
                            <span className="skills_level">
                                <div class="progress" style={{width:"80px", height:"5px",backgroundColor:"rgb(200, 200, 200)"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="skills_data">
                    <i class='bx bx-sushi'></i>
                        <div>
                            <h3 className="skills_name">
                                MySQL<span className='skills_subtitle d-block'> Beginner</span>
                            </h3>
                            <span className="skills_level">
                                <div class="progress" style={{width:"80px", height:"5px", backgroundColor:"rgb(200, 200, 200)"}}>
                                    <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

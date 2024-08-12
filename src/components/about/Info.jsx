import React from 'react'

export const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i class='bx bx-user-check about-icon'></i>
                <h3 className="about_title">Interest</h3>
                    <span className="about_subtitle">Develop Websites</span>
            </div>

            <div className="about_box">
                <i class='bx bx-briefcase about-icon'></i>
                <h3 className="about_title">Level</h3>
                    <span className="about_subtitle">Entry Level</span>
            </div>

            <div className="about_box">
                <i className="bx bx-support about-icon"></i>
                <h3 className="about_title">Support</h3>
                    <span className="about_subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

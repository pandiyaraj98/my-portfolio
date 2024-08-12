import React, { useEffect, useState } from 'react';
import './header.css';

export const Header = () => {
    /*=============== Change background header ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        //when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            // Get all section elements
            const sections = document.querySelectorAll("section");

            // Loop through each section to check if it is in the viewport
            sections.forEach((section) => {
                const top = section.offsetTop - 80; // Adjusted for header height
                const height = section.offsetHeight;
                const id = section.getAttribute("id");

                if (window.scrollY >= top && window.scrollY < top + height) {
                    setActiveNav(`#${id}`);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className='header'>
            <nav className="nav container1">
                <a href="index.html" className="nav_logo">Pandiyaraj<span className='logo'>&lt;/&gt;</span></a>
                <div className={Toggle ? "nav_menu show_menu": "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-estate nav_icon"></i> Home
                            </a>
                        </li>   

                        <li className="nav_item">
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-user nav_icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-briefcase nav_icon"></i> Services
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#education" onClick={() => setActiveNav("#education")} className={activeNav === "#education" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-book-open nav_icon"></i> Education
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-file-copy-alt nav_icon"></i> Projects
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-message nav_icon"></i> Contact
                            </a>
                        </li>

                    </ul>
                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

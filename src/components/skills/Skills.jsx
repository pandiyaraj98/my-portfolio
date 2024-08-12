import React from 'react';
import { Backend } from './Backend';
import { Frontend } from './Frontend';

export const Skills = () => {
  return (
    <section className="skill section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section-subtitle ">My Technical Level</span>
            <div className="skills_container container1 grid">
                <Frontend/>
                <Backend />
            </div>
    </section>
  )
}

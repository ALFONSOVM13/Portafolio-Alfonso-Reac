import React from 'react';
import '../styles/skills.scss';
import Icono from '../assets/icono2.svg';

const Skills = () => {
    return (
        <section id='section2'>
            <img className='logo' src={Icono} alt="icono"/>
            <div className='container'>
                <h1>Skills</h1>

            <div className="cards">
                <div className="card red">
                    <p className="tip">Desing</p>
                    <p className="second-text">I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
                </div>
                <div className="card blue">
                    <p className="tip">Engineering</p>
                    <p className="second-text">In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
                </div>
                <div className="card green">
                    <p className="tip">User Experience (UX)</p>
                    <p className="second-text">Beyond just code, I'm passionate about crafting seamless interactions and intuitive interfaces. I immerse myself in understanding user needs, applying design thinking principles to ensure delightful experiences that merge functionality with elegance.</p>
                </div>
            </div>
            </div>
            
        </section>
    );
};

export default Skills;

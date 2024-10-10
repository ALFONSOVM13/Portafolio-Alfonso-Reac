import React from 'react';
import '../styles/home.scss';
import logo from '../assets/logo.svg';
import perfil from '../assets/perfil.svg';

const Home = () => {
    return (
        <section id='section1' className="container-fluid h-200">
            <div className="row h-100">
                <div className="contenedor1 col-md-9 bg-custom d-flex align-items-center">
                    <div className="col-md-8">
                        <a href="/">
                            <img className="logo" src={logo} alt="logo" />
                        </a>

                        <div className="caja1 text-white text-center">
                            <h1 className="titulo">
                                Full-Stack <br /> Developer <span>.</span>
                            </h1>
                            <h2>
                                I like to craft solid and scalable products with great user experiences.
                            </h2>
                            <br />
                            <br />
                            <div className="container">
                                <div className="feature-list">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className='container1'>
                                                <h4 className='text-custom'>
                                                    As a full-stack developer, I excel in both front-end and back-end development, creating seamless and
                                                    user-friendly digital experiences. My versatile skills cover the entire spectrum of web development,
                                                    ensuring robust and innovative solutions for every project.
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className='container2'>
                                                <h4 className='text-custom'>
                                                    With a focus on scalability and user-centric design, I turn concepts into successful digital products.
                                                    My proficiency in both front-end and back-end technologies allows me to deliver comprehensive solutions,
                                                    addressing diverse challenges in modern web development.
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor2 col-md-3 bg-custom2 d-flex align-items-center justify-content-center">
                    <img className="foto-perfil" src={perfil} alt="perfil" />
                </div>
            </div>
        </section>
    );
};

export default Home;

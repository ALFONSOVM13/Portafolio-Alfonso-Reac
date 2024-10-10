import React, { useState } from "react";
import "../styles/education.scss";
import Icono from "../assets/icono.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbCertificate, TbCalendar } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section id="section3">
      <img className="logo" src={Icono} alt="icono" />

      <div className="container" style={{ marginTop: "50px" }}>
        <h1 className="text-center">MI TRAYECTORIA</h1>
        <p className="text-center">
          <span style={{ fontSize: "small", fontStyle: "italic" }}>
            Educación y certificados
          </span>
        </p>
        <div className="d-flex justify-content-center mb-3">
          <button
            className={`btn ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => setActiveTab("tab1")}
            style={{
              background: activeTab === "tab1" ? "#9A2C29" : "none",
              border: "none",
              color: activeTab === "tab1" ? "#ffffff" : "#000000",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            <FaGraduationCap
              className="mr-2"
              size={24}
              color={activeTab === "tab1" ? "#ffffff" : "#000000"}
            />
            Educación
          </button>
          <button
            className={`btn ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => setActiveTab("tab2")}
            style={{
              background: activeTab === "tab2" ? "#9A2C29" : "none",
              border: "none",
              color: activeTab === "tab2" ? "#ffffff" : "#000000",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            <TbCertificate
              className="mr-2"
              size={24}
              color={activeTab === "tab2" ? "#ffffff" : "#000000"}
            />
            Cursos Complementarios
          </button>
        </div>

        <div className="timeline">
          <TbCalendar color="#ffffff" className="timeline-icon" />
          <TbCalendar color="#ffffff" className="timeline-icon" />
          <TbCalendar color="#ffffff" className="timeline-icon" />
          <TbCalendar color="#ffffff" className="timeline-icon" />
        </div>

        <div className="row">
          {activeTab === "tab1" && (
            <>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4>COLEGIO INCA</h4>
                    <p className="text-center">Año 2019-2020</p>
                    <h5>Ballicher Academico</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4>UNIVERSIDAD DE LA COSTA</h4>
                    <p className="text-center">Año 2020-Actualidad</p>
                    <h5>Ingenieria de Sistemas</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4>UNIVERSIDAD DE LA COSTA</h4>
                    <p className="text-center">Año 2020-Actualidad</p>
                    <h5>Ingles-Nivel B1</h5>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "tab2" && (
            <>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4>
                      COURSERA
                      <br />
                      University of Colorado System
                    </h4>
                    <p style={{ textAlign: "center" }}>Año 2022</p>
                    <h5>
                      Design and Build a Data Warehouse for Business
                      Intelligence Implementation
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4>
                      COURSERA <br />
                      University of Colorado System
                    </h4>
                    <p style={{ textAlign: "center" }}>Año 2022</p>
                    <h5>
                      Business Intelligence Concepts, Tools, and Applications
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4>
                      SCRUM STUDY
                      <br />
                      Scrum Fundamentals
                    </h4>

                    <p style={{ textAlign: "center" }}>Año 2023</p>
                    <br />
                    <h5>Agile Methodology</h5>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;

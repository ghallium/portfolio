import React from "react";
import projectsData from "../../data/projets.json";
import { Link } from "react-router-dom";
import "./projects.css";

function Projects() {
  return (
    
    <div className="projects_area">
      <h1>Projets</h1>
      <div className="projects_container">
      {projectsData.map((p) => (
        <Link key={p.id} to={`/projet/${p.id}`}>
          
          <div
            className="project_card"
            style={{
             backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${p.cover})`,

            }}
          >
            <p className="project_card_title">{p.title}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default Projects;
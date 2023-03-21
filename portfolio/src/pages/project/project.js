import React from "react";
import { useParams } from 'react-router-dom';
import Error from "../error/error";
import data from "../../data/projets.json";
import Carousel from "../../components/carousel/carousel";
import "./project.css";

export default function Projet() {
  let {id} = useParams();
  const foundProject = data.find(projet => projet.id === id);

  if(!foundProject) {
    return <Error />;
  } else {
    return (
      <div className="toto">
          <div className="carousel_area">
            <Carousel />
          </div>
      <div className="projectcontents_area">
          <h2>{foundProject.title}</h2>
          <ul>
            {foundProject.tags.map((tag) => (
            <li key={tag}>{tag}</li>
             ))}
          </ul>
        <p>{foundProject.type_projet}</p>
        <p className="projet_description">{foundProject.description}</p>
        <p>{foundProject.github_link}</p>
        </div>
      </div>
    );
  }
}


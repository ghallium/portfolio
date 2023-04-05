import React, { useEffect, useState } from "react";
import zeldaSound from "../../assets/zelda-secret-sound.mp3";
import "./about.css";
import imgGameBoy from "../../assets/game-boy-portrait.jpg";
import zeldaSecret from "../../assets/zeldaSecret.png"
import avatarImg from "../../assets/avatar.jpg";

function About() {

function playZeldaSound() {
    new Audio(zeldaSound).play();
}

const konamiSequence = "38384040373937396665";
const [input, setInput] = useState("");

  useEffect(() => {
    const onKeyDown = (e) => {
      setInput((prevInput) => prevInput + e.keyCode);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (input.endsWith(konamiSequence)) {
      // Do something when the Konami Code is entered
      document.querySelector(".about_info").style.background= "#464747"
      document.querySelector(".about_image img").src = zeldaSecret
      document.querySelector(".about_image").style.backgroundColor = "black";
      document.querySelector(".about_title").style.color = "#16D8BC"
      document.querySelector(".about_text").style.color = "white"
      document.querySelector(".fa-envelope").style.color = "white"
      document.querySelector(".fa-linkedin").style.color = "white"
      document.querySelector(".fa-github").style.color = "white"
      playZeldaSound();
      
      
    }
  }, [input]);

  return (
    <div className="about_container">
      <div className="about_image">
        <img src={imgGameBoy} alt="une game boy avec ma tête pixellisée"></img>
      </div>
      <div className="about_info">
        <span className="about_title">à propos</span>
        <div className="about_content">
          <div className="social_column">
            <div className="avatar">
              <img src={avatarImg} alt="mon portrait"></img>
            </div>
            <div className="social_icons">
              <a href="mailto:guillaumerober@gmail.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="http://www.linkedin.com/in/guill-robert" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="http://www.github.com/ghallium" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_text">
            <p>
            Hey bonjour ! Moi c'est Guillaume Robert et je suis développeur web junior en reconversion professionnelle après avoir auparavant travaillé dans des domaines comme le graphisme ou la rédaction web. Après 7 mois de formation à distance chez OpenClassrooms, j'ai acquis un certain nombre de compétences comme apprendre à intégrer une maquette et la transformer en site fonctionnel, concevoir un site e-commerce en Javascript, découvrir le fonctionnement des API REST et de node.js ou encore pratiquer le framework React. 
            </p>
            <p>
            Lorsque je ne suis pas devant Visual Studio Code, je m'intéresse à tout ce qui touche de près ou de loin à la culture populaire : cinéma, bande-dessinée, manga et séries télévisées. Je suis également un passionné de jeux vidéo depuis mon plus jeune âge et pratique le streaming à mes heures perdues. Aussi, j'aime bien les chiens (et aussi les chats), la culture hip-hop et manger des pizzas.   
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


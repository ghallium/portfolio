import React, { useEffect, useState } from "react";
import "./about.css";
import imgGameBoy from "../../assets/game-boy-portrait.jpg";
import avatarImg from "../../assets/avatar.jpg";

function About() {
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
      document.body.style.backgroundColor = "pink";
      document.querySelector(".about_container").style.backgroundColor = "yellow";
      document.querySelector(".about_image img").src = "https://placekitten.com/200/300";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus nibh ut dolor pulvinar
              scelerisque. Maecenas ut mauris vitae ipsum iaculis ornare. Aenean faucibus in magna ac viverra. Fusce
              venenatis quam erat. Morbi lacinia, felis vitae egestas volutpat, dui ligula rutrum tellus, et tincidunt
              nibh nunc at ante. Pellentesque ut arcu nisl. Praesent efficitur faucibus orci, in feugiat risus semper
              at. Sed eu congue nunc. Suspendisse a diam sit amet odio gravida sodales nec eget eros. Donec malesuada
              mauris et tortor ullamcorper, vel tristique urna gravida. Duis fermentum cursus facilisis. In a mollis
              leo. Phasellus ultrices, libero quis hendrerit tincidunt, metus tellus consectetur urna, eu laoreet
              ligula libero placerat libero. Ut condimentum et metus at commodo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


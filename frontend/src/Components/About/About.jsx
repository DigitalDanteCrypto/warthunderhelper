import React, { Component } from "react";
import Ruban from "../Ruban";
import github_logo from '../../assets/github.png'
import linkedin_logo from '../../assets/linkedin.png'
export class About extends Component {
  render() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let projectName = "WARTHUNDER_HELPER";
    let repeat = 0;

    const handleMouseOver = (event) => {
      if (repeat > 5) {
        event.target.innerText = "Stop it >.<'"; // This updates the text displayed by the element.
        return; // Exits the function.
      }

      let interval = null;
      
      let originalText = event.target.innerText; // Save the original text
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) =>
            index < iteration
              ? originalText[index]
              : letters[Math.floor(Math.random() * 26)]
          )
          .join("");

        iteration += 1 / 3;
      }, 30);

      setTimeout(() => {
        clearInterval(interval);
        event.target.innerText = originalText; // Reset to original text
      }, 2000);
      repeat++;
      console.log(repeat);

      return projectName;
    };

    return (
      <>
        <Ruban />
        <div id="about-container">
          <div id="presentation">
            <h4>Hi there 👋</h4>
            <h1>I am Florian Dante</h1>
            <h3 id="job-title">Junior Fullstack Engineer and Entrepreneur</h3>
            <p>
              I work creating software that solve problems in a simple way and
              sharing what I learn along the way. <br /> I like minimalism,
              Open-Source and good music. You can find me mostly on Twitter.
            </p>
          </div>
          <div id="connect-btn">
            <a className="btn">Let's connect</a>
            <a className="btn">Contact</a>
          </div>
          <div id="socials">
            <a href="">
                <img src={github_logo} alt="" />
            </a>
            <a href="">
                <img src={linkedin_logo} alt="" />
            </a>
          </div>
          <div id="about-project">
            <h2 id="project-name" onMouseOver={handleMouseOver}>
              {projectName}
            </h2>
            <p>
              The project is a web application aimed at War Thunder players,
              providing detailed information on aircraft. <br /> It uses MongoDB
              for data storage and Spring Boot for the backend API, ensuring
              efficient data management and retrieval. <br /> The frontend is
              developed with React, focusing on user interaction and interface.{" "}
              <br />
              This application demonstrates the integration of these
              technologies for an enhanced user experience in the gaming
              community.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;

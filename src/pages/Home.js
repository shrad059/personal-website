import React from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> SHRADDHA SINGH</h2>
          <p className="prompt">Software Developer </p>
      </div>
      <div className="skills">
        <h1> SKILLS</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM, BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java, .NET, ExpressJS, MySQL, MongoDB, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
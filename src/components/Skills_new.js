import React, { useContext } from "react";
import "../css/skills.css";
import CardSkill from "./cardSkill";
import ThemeContext from "../utility/themeContext";

function Skills() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="skills-parent"
      style={{
        background: theme
          ? "linear-gradient(to right, #0F2027, #203A43,#2C5364)"
          : "linear-gradient(to right, #67b26f, #4ca2cd)",
        color: theme ? "white" : "black"
      }}
      id="skillsSection"
    >
      <h2 id="skillHeading">Skillset Arsenal</h2>
      <div className="skills-card">
        <CardSkill
          text="HTML"
          imgUrl="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
        />
        <CardSkill
          text="CSS"
          imgUrl="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
        />
        <CardSkill
          text="JavaScript"
          imgUrl="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"
        />
        <CardSkill
          text="ReactJS"
          imgUrl="https://ionicframework.com/docs/icons/logo-react-icon.png"
        />
        <CardSkill
          text="Redux"
          imgUrl="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
        />
        <CardSkill
          text="MongoDB"
          imgUrl="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
        />
        <CardSkill
          text="ExpressJS"
          imgUrl="https://geekflare.com/wp-content/uploads/2023/01/expressjs.png"
        />
        <CardSkill
          text="NodeJS"
          imgUrl="https://www.clariontech.com/hs-fs/hubfs/Clariontech%202023/images/What%20we%20do/Backend%20or%20Frontend/node-js.png?width=370&height=427&name=node-js.png"
        />

        <CardSkill
          text="Jenkins"
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"
        />
      </div>
    </div>
  );
}

export default Skills;

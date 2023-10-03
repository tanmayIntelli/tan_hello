import React, { useContext } from "react";
import "../css/about.css";
import { TypeAnimation } from "react-type-animation";
import ThemeContext from "../utility/themeContext";

const About = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="about-parent">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme ? "black" : "white",
            color: theme ? "white" : "black"
          }}
        >
          <div className="parallax">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="parallax-text">
              <TypeAnimation
                sequence={[
                  "Hi! I am Tanmay",
                  1500,
                  "Welcome to my World",
                  1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
          <div
            style={{
              padding: "10px",
              marginTop: "10px",
              width: "80%"
            }}
          >
            <div className="about-text" id="aboutSection">
              <h2 id="aboutHeading">The Journey Begins Here</h2>
              <p>
                Hey there! I'm Tanmay, a passionate software engineer with a
                strong affinity for web development. While I currently call New
                Delhi, India, my home, my upbringing as an Air Force brat has
                blessed me with the opportunity to explore every corner of our
                beautiful country, a journey I affectionately refer to as my
                'Bharat Darshan.'
              </p>
              <h3>
                <b>Professional Prowess</b>
              </h3>
              <p>
                Professionally, I am a part of the talented team at Oracle
                Cerner as SDE-2. Together, we're on a mission to make healthcare
                accessible to all through relentless innovation. It's a
                thrilling adventure, and I'm learning something new every day.
              </p>
              <h3>
                <b>Cooking and Coding Connoisseur</b>
              </h3>
              <p>
                In my world, cooking and coding share the spotlight. I take
                pride in my culinary skills and can whip up a mean dish when
                inspiration strikes. Simultaneously, I navigate the intricate
                world of web development, constantly pushing the boundaries of
                what's possible in the digital realm.
              </p>
              <h3>
                <b>Beyond the Résumé</b>
              </h3>
              <p>
                While my résumé might paint a picture of a typical tech
                enthusiast, there's more to me than meets the eye. I have an
                insatiable love for trekking, and I aspire to conquer as many
                mountain trails as humanly possible. It's a thrilling way to
                disconnect from the digital world and reconnect with nature.
              </p>
              <p>
                But, I must confess, I have a soft spot for <i>chole bhature</i>
                – a delightful weakness that often tests my commitment to
                maintaining a balance between fitness and my love for food.
              </p>
              <h3>
                <b>Let's Connect and Collaborate</b>
              </h3>
              <p>
                I thrive on collaboration and the opportunity to work with
                like-minded individuals. Whether you want to discuss the latest
                world affairs, share street food recommendations, or brainstorm
                over a cup of chai, I'm always eager to connect on LinkedIn and
                explore exciting opportunities together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

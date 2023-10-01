import React, { useContext } from "react";
import "../css/projects.css";
import Card from "./card";
import ThemeContext from "../utility/themeContext";

const Projects = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: theme
          ? "linear-gradient(to right, #a73737, #7a2828)"
          : "#fae0da",
        color: theme ? "white" : "black"
      }}
      id="projectSection"
    >
      <h2 id="projectHeading">My Work in Action</h2>
      <div
        style={{
          width: "80vw",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        <Card
          title="React-Date-Picker"
          link="https://reactdatepicker.com/#example-holiday-dates"
          linkText="Demo"
          description={[
            "Enhanced the react-date-picker library to include a 'Holiday dates' feature. This enable users to input a list of holidays, with each date dynamically highlighted within the date picker. Implemented tooltips for holiday dates, providing users with descriptive information upon hover."
          ]}
          imgUrl="https://www.iconarchive.com/download/i103365/paomedia/small-n-flat/calendar.1024.png"
        />
        <Card
          title="Snoopit"
          link="https://snoopit-6b1aa9746086.herokuapp.com/#/"
          linkText="Demo"
          description={[
            "It is a convenient resource hub for front-end developers, crafted to centralise the articles for convenience.",
            "Key technology: MongoDB, ExpressJS, ReactJS, NodeJS, AXIOS, Redux, hosted on Heroku"
          ]}
          imgUrl="https://snoopit-6b1aa9746086.herokuapp.com/static/media/books.b7ff6d9400ef89fa4ffd.jpeg"
        />
        <Card
          title="Show and Movie Store "
          link="https://moviesandshows-app.netlify.app/"
          linkText="Demo"
          description={[
            "A web-based application that enable the user to browse and search through the trending shows from IMDB. The shows and movies are fetched from IMDB API and stored in redux store.",
            "Key technology: ReactJS, AXIOS, API from IMDB, hosted on Netlify."
          ]}
          imgUrl="https://www.listchallenges.com/f/lists/62d312cf-d718-4513-a842-ecc04637c55a.jpg"
        />
        <Card
          title="Crypto Bazar"
          link="https://crypto-currency-bazaar.web.app/"
          linkText="Demo"
          description={[
            "A web-based application that enable the user to browse through all the trending crypto currencies in real-time.",
            "Key technology: ReactJS, AXIOS, API from CoinGecko, hosted on Netlify and Firebase"
          ]}
          imgUrl="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/finance/introduction-to-cryptocurrency-717x404.jpg"
        />
        <Card
          title="Appointment Booking app"
          description={[
            "An end to end webapp to prevent crowding of stores especially in unprecedented time like COVID-19. This provides users with convinience of booking a slot to visut the slot, and allows the admin to customize the limits of tokens per day, validate tokens etc.",
            "Key technology: ReactJS, NodeJS with Express, MySQL, Hosted on AWS EC2"
          ]}
          imgUrl="https://businessinnovation2005.com/wp-content/uploads/2022/02/Appointment-Scheduling-Software.jpg"
        />
      </div>
    </div>
  );
};

export default Projects;

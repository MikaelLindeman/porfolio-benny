import React, { useState, useEffect } from "react";
import { motion, transform } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Gaming",
    description: "I am a good gamer",
    imgUrl: images.abouts1,
  },
  {
    title: "Creativity",
    description: "Crativity in game development",
    imgUrl: images.abouts2,
  },
  {
    title: "Music",
    description: "Letting the creativity flow free",
    imgUrl: images.abouts3,
  },
  {
    title: "Benny Benasi",
    description: "Training mental and physical health",
    imgUrl: images.abouts4,
  },
];

const About = () => {
  return (
    <>
      <h2
        className="head-text"
        style={{
          textTransform: "uppercase",
          width: "70%",
          margin: "0 auto",
          textAlign: "start",
          fontSize: "2rem",
          marginTop: "2rem",
        }}
      >
        "The beauty of <span>Game development </span>is that you get to create{" "}
        <span>something from nothing</span> and see it come to life in ways you
        never imagined." <br />
        <h4 style={{ textAlign: "end", fontSize: "1.75rem" }}>
          {" "}
          - Hideo Kojima{" "}
        </h4>
      </h2>

      {/* <h2 className="head-text" style={{ textTransform: "uppercase" }}>
        "The beauty of <span>Game development</span> is that you get to create
        <span>something from nothing</span> and see it come to life in ways you
        never imagined." <br />
        <h4 style={{ textAlign: "end" }}> - Hideo Kojima </h4>
      </h2> */}

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;

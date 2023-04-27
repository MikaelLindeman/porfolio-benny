import React, { useState, useEffect } from "react";
import { motion, transform } from "framer-motion";
import { images } from "../../constants";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "about"]`;

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2
        className="head-text"
        style={{
          width: "70%",
          margin: "0 auto",
          textAlign: "start",
          fontSize: "2rem",
          marginTop: "2rem",
          fontWeight: "200",
          fontStyle: "italic",
          textTransform: "inherit",
        }}
      >
        "The beauty of <span>Game development </span>is that you get to create{" "}
        <span>something from nothing</span> and see it come to life in ways you
        never imagined." <br />
        <h4 style={{ textAlign: "end", fontSize: "1.5rem", fontWeight: "200" }}>
          {" "}
          - Hideo Kojima{" "}
        </h4>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__bg");

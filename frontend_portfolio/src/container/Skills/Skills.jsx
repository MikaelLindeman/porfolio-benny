import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import ReactToolTip from "react-tooltip";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [exp, setExp] = useState([]);

  useEffect(() => {
    const query = `*[_type == "skills"]`;
    const expQuery = `*[_type == "experience"]`;

    client.fetch(query).then((data) => {
      setSkills(data);
    });
    client.fetch(expQuery).then((data) => {
      setExp(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                styl={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");

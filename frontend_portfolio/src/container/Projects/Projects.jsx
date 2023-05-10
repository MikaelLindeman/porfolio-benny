import React, { useState, useEffect } from "react";
// import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);

  useEffect(() => {
    const query = `*[_type == "projects"]`;

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProject(data);
    });
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterProject(projects);
      } else {
        setFilterProject(
          projects.filter((projects) => projects.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My creative <span>Projects</span>
      </h2>
      <div className="app__work-filter">
        {["Strategy", "Narrative", "Fighter", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleProjectFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterProject &&
          filterProject.map((projects, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(projects.imgUrl)} alt={projects.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  {/* Code Below only if links to project */}

                  {/* <a
                    href={projects.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={projects.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a> */}

                  {/* Code above only if linkts to project */}
                </motion.div>
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{projects.name}</h4>
                <p className="p-text">{projects.description}</p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{projects.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Projects, "app__works"), "projects");

import React, { useState } from "react";
import { Tabs, Tab, CardContent, Button, Typography } from "@mui/material";
import { projectsData } from "../projectsData";
import ProjectModal from "./ProjectModal";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import InfoIcon from "@mui/icons-material/Info";

const Portfolio = () => {
    const [currentCategory, setCurrentCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (event, newValue) => {
        setCurrentCategory(newValue);
    };

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const filteredProjects =
        currentCategory === "All"
            ? projectsData
            : projectsData.filter(
                  (project) => project.category === currentCategory
              );

    const categories = [
        "All",
        "Landing",
        "Website",
        "Dashboard",
        "Mobile App",
        "Widget",
    ];

    return (
        <section className="portfolio" id="portfolio">
            <div
                className="flex ac portfolio-box"
                style={{ justifyContent: "space-between" }}
            >
                <h3 style={{ margin: "3rem 0rem 2rem 1rem" }}>
                    Look at my recent projects
                </h3>
                <Tabs
                    value={currentCategory}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            label={category}
                            value={category}
                            className="tab-btn"
                        />
                    ))}
                </Tabs>
            </div>
            <div className="my-row projects">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="block-column project hover"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: "100%", height: "auto" }}
                            onClick={() => handleCardClick(project)}
                        />
                        <div
                            className="flex jb"
                            style={{ flexDirection: "column", height: "100%" }}
                        >
                            <CardContent>
                                <div className="flex ac jb card-header">
                                    <Typography
                                        variant="body2"
                                        className="lang"
                                    >
                                        {project.languages.join(", ")}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        className="category-name"
                                    >
                                        {project.category}
                                    </Typography>
                                </div>

                                <Typography variant="h4">
                                    {project.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    paragraph
                                    className="card-desc"
                                >
                                    {project.description}
                                </Typography>
                            </CardContent>
                            {project.githubLink && project.liveDemoLink ? (
                                <div className="project-btns">
                                    <Button
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="main-btn"
                                        startIcon={<GitHubIcon />}
                                    >
                                        GitHub
                                    </Button>
                                    <Button
                                        href={project.liveDemoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="secondary-btn"
                                        startIcon={<LaunchIcon />}
                                    >
                                        Demo
                                    </Button>
                                    <Button
                                        onClick={() => handleCardClick(project)}
                                        className="details-btn"
                                        startIcon={<InfoIcon />}
                                    >
                                        Details
                                    </Button>
                                </div>
                            ) : (
                                "in process ..."
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default Portfolio;

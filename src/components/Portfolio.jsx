// Portfolio.js
import React, { useState } from "react";
import {
    Tabs,
    Tab,
    CardContent,
    CardActions,
    Button,
    Typography,
} from "@mui/material";
import { projectsData } from "../projectsData";

const Portfolio = () => {
    const [currentCategory, setCurrentCategory] = useState("All");

    const handleChange = (event, newValue) => {
        setCurrentCategory(newValue);
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
            <div className="flex ac" style={{justifyContent: "space-between"}}>
            <h3 style={{ margin: "2rem 0rem 2rem 1rem" }}>
                Look at my recent projects
            </h3>
            <Tabs
                value={currentCategory}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
            >
                {categories.map((category) => (
                    <Tab key={category} label={category} value={category} />
                ))}
            </Tabs>
            </div>
            <div className="my-row projects">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="block-column project">
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: "100%", height: "auto" }}
                        />
                        <CardContent>
                            <Typography variant="h6">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {project.languages.join(", ")}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                href={project.githubLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </Button>
                            <Button
                                href={project.liveDemoLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Demo
                            </Button>
                        </CardActions>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

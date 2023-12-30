import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) {
        return null;
    }
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogContent>
                <Typography variant="body2" className="lang">
                    {project.languages.join(", ")}
                </Typography>
                <Typography variant="body1" className="category-name">
                    {project.category}
                </Typography>
                <Typography variant="h4">{project.title}</Typography>
                <Typography variant="body2" paragraph className="card-desc">
                    {project.description}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button href={project.githubLink} target="_blank" rel="noreferrer" className="main-btn">
                    GitHub
                </Button>
                <Button href={project.liveDemoLink} target="_blank" rel="noreferrer" className="secondary-btn">
                    Live Demo
                </Button>
                <Button onClick={onClose} className="secondary-btn">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectModal;

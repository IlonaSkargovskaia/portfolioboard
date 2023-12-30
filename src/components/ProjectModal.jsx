import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
} from "@mui/material";

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) {
        return null;
    }
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogContent>
                <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "auto" }}
                />
                
                <Typography variant="body2" paragraph className="card-desc">
                    {project.description}
                </Typography>
            </DialogContent>
            <DialogActions>
                
                <Button onClick={onClose} className="secondary-btn">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectModal;

import React, { useState } from "react";
import { Avatar, List, ListItem } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import "./styles.css";
import { navigationLinks } from "../linksData";
import { socialLinks } from "../linksData";

const LeftColumn = () => {
    const [active, setActive] = useState(false);
    

    const handleActive = (index) => {
        setActive(index);
    };

    return (
        <div className="left-column">
            <div className="left-header">
                <Avatar
                    alt="Ilona Skargovskaia"
                    src={logo}
                    style={{
                        width: "120px",
                        height: "120px",
                        border: " 2px solid #c3cbdf",
                    }}
                />
                <h2>
                    Ilona <span>Skargovskaia</span>
                </h2>
                <div className="left-subtitle">Full Stack developer</div>
            </div>

            {/* Navigation List */}
            <List className="nav-list">
                {navigationLinks.map((link, index) => (
                    <ListItem
                        key={index}
                        component="a"
                        href={link.link}
                        onClick={() => handleActive(index)}
                        className={active === index ? "active" : ""}
                    >
                        <div className="list-icon">{link.icon}</div>
                        <div className="list-label">{link.label}</div>
                    </ListItem>
                ))}
            </List>

            {/* Social Links */}
            <div className="social-links">
                <h3>Find me</h3>
                <div className="social-links-box">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            className="social-link-item"
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="social-icon">{social.icon}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftColumn;

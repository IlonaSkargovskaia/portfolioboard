import React from "react";
import { Avatar, List, ListItem } from "@mui/material";
import {
    Facebook,
    Instagram,
    GitHub,
    LinkedIn,
    Home as HomeIcon,
    Equalizer as FeaturesIcon,
    Work as PortfolioIcon,
    Receipt as ResumeIcon,
    Mail as ContactsIcon,
} from "@mui/icons-material";
import logo from "../assets/images/logo.jpg";
import "./styles.css";

const LeftColumn = () => {
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
            </div>

            {/* Navigation List */}
            <List className="nav-list">
                {[
                    { label: "Home", icon: <HomeIcon />, link: "#home" },
                    {
                        label: "Features",
                        icon: <FeaturesIcon />,
                        link: "#features",
                    },
                    {
                        label: "Portfolio",
                        icon: <PortfolioIcon />,
                        link: "#portfolio",
                    },
                    { label: "Resume", icon: <ResumeIcon />, link: "#resume" },
                    {
                        label: "Contacts",
                        icon: <ContactsIcon />,
                        link: "#contacts",
                    },
                ].map((link, index) => (
                    <ListItem key={index} component="a" href={link.link}>
                        <div className="list-icon">{link.icon}</div>
                        <div className="list-label">{link.label}</div>
                    </ListItem>
                ))}
            </List>

            {/* Social Links */}
            <div className="social-links">
                <h3>Find me</h3>
                <div className="social-links-box">
                    {[
                        {
                            icon: <Facebook />,
                            link: "https://www.facebook.com/ilonaskars/",
                        },
                        {
                            icon: <Instagram />,
                            link: "https://www.instagram.com/it_mamka",
                        },
                        {
                            icon: <GitHub />,
                            link: "https://github.com/IlonaSkargovskaia",
                        },
                        {
                            icon: <LinkedIn />,
                            link: "https://www.linkedin.com/in/ilona-skargovskaya/",
                        },
                    ].map((social, index) => (
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

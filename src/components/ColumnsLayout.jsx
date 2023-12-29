import React, { useState } from "react";
import {
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Drawer,
    IconButton,
    Hidden,
} from "@mui/material";
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
    Menu as MenuIcon,
} from "@mui/icons-material";
import "./styles.css";
import logo from '../assets/images/logo.jpg';

const socialLinks = [
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
];

const navigationLinks = [
    { label: "Home", icon: <HomeIcon />, link: "#home" },
    { label: "Features", icon: <FeaturesIcon />, link: "#features" },
    { label: "Portfolio", icon: <PortfolioIcon />, link: "#portfolio" },
    { label: "Resume", icon: <ResumeIcon />, link: "#resume" },
    { label: "Contacts", icon: <ContactsIcon />, link: "#contacts" },
];

const ColumnsLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className="container">
            {/* Left Column - Desktop */}
            <Hidden mdDown>
                <div className="left-column">
                    <div className="left-header">
                        <Avatar
                            alt="Ilona Skargovskaia"
                            src={logo}
                            style={{width: "120px", height: "120px", border:" 2px solid #c3cbdf"}}
                        />
                        <h2>
                            Ilona <span>Skargovskaia</span>
                        </h2>
                    </div>

                    {/* Navigation List */}
                    <List className="nav-list">
                        {navigationLinks.map((link, index) => (
                            <ListItem
                                key={index}
                                component="a"
                                href={link.link}
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
            </Hidden>

            {/* Burger Menu - Mobile & Tablet */}
            <Hidden lgUp>
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer}
                    classes={{ paper: "drawer-content" }}
                >
                    {/* Content for the Drawer */}
                    <div className="drawer-content">
                        <List>
                            {navigationLinks.map((link, index) => (
                                <ListItem
                                    key={index}
                                    component="a"
                                    href={link.link}
                                    onClick={toggleDrawer}
                                >
                                    <ListItemIcon>{link.icon}</ListItemIcon>
                                    <ListItemText primary={link.label} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Hidden>

            {/* Right Column */}
            <div className="right-column">
                {/* Content for the second column */}
                <h2>Column 2</h2>
                <p>This is the content of the second column.</p>
            </div>
        </div>
    );
};

export default ColumnsLayout;

import React, { useState } from "react";
import { IconButton, Drawer, Hidden } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import "./styles.css";

const ColumnsLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className="container">
            <Hidden mdDown>
                <LeftColumn />
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
                    <div className="drawer-content">
                        <LeftColumn />
                    </div>
                </Drawer>
            </Hidden>

            <RightColumn />
        </div>
    );
};

export default ColumnsLayout;

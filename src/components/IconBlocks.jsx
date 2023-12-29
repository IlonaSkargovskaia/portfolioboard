import React from "react";
import {
    Work as ExperienceIcon,
    AssignmentTurnedIn as ProjectsIcon,
    ThumbUp as UserFriendlyIcon,
    Star as StarIcon,
} from "@mui/icons-material";
import IconBlock from "./IconBlock";

const IconBlocks = () => {
    return (
        <div className="icon-blocks">
            <IconBlock
                icon={<ExperienceIcon />}
                number="5+"
                label="years of Experience"
            />
            <IconBlock
                icon={<ProjectsIcon />}
                number="80+"
                label="completed projects"
            />
            <IconBlock
                icon={<UserFriendlyIcon />}
                number="100%"
                label="user-friendly"
            />
            <IconBlock icon={<StarIcon />} number="One" label="More Block" />
        </div>
    );
};

export default IconBlocks;

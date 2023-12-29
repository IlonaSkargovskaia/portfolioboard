import React from "react";
import IconBlocks from "./IconBlocks";
import Header from "./Header";
import SkillsBlock from "./SkillsBlock";

const RightColumn = () => {
    return (
        <div className="right-column">
            <Header />

            <main>
                <IconBlocks />
                <SkillsBlock />
            </main>
        </div>
    );
};

export default RightColumn;

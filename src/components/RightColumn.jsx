import React from "react";
import IconBlocks from "./IconBlocks";
import Header from "./Header";
import SkillsBlock from "./SkillsBlock";
import Education from "./Education";

const RightColumn = () => {
    return (
        <div className="right-column">
            <Header />

            <main>
                <IconBlocks />
                <SkillsBlock />

                <section className="my-row portfolio">
                    <div className="col-65">
                        <h3 style={{ margin: "1rem 1rem 2rem 1rem" }}>
                            Look at my recent projects
                        </h3>
                        <div className="block">Portfolio</div>
                    </div>

                    <div className="col-25">
                        <Education />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default RightColumn;

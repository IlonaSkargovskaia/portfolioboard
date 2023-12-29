import React from "react";
import IconBlocks from "./IconBlocks";
import Header from "./Header";


const RightColumn = () => {
    return (
        <div className="right-column">
            <Header />
            
            <main>
              <IconBlocks />
            </main>
        </div>
    );
};

export default RightColumn;

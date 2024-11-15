import React from "react";

function ControlButtons ({ increaseCounter, decreseCounter, resetCounter, counter }) {
    return(
        <div className="button-container">
            <button className="increse-btn" onClick={increaseCounter}>Increase</button>
            <button className="decrese-btn" onClick={decreseCounter} disabled={counter == 0}>Decrese</button>
            <button className="reset-btn" onClick={resetCounter}>Reset</button>
        </div>
    );
};

export default ControlButtons;
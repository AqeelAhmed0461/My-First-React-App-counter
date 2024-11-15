import React from "react";

function CounterDisplay ({ counter }) {
    return(
        <div className="counter-display">
            <h1>Counter : {counter}</h1>
        </div>
    );
};

export default CounterDisplay;
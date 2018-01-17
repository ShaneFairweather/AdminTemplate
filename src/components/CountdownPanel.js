import React from 'react';

const CountdownPanel = (props) => {
    return (
        <div className="card countdown-panel">
            <div className="countdown-panel__timer">{props.timer}</div>
            <div className="countdown-panel__label">{props.label}</div>
        </div>
    )
};

export default CountdownPanel;
import React from 'react';

function CustomDivider({prop}: any) {
    const dividerStyle = {
        width: `${prop}`
    }
    return (
        <div className="divider" style={dividerStyle}>
            <div className="divider__blue"/>
            <div className="divider__gray"/>
        </div>
    );
}

export default CustomDivider;

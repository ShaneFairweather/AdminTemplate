import React from 'react';

const HeaderDropdownMenu = (props) => {
    const renderHeader = () => {
        if(props.title) {
            return <div className="header-dropdown__title">{props.title}</div>
        }
    };

    const renderContent = () => {

    }

    return (
        <div className="header-dropdown">
            {renderHeader()}

        </div>
    )
};

export default HeaderDropdownMenu;
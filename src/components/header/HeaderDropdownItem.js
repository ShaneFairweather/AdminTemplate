import React from 'react';

const HeaderDropdownItem = (props) => {
    const { avatar, name, date, message } = props.email;
    return (
        <div className="header__dropdown__item">
            <div className="header__dropdown__item__main">
                <div className="header__dropdown__item__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <div className="header__dropdown__item__info">
                    <div className="header__dropdown__item__name">{name}</div>
                    <div className="header__dropdown__item__message">{message.slice(0, 30) + "..."}</div>
                </div>
            </div>
            <div className="header__dropdown__item__time">
                {date}
            </div>
        </div>
    )
};

export default HeaderDropdownItem;
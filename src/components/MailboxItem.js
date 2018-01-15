import React from 'react';

const MailboxItem = (props) => {
    const { avatar, name, header, date } = props.email;
    return (
        <div className="inbox__item">
            <div className="inbox__item__main">
                <div className="inbox__item__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <div className="inbox__item__info">
                    <div className="inbox__item__name">{name}</div>
                    <div className="inbox__item__header">{header}</div>
                </div>
            </div>
            <div className="inbox__item__time">
                {date}
            </div>
        </div>
    )
};

export default MailboxItem;
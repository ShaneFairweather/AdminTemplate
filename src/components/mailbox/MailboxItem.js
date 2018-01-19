import React from 'react';
import { Link } from 'react-router-dom';

const MailboxItem = (props) => {
    const { avatar, name, header, date, message, id } = props.email;
    return (
        <Link to={{pathname: `/mailbox/mail/${id}`}}>
            <div className="inbox__item">
                <div className="inbox__item__main">
                    <div className="inbox__item__avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <div className="inbox__item__info">
                        <div className="inbox__item__name">{name}</div>
                        <div className="inbox__item__header">{header}</div>
                        <div className="inbox__item__message">{message.slice(0, 144) + "..."}</div>
                    </div>
                </div>
                <div className="inbox__item__time">
                    {date}
                </div>
            </div>
        </Link>
    )
};

export default MailboxItem;
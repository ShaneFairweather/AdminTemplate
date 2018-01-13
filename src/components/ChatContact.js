import React from 'react';

const ChatContact = (props) => {
    const { name, status, avatar } = props.contact;
    return (
        <div className="chat__contact">
            <div className="chat__contact__avatar">
                <img src={avatar} alt={name} />
            </div>
            <div className="chat__contact__text">
                <div className="chat__contact__name">{name}</div>
                <div className="chat__contact__status">{status}</div>
            </div>
        </div>
    )
};

export default ChatContact;
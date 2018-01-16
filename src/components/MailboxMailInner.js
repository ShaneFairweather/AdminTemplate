import React from 'react';

const MailboxMailInner = (props) => {
    const {name, header, avatar, email, date, message} = props.message;
    console.log(props.message.name);
    return (
        <div className="mailbox-mail">
            <div className="mailbox-mail__header">
                <div className="mailbox-mail__header__main">
                    <div className="mailbox-mail__avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <div className="mailbox-mail__info">
                        <div className="mailbox-mail__from">From: {name} - <span className="mailbox-mail__email">{email}</span></div>
                        <div className="mailbox-mail__subject">Subject: {header}</div>
                    </div>
                </div>
                <div className="mailbox-mail__time">{date}</div>
            </div>
            <div className="mailbox-mail__body">
                {message}
            </div>
        </div>
    )
};

export default MailboxMailInner;
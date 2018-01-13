import React from 'react';

const ChatMessage = (props) => {
    const {avatar, message, author, time} = props.post;

    if(props.fromYou) {
        return (
            <div className="chat__message chat__message--from-you">
                <div className="chat__message__main chat__message__main--from-you">
                    <div className="chat__message__avatar chat__message__avatar--from-you">
                        <img src={avatar} alt={author}/>
                    </div>
                    <div className="chat__message__content chat__message__content--from-you">
                        {/*<div className="chat__message__author">{author}</div>*/}
                        <div className="chat__message__text chat__message__text--from-you">{message}</div>
                    </div>
                </div>
                <div className="chat__message__timestamp">{time}</div>
            </div>
        )
    } else {
        return (
            <div className="chat__message">
                <div className="chat__message__main">
                    <div className="chat__message__avatar">
                        <img src={avatar} alt={author}/>
                    </div>
                    <div className="chat__message__content">
                        {/*<div className="chat__message__author">{author}</div>*/}
                        <div className="chat__message__text">{message}</div>
                    </div>
                </div>
                <div className="chat__message__timestamp">{time}</div>
            </div>
        )
    }
};

export default ChatMessage;
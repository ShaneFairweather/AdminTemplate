import React, { Component } from 'react';

class ChatMessage extends Component {
    componentDidMount() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollIntoView({ behaviour: 'smooth' });
    }

    render() {
        const {avatar, message, author, time} = this.props.post;
        if (this.props.fromYou) {
            return (
                <div className="chat__message chat__message--from-you" ref={el => { this.el = el; }}>
                    <div className="chat__message__main chat__message__main--from-you">
                        <div className="chat__message__avatar chat__message__avatar--from-you">
                            <img src={avatar} alt={author}/>
                        </div>
                        <div className="chat__message__content chat__message__content--from-you">
                            <div className="chat__message__text chat__message__text--from-you">{message}</div>
                        </div>
                    </div>
                    <div className="chat__message__timestamp">{time}</div>
                </div>
            )
        } else {
            return (
                <div className="chat__message" ref={el => { this.el = el; }}>
                    <div className="chat__message__main">
                        <div className="chat__message__avatar">
                            <img src={avatar} alt={author}/>
                        </div>
                        <div className="chat__message__content">
                            <div className="chat__message__text">{message}</div>
                        </div>
                    </div>
                    <div className="chat__message__timestamp">{time}</div>
                </div>
            )
        }
    }
};

export default ChatMessage;
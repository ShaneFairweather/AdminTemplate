import React from 'react';
import { Col } from 'reactstrap';
import ChatMessage from './ChatMessage';

const ChatBody = (props) => {
    const renderChatMessages = () => {
        return props.activeContact.chatHistory.map((post) => {
            if(post.author === "You") {
                return <ChatMessage fromYou post={post} key={post.id} />
            }
            return <ChatMessage post={post} key={post.id} />
        })
    };

    return (
        <Col xs="12" sm="12" md="8">
            <div className="chat__main card">
                <div className="chat__header card__header">
                    <div className="chat__title">Coby Fleener</div>
                    <div className="card__icons">
                        <i className="fa fa-clock-o" />
                        <i className="fa fa-question-circle-o" />
                        <i className="fa fa-cog" />
                    </div>
                </div>
                <div className="chat__body">
                    <div className="chat__messages">
                        {renderChatMessages()}
                    </div>
                    <div className="chat__add-message">
                        <input className="chat__input" type="text" placeholder="Type a message..." />
                    </div>
                </div>
            </div>
        </Col>
    )
};

export default ChatBody;
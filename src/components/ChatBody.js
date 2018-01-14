import React, { Component } from 'react';
import { Col } from 'reactstrap';
import ChatMessage from './ChatMessage';

class ChatBody extends Component {
    state = {
        message: ""
    };

    renderChatMessages = () => {
        return this.props.activeContact.chatHistory.map((post) => {
            if(post.author === "You") {
                return <ChatMessage fromYou post={post} key={post.id} />
            }
            return <ChatMessage post={post} key={post.id} />
        })
    };

    handleSubmit(e, name) {
        //console.log(this.state.message);
        if(e.key === 'Enter') {
           this.props.addPost(this.props.activeContact.name, this.state.message);
           this.setState({message: ""});
        }
    }

    render() {
        return (
            <Col xs="12" sm="12" md="8">
                <div className="chat__main card">
                    <div className="chat__header card__header">
                        <div className="chat__title">{this.props.activeContact.name}</div>
                        <div className="card__icons">
                            <i className="fa fa-clock-o"/>
                            <i className="fa fa-question-circle-o"/>
                            <i className="fa fa-cog"/>
                        </div>
                    </div>
                    <div className="chat__body">
                        <div className="chat__messages">
                            {this.renderChatMessages()}
                        </div>
                        <div className="chat__add-message">
                            <input onKeyUp={(e) => this.handleSubmit(e)}
                                   onChange={(e) => this.setState({message: e.target.value})}
                                   className="chat__input"
                                   type="text"
                                   placeholder="Type a message..."
                                   value={this.state.message}
                            />
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
};

export default ChatBody;
import React, { Component } from 'react';
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
        if(e.key === 'Enter') {
           this.props.addPost(this.props.activeContact.name, this.state.message);
           this.setState({message: ""});
        }
    }

    render() {
        return (
            <div className="card chat__main">
                <div className="chat__header card__header">
                    <div className="chat__title">{this.props.activeContact.name}</div>
                    <div className="card__icons">
                        <i className="fa fa-clock-o"/>
                        <i className="fa fa-question-circle-o"/>
                        <i className="fa fa-cog"/>
                    </div>
                </div>
                <div className="chat__body" id="chat__body">
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
        )
    }
};

export default ChatBody;
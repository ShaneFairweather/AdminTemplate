import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import ChatBody from './ChatBody';
import ChatContactsList from './ChatContactsList';
import You from '../assets/images/avatars/user-19.png';
import moment from 'moment';
import contacts from '../data/contacts';



class Chat extends Component {
    state = {
        activeContact: contacts.find(function (obj) { return obj.name === "Matt Cassel"; }),
        contacts: contacts
    };

    addPost = (name, message) => {
        contacts.find(function (obj) { return obj.name === name; }).chatHistory.push({
            author: "You",
            message: message,
            postId: Math.floor(Math.random() * 100000),
            avatar: You,
            time: moment().format('h:mm a').toUpperCase()
        });
        this.setState({
            contacts: contacts
        })
    };

    selectActiveContact = (name) => {
        this.setState({
            activeContact: contacts.find(function (obj) { return obj.name === name; })
        })
    };

    render() {
        console.log(this.state.activeContact);
        return (
            <Container fluid>
                <div className="section-header">Chat</div>
                <div className="chat">
                    <Row>
                        <ChatContactsList contacts={contacts} selectActiveContact={this.selectActiveContact} />
                        <ChatBody activeContact={this.state.activeContact} addPost={this.addPost}/>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Chat;
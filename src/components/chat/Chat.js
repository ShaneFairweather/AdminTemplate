import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChatBody from './ChatBody';
import ChatContactsList from './ChatContactsList';
import You from '../../assets/images/avatars/user-19.png';
import moment from 'moment';
import contacts from '../../data/contacts';



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
                        <Col xs="12" sm="12" md="4">
                            <ChatContactsList contacts={contacts} selectActiveContact={this.selectActiveContact} />
                        </Col>
                        <Col xs="12" sm="12" md="8">
                            <ChatBody activeContact={this.state.activeContact} addPost={this.addPost}/>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Chat;
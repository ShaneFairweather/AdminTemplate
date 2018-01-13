import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import ChatBody from './ChatBody';
import ChatContactsList from './ChatContactsList';
import You from '../assets/images/avatars/user-19.png';
import Matt from '../assets/images/avatars/user-3.png';
import Sammy from '../assets/images/avatars/user-4.png';


const contacts = [
    {
        name: "Matt Cassel",
        status: "Excepteur sint occaecat cupidat",
        avatar: Matt,
        id: 101,
        chatHistory: [
            {
                author: "You",
                message: "Hey Matt, how are those documents coming?",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "9:37 AM"

            },
            {
                author: "Matt",
                message: "Not bad, I was able to get Sammy to help me out",
                postId: Math.floor(Math.random() * 100000),
                avatar: Matt,
                time: "9:45 AM"
            },
            {
                author: "You",
                message: "Good, i'm glad that you were able to find some help",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "9:47 AM"
            },
            {
                author: "You",
                message: "Are you planning on going to the work party tomorrow night?",
                postId: Math.floor(Math.random() * 100000),
                avatar: You,
                time: "9:47 AM"
            },
            {
                author: "Matt",
                message: "Sure, i've been looking forward to it!",
                postId: Math.floor(Math.random() * 100000),
                avatar: Matt,
                time: "9:48 AM"
            },
        ]
    },
    {
        name: "Sammy Watkins",
        status: "Excepteur sint occaecat cupidat",
        avatar: Sammy,
        id: 102
    }
];

class Chat extends Component {
    state = {
        activeContact: contacts.find(function (obj) { return obj.name === "Matt Cassel"; })
    };

    render() {
        console.log(this.state.activeContact);
        return (
            <Container fluid>
                <div className="section-header">Chat</div>
                <div className="chat">
                    <Row>
                        <ChatContactsList contacts={contacts} />
                        <ChatBody activeContact={this.state.activeContact} />
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Chat;
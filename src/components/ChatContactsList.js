import React from 'react';
import { Col } from 'reactstrap';
import ChatContact from './ChatContact';

const ChatContactsList = (props) => {
    const renderContacts = () => {
        return props.contacts.map((contact) => {
            return <ChatContact selectActiveContact={props.selectActiveContact} key={contact.id} contact={contact} />
        });
    };

    return (
        <Col xs="12" sm="12" md="4">
            <div className="chat__contacts card">
                <div className="chat__header card__header">
                    <div className="chat__title">Contacts</div>
                    <div className="card__icons">
                        <i className="fa fa-plus" />
                    </div>
                </div>
                <div className="chat__list">
                    {renderContacts()}
                </div>
            </div>
        </Col>
    )
};

export default ChatContactsList;
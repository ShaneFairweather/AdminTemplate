import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MailboxItem from './MailboxItem';
import mailboxItems from '../data/mailboxItems';
import You from '../assets/images/avatars/user-19.png';
import { Link } from 'react-router-dom';


const MailboxInbox = () => {
    const renderMailboxItems = () => {
        return mailboxItems.map((email) => {
            return <MailboxItem key={email.id} email={email} />
        })
    };

    return (
        <Container fluid>
            <Row>
                <Col xs="12">
                    <div className="inbox card">
                        <div className="card__header inbox__header">
                            <div className="card__icons card__icons--left inbox__icons">
                                <div className="inbox__icons__compose">
                                    <Link to="/mailbox/compose">
                                        <i className="fa fa-pencil-square-o"/>
                                    </Link>
                                </div>
                                <div className="inbox__icons__group">
                                    <i className="fa fa-reply"/>
                                    <i className="fa fa-reply-all"/>
                                    <i className="fa fa-share"/>
                                </div>
                                <div className="inbox__icons__group">
                                    <i className="fa fa-exclamation"/>
                                    <i className="fa fa-trash-o"/>
                                </div>
                            </div>
                            <div className="inbox__header__info">
                                <div className="inbox__header__avatar">
                                    <img src={You} alt="Email avatar" />
                                </div>
                                <div className="card__header__text">
                                    <div className="inbox__header__name">Coby Fleener</div>
                                    <div className="inbox__header__subtitle">Mailbox</div>
                                </div>
                            </div>
                        </div>
                        <div className="inbox__main">
                            <div className="inbox__sidebar">
                                <div className="inbox__sidebar__subheader">Mailboxes</div>
                                <div className="inbox__sidebar__item"><i className="fa fa-envelope-o"/>Inbox</div>
                                <div className="inbox__sidebar__item"><i className="fa fa-star-o"/>Starred</div>
                                <div className="inbox__sidebar__item"><i className="fa fa-paper-plane-o"/>Sent</div>
                                <div className="inbox__sidebar__item"><i className="fa fa-file-o"/>Drafts</div>
                                <div className="inbox__sidebar__item"><i className="fa fa-paperclip"/>Attachments</div>
                                <hr/>
                                <div className="inbox__sidebar__subheader">Others</div>
                                <div className="inbox__sidebar__item"><i className="fa fa-exclamation"/>Spam</div>
                                <div className="inbox__sidebar__item"><i className="fa fa-trash-o"/>Trash</div>
                                <hr/>
                                <div className="inbox__sidebar__subheader">Tags</div>
                                <div className="inbox__sidebar__item">#important</div>
                                <div className="inbox__sidebar__item">#business</div>
                            </div>
                            <div className="inbox__content">
                                {renderMailboxItems()}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default MailboxInbox;
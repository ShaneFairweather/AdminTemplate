import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import TextEditor from '../TextEditor';

const MailboxComposeInner = () => {
    return (
        <div className="mailbox-compose">
            <div className="mailbox-compose__form">
                <Form>
                    <FormGroup>
                        <Label for="to">To:</Label>
                        <Input className="mailbox-compose__input form-to" type="email" name="email" id="to" />
                    </FormGroup>
                    <FormGroup >
                        <Label for="exampleEmail">CC:</Label>
                        <Input className="mailbox-compose__input form-cc" type="email" name="cc" id="cc" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">BCC:</Label>
                        <Input className="mailbox-compose__input form-bcc" type="email" name="bcc" id="bcc" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="subject">Subject:</Label>
                        <Input className="mailbox-compose__input form-subject" type="email" name="subject" id="subject" />
                    </FormGroup>
                </Form>
            </div>
            <TextEditor />
            <div className="mailbox-compose__footer">
                <div className="mailbox-compose__footer__button">
                    <button className="btn">Save</button>
                </div>
                <div className="mailbox-compose__footer__button">
                    <button className="btn btn--outline-blue">Send</button>
                </div>
            </div>
        </div>
    )
};

export default MailboxComposeInner;
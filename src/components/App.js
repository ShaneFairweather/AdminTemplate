import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Dashboard from './Dashboard';
import MailboxInbox from './MailboxInbox';
import MailboxCompose from './MailboxCompose';
import MailboxMail from './MailboxMail';
import Grid from './Grid';
import Gallery from './Gallery';
import TodoList from './TodoList';
import Chat from './Chat';
import BlogPosts from './BlogPosts';
import BlogDetail from './BlogDetail';
import { BrowserRouter, Route } from 'react-router-dom';
import '../assets/styles/styles.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <div className="main">
                        <Sidebar/>
                        <div className="content">
                            <div className="content__inner">
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/grid" component={Grid} />
                                <Route path="/gallery" component={Gallery} />
                                <Route path="/todo-list" component={TodoList} />
                                <Route path="/chat" component={Chat} />
                                <Route exact path="/blog" component={BlogPosts} />
                                <Route exact path="/blog/:id" component={BlogDetail} />
                                <Route path="/mailbox/inbox" component={MailboxInbox} />
                                <Route exact path="/mailbox/compose" component={MailboxCompose} />
                                <Route exact path="/mailbox/mail" component={MailboxMail} />
                            </div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Dashboard from './Dashboard';
import MailboxInbox from './MailboxInbox';
import Grid from './Grid';
import Gallery from './Gallery';
import TodoList from './TodoList';
import Chat from './Chat';
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
                                <Route path="/mailbox/inbox" component={MailboxInbox} />
                                <Route path="/grid" component={Grid} />
                                <Route path="/gallery" component={Gallery} />
                                <Route path="/todo-list" component={TodoList} />
                                <Route path="/chat" component={Chat} />
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

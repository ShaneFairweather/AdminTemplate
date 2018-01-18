import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Dashboard from './Dashboard';
import MailboxInbox from './MailboxInbox';
import MailboxCompose from './MailboxCompose';
import MailboxMail from './MailboxMail';
import Grid from './Grid';
import Signin from './Signin';
import Gallery from './Gallery';
import TodoList from './TodoList';
import Chat from './Chat';
import Calendar from './Calendar';
import BlogPosts from './BlogPosts';
import BlogDetail from './BlogDetail';
import Chartjs from './Charts';
import Rechart from './Rechart';
import ComingSoon from './ComingSoon';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import '../assets/styles/styles.css'

class AdminPanel extends Component {
    state = {
        sideMenuExpanded: true
    };

    toggleSideMenu = () => {
        this.setState({sideMenuExpanded: !this.state.sideMenuExpanded})
    };

    render() {
        return (
            <BrowserRouter>
                <div className="admin-panel">
                    <Route path="/coming-soon" component={ComingSoon} />
                    <Header toggleSideMenu={this.toggleSideMenu} sideMenuExpanded={this.state.sideMenuExpanded}/>
                    <div className="main">
                        <Sidebar sideMenuExpanded={this.state.sideMenuExpanded}/>
                        <div className="content">
                            <div className="content__inner">
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/gallery" component={Gallery} />
                                <Route path="/todo-list" component={TodoList} />
                                <Route path="/chat" component={Chat} />
                                <Route path="/calendar" component={Calendar} />
                                <Route exact path="/blog" component={BlogPosts} />
                                <Route exact path="/blog/:id" component={BlogDetail} />
                                <Route exact path="/mailbox/inbox" component={MailboxInbox} />
                                <Route exact path="/mailbox/compose" component={MailboxCompose} />
                                <Route exact path="/mailbox/mail/:id" component={MailboxMail} />
                                <Route exact path="/charts/chart-js" component={Chartjs} />
                                <Route exact path="/charts/recharts" component={Rechart} />
                            </div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default AdminPanel;

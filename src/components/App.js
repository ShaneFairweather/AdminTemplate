import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';
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
import Charts from './Charts';
import Rechart from './Rechart';
import Pricing from './Pricing';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import '../assets/styles/styles.css'

const colors = {
    "blue": "linear-gradient(55deg, #0f0833, #1f78ff)",
    "purple": "linear-gradient(65deg, #33001b, #8238ff)",
    "aqua": "linear-gradient(65deg, #13547a, #80d0c7)",
    "peach": "linear-gradient(65deg, #de6262, #ffb88c)",
    "gray": "linear-gradient(45deg, #2c3e50, #bdc3c7)",
    "celestial": "linear-gradient(45deg, #c33764, #1d2671)",
    "royal": "linear-gradient(45deg, #141e30, #243b55)"
};

class App extends Component {
    state = {
        sideMenuExpanded: true,
        mobileMenuExpanded: false,
        activeColor: "celestial"
    };

    toggleSideMenu = () => {
        this.setState({sideMenuExpanded: !this.state.sideMenuExpanded})
    };

    toggleMobileMenu = () => {
        this.setState({mobileMenuExpanded: !this.state.mobileMenuExpanded})
    };

    hideMobileMenu = () => {
        this.setState({mobileMenuExpanded: false})
    };

    handleActiveColorChange = (color) => {
        // console.log(color)
        this.setState({
            activeColor: color
        }, console.log(this.state.activeColor))
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App" style={{background: colors[this.state.activeColor]}}>
                    <Header
                        toggleSideMenu={this.toggleSideMenu}
                        toggleMobileMenu={this.toggleMobileMenu}
                        sideMenuExpanded={this.state.sideMenuExpanded}
                        mobileMenuExpanded={this.state.mobileMenuExpanded}
                        handleActiveColorChange={this.handleActiveColorChange}
                    />
                    <div className="main">
                        <Sidebar sideMenuExpanded={this.state.sideMenuExpanded}/>
                        <MobileSidebar
                            mobileMenuExpanded={this.state.mobileMenuExpanded}
                            toggleMobileMenu={this.toggleMobileMenu}
                        />
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
                                <Route exact path="/charts" component={Charts} />
                                <Route exact path="/pricing-tables" component={Pricing} />
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

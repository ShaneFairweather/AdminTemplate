import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import ColorPicker from '../ColorPicker';
import HeaderDropdown from "./HeaderDropdown";
import mailboxItems from '../../data/mailboxItems';

class Header extends Component {
    render() {
        const renderSideMenuToggle = () => this.props.sideMenuExpanded ? <i className="fa fa-outdent"/> :
            <i className="fa fa-indent"/>;
        const mobileToggleClass = this.props.mobileMenuExpanded ? "opened" : "";
        return (
            <div className="header">
                <div className="header__main">
                    <div className="header__main__inner">
                        <div className="header__brand"><Link to="/">SK Admin</Link></div>
                        <div className="header__toggle" onClick={() => this.props.toggleSideMenu()}>
                            {renderSideMenuToggle()}
                        </div>
                    </div>
                    <div className="header__searchbar">
                        <FormGroup>
                            <Label for="searchbar"><i className="fa fa-search"/></Label>
                            <Input placeholder="Search for people, files, documents..." id="searchbar"/>
                        </FormGroup>
                    </div>
                </div>
                <div className={"header__mobile-toggle " + mobileToggleClass} onClick={() => this.props.toggleMobileMenu()}>
                    <span className="navigation__icon" />
                </div>
                <div className="header__icons">
                    <HeaderDropdown icon="fa fa-envelope" count={4} title="Messages" items={mailboxItems}/>
                    <HeaderDropdown icon="fa fa-envelope" count={4} title="Notifications" items={mailboxItems} />
                    <ColorPicker handleActiveColorChange={this.props.handleActiveColorChange}/>
                </div>
            </div>
        )
    }
};

export default Header;
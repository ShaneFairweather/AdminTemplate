import React from 'react';
import { FormGroup, Form, Input, Label } from 'reactstrap';

const Header = (props) => {
    const renderSideMenuToggle = () => props.sideMenuExpanded ? <i className="fa fa-outdent"/> : <i className="fa fa-indent"/>;

    return (
        <div className="header">
            <div className="header__main">
                <div className="header__main__inner">
                    <div className="header__brand">SK Admin</div>
                    <div className="header__toggle" onClick={() => props.toggleSideMenu()}>
                        {/*<i className="fa fa-outdent"/>*/}
                        {renderSideMenuToggle()}
                    </div>
                </div>
                <div className="header__searchbar">
                    <FormGroup>
                        <Label for="searchbar"><i className="fa fa-search" /></Label>
                        <Input placeholder="Search for people, files, documents..." id="searchbar"/>
                    </FormGroup>
                    {/*<FormGroup>*/}
                        {/*<Label for="searchbar"><i className="fa fa-paperclip" /></Label>*/}
                        {/*<Input className="mailbox-compose__input form-to" type="search" name="searchbar" id="searchbar" />*/}
                    {/*</FormGroup>*/}
                </div>
            </div>
            <div className="header__icons">
                <div className="header__icon">
                    <i className="fa fa-envelope" />
                    <div className="header__icon__count">4</div>
                </div>
                <div className="header__icon">
                    <i className="fa fa-bell" />
                    <div className="header__icon__count">4</div>
                </div>
                <div className="header__icon">
                    <i className="fa fa-tint" />
                </div>
            </div>
        </div>
    )
};

export default Header;
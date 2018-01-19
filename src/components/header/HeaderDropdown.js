import React, { Component } from 'react';
import HeaderDropdownItem from './HeaderDropdownItem';
import { Collapse } from 'react-collapse';
import onClickOutside from "react-onclickoutside";

class HeaderDropdown extends Component {
    state = {
        isOpen: false
    };

    toggleDropdown() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderHeader() {
        if (this.props.title) {
            return <div className="header__dropdown__header">{this.props.title}</div>
        }
    };

    renderDropdownItems() {
        return this.props.items.slice(0, 4).map((email) => {
            return <HeaderDropdownItem key={email.id} email={email}/>
        })
    };

    handleClickOutside = () => {
        this.setState({ isOpen: false })
    };

    render() {
        return (
            <div className="header__icon" onClick={() => this.toggleDropdown()}>
                <i className={this.props.icon}/>
                <div className="header__icon__count">{this.props.count}</div>
                <div className="header__dropdown">
                    <Collapse isOpened={this.state.isOpen}>
                    {this.renderHeader()}
                    <div className="header__dropdown__body">
                        {this.renderDropdownItems()}
                    </div>
                    </Collapse>
                </div>
            </div>
        )
    }
};

export default onClickOutside(HeaderDropdown);
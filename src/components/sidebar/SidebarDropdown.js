import React, { Component } from 'react';
import SidebarDropdownItem from './SidebarDropdownItem';
import { Collapse } from 'react-collapse';

class SidebarDropdown extends Component {
    state = {
        isOpen: false
    };

    toggleDropdownOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    renderDropdownItems() {
        if(this.props.mobileSelect) {
            return this.props.listItems.map((item) => {
                return <SidebarDropdownItem mobileSelect={this.props.mobileSelect} key={this.props.name + this.props.listItems.indexOf(item)} name={item.name}
                                            link={item.link}/>
            })
        } else {
            return this.props.listItems.map((item) => {
                return <SidebarDropdownItem key={this.props.name + this.props.listItems.indexOf(item)} name={item.name}
                                            link={item.link}/>
            })
        }
    };

    render() {
        const showDropdown = this.state.isOpen ? "open" : "";
        return (
            <div>
                <li onClick={() => this.toggleDropdownOpen()} className="sidebar__item sidebar__item--dropdown">
                    <i className={this.props.icon} aria-hidden="true"/>
                    {this.props.name}
                </li>
                <ul className={"sidebar__dropdown " + showDropdown}>
                    <Collapse isOpened={this.state.isOpen}>
                        {this.renderDropdownItems()}
                    </Collapse>
                </ul>
            </div>
        )
    }
};

export default SidebarDropdown;
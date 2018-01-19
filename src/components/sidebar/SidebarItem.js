import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
    if(props.mobileSelect) {
        return (
            <li className="sidebar__item" onClick={() => props.mobileSelect()}>
                <Link to={props.link}>
                    <i className={props.icon} aria-hidden="true"/>
                    {props.name}
                </Link>
            </li>
        )
    } else {
        return (
            <li className="sidebar__item">
                <Link to={props.link}>
                    <i className={props.icon} aria-hidden="true"/>
                    {props.name}
                </Link>
            </li>
        )
    }
};

export default SidebarItem;
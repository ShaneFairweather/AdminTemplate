import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
    return (
        <li className="sidebar__item">
            <Link to={props.link}>
                <i className={props.icon} aria-hidden="true" />
                {props.name}
            </Link>
        </li>
    )
};

export default SidebarItem;
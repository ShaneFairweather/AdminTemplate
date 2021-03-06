import React from 'react';
import { Link } from 'react-router-dom';

const SidebarDropdownItem = (props) => {
    return (
        <li className="sidebar__dropdown__item" onClick={() => props.mobileSelect()}>
            <Link to={props.link}>
                {props.name}
            </Link>
        </li>
    )
};

export default SidebarDropdownItem;
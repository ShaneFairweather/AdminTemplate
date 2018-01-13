import React from 'react';
import MainUser from '../assets/images/avatars/user-19.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="user">
                <div className="user__avatar">
                    <img src={MainUser} alt="main user" />
                </div>
                <div className="user__info">
                    <div className="user__name">Coby Fleener</div>
                    <div className="user__email">cfleener13@gmail.com</div>
                </div>
            </div>
            <ul className="sidebar__list">
                <li className="sidebar__item"><Link to="/"><i className="fa fa-tachometer" aria-hidden="true" />
                    Dashboard</Link></li>
                <li className="sidebar__item sidebar__item--dropdown"><i className="fa fa-envelope" aria-hidden="true" />Mailbox</li>
                <li className="sidebar__item"><Link to="/gallery"><i className="fa fa-picture-o" aria-hidden="true" />Gallery</Link></li>
                <li className="sidebar__item sidebar__item--dropdown"><i className="fa fa-list-alt" aria-hidden="true" />Blog</li>
                <li className="sidebar__item"><Link to="/chat"><i className="fa fa-comments" aria-hidden="true" />Chat</Link></li>
                <li className="sidebar__item sidebar__item--dropdown"><i className="fa fa-cog" aria-hidden="true" />Components</li>
                <li className="sidebar__item sidebar__item--dropdown"><i className="fa fa-bar-chart" aria-hidden="true" />Charts</li>
                <li className="sidebar__item"><Link to="/todo-list"><i className="fa fa-check-square-o" aria-hidden="true" />Todo List</Link></li>
                <li className="sidebar__item sidebar__item--dropdown"><i className="fa fa-file" aria-hidden="true" />Pages</li>
                {/*<li className="sidebar__item">Panels</li>*/}
                {/*<li className="sidebar__item">Charts</li>*/}
                {/*<li className="sidebar__item">Timeline</li>*/}
                {/*<li className="sidebar__item">Codemirror</li>*/}
                {/*<li className="sidebar__item">Maps</li>*/}
                {/*<li className="sidebar__item">Editor</li>*/}
                {/*<li className="sidebar__item">Forms</li>*/}
                {/*<li className="sidebar__item">Tabels</li>*/}
                {/*<li className="sidebar__item">Grid</li>*/}
            </ul>
        </div>
    )
};

export default Sidebar;
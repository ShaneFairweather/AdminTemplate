import React from 'react';
import MainUser from '../../assets/images/avatars/user-19.png';
import SidebarItem from './SidebarItem';
import SidebarDropdown from './SidebarDropdown';

const Sidebar = (props) => {
    if(props.sideMenuExpanded) {
        return (
            <div className="sidebar">
                <div className="user">
                    <div className="user__avatar">
                        <img src={MainUser} alt="main user"/>
                    </div>
                    <div className="user__info">
                        <div className="user__name">Coby Fleener</div>
                        <div className="user__email">cfleener13@gmail.com</div>
                    </div>
                </div>
                <ul className="sidebar__list">
                    <SidebarItem name="Dashboard" link="/" icon="fa fa-tachometer"/>
                    <SidebarDropdown
                        name="Mailbox"
                        icon="fa fa-envelope"
                        listItems={[
                            {name: "Inbox", link: "/mailbox/inbox"},
                            {name: "Mail", link: "/mailbox/mail/111"},
                            {name: "Compose", link: "/mailbox/compose"}
                        ]}/>
                    <SidebarItem name="Gallery" link="/gallery" icon="fa fa-picture-o"/>
                    <SidebarItem name="Blog" link="/blog" icon="fa fa-list-alt"/>
                    <SidebarItem name="Chat" link="/chat" icon="fa fa-comments"/>
                    <SidebarItem name="Calendar" link="/calendar" icon="fa fa-calendar"/>
                    <SidebarItem name="Charts" link="/charts" icon="fa fa-bar-chart"/>
                    <SidebarItem name="Todo List" link="/todo-list" icon="fa fa-check-square-o"/>
                    <SidebarDropdown
                        name="Pages"
                        icon="fa fa-file"
                        listItems={[
                            {name: "Pricing Tables", link: "/pricing-tables"}
                        ]}/>
                </ul>
            </div>
        )
    } else {
        return <div></div>;
    }
};

export default Sidebar;
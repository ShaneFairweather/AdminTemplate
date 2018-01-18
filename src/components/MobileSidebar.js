import React from 'react';
import MainUser from '../assets/images/avatars/user-19.png';
import SidebarItem from './SidebarItem';
import SidebarDropdown from './SidebarDropdown';

const MobileSidebar = (props) => {
    // if(props.mobileMenuExpanded) {
    const mobileMenuClass = props.mobileMenuExpanded ? "mobile-active" : "";
        return (
            <div className={"sidebar--mobile " + mobileMenuClass}>
                <ul className="sidebar--mobile__list">
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

                    {/*<li className="sidebar--mobile__item sidebar__item--dropdown"><i className="fa fa-cog" aria-hidden="true" />Components</li>*/}
                    <SidebarDropdown
                        name="Pages"
                        icon="fa fa-file"
                        listItems={[
                            {name: "Pricing Tables", link: "/pricing-tables"}
                        ]}/>
                </ul>
            </div>
        )
    //}
    // else {
    //     return <div></div>;
    // }
};

export default MobileSidebar;
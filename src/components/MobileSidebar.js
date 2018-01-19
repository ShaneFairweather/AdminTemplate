import React from 'react';
import SidebarItem from './sidebar/SidebarItem';
import SidebarDropdown from './sidebar/SidebarDropdown';

const MobileSidebar = (props) => {
    const mobileMenuClass = props.mobileMenuExpanded ? "mobile-active" : "";
    return (
        <div className={"sidebar--mobile " + mobileMenuClass}>
            <ul className="sidebar--mobile__list">
                <SidebarItem name="Dashboard" link="/" icon="fa fa-tachometer" mobileSelect={props.handleMobileItemSelect} />
                <SidebarDropdown
                    name="Mailbox"
                    icon="fa fa-envelope"
                    mobileSelect={props.handleMobileItemSelect}
                    listItems={[
                        {name: "Inbox", link: "/mailbox/inbox"},
                        {name: "Mail", link: "/mailbox/mail/111"},
                        {name: "Compose", link: "/mailbox/compose"}
                    ]}/>
                <SidebarItem name="Gallery" link="/gallery" icon="fa fa-picture-o" mobileSelect={props.handleMobileItemSelect}/>
                <SidebarItem name="Blog" link="/blog" icon="fa fa-list-alt" mobileSelect={props.handleMobileItemSelect}/>
                <SidebarItem name="Chat" link="/chat" icon="fa fa-comments" mobileSelect={props.handleMobileItemSelect}/>
                <SidebarItem name="Calendar" link="/calendar" icon="fa fa-calendar" mobileSelect={props.handleMobileItemSelect}/>
                <SidebarItem name="Charts" link="/charts" icon="fa fa-bar-chart" mobileSelect={props.handleMobileItemSelect}/>
                <SidebarItem name="Todo List" link="/todo-list" icon="fa fa-check-square-o" mobileSelect={props.handleMobileItemSelect}/>
                <SidebarDropdown
                    name="Pages"
                    icon="fa fa-file"
                    mobileSelect={props.handleMobileItemSelect}
                    listItems={[
                        {name: "Pricing Tables", link: "/pricing-tables"}
                    ]}/>
            </ul>
        </div>
    )
};

export default MobileSidebar;
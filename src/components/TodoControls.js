import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

class TodoControls extends Component {
    // constructor(props) {
    //     super(props);
    // };

    handleClickOutside = evt => {
        this.props.hideControlMenu();
    };

    render() {
        const showControlsMenu = this.props.controlMenuVisible ? "visible" : "";
        return (
            <div className="todo-list__controls" onClick={() => this.props.toggleControlMenu()}>
                <i className="fa fa-ellipsis-v" aria-hidden="true"/>
                <div className={"todo-list__menu " + showControlsMenu}>
                    <div onClick={() => this.props.toggleTodoComplete()}>Mark as completed</div>
                    <div onClick={() => this.props.deleteTodoItem(this.props.index)}>Delete</div>
                </div>
            </div>

        )
    }
};

export default onClickOutside(TodoControls);
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { Collapse } from 'react-collapse';

class TodoControls extends Component {
    handleClickOutside = evt => {
        this.props.hideControlMenu();
    };

    render() {
        return (
            <div className="todo-list__controls" onClick={() => this.props.toggleControlMenu()}>
                <i className="fa fa-ellipsis-v" aria-hidden="true"/>
                <div className="todo-list__menu ">
                    <div className="todo-list__menu__inner">
                        <Collapse isOpened={this.props.controlMenuVisible}>
                            <div className="todo-list__menu__item" onClick={() => this.props.toggleTodoComplete()}>Mark as completed</div>
                            <div className="todo-list__menu__item" onClick={() => this.props.deleteTodoItem(this.props.index)}>Delete</div>
                        </Collapse>
                    </div>
                </div>
            </div>

        )
    }
};

export default onClickOutside(TodoControls);
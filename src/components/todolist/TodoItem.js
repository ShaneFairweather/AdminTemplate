import React, { Component } from 'react';
import TodoControls from './TodoControls';

class TodoItem extends Component {
    state = {
        isComplete: false,
        controlMenuVisible: false
    };

    toggleTodoComplete = () => {
        this.setState({
            isComplete: !this.state.isComplete
        })
    };

    toggleControlMenu = () => {
        this.setState({
            controlMenuVisible: !this.state.controlMenuVisible
        })
    };

    hideControlMenu = () => {
        this.setState({
            controlMenuVisible: false
        })
    };


    render() {
        const {task, time} = this.props;
        const addCompletedText = this.state.isComplete ? "completed--text" : "";
        const addCompletedCheckbox = this.state.isComplete ? "completed--checkbox" : "";
        return (
            <div className="todo-list__item">
                <div className="todo-list__content" onClick={() => this.toggleTodoComplete()}>
                    <div className={"todo-list__checkbox " + addCompletedCheckbox}>
                        <i className="fa fa-check-circle" aria-hidden="true" />
                    </div>
                    <div className={"todo-list__text " + addCompletedText}>
                        <div className="todo-list__task">{task}</div>
                        <div className="todo-list__time">{time}</div>
                    </div>
                </div>
                <TodoControls
                    controlMenuVisible={this.state.controlMenuVisible}
                    toggleControlMenu={this.toggleControlMenu}
                    hideControlMenu={this.hideControlMenu}
                    deleteTodoItem={this.props.deleteTodoItem}
                    toggleTodoComplete={this.toggleTodoComplete}
                    index={this.props.index}
                />
            </div>
        )
    }
};

export default TodoItem;
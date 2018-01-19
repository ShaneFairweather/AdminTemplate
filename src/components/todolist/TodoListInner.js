import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoListInner extends Component {
    state = {
        todoItems: this.props.items
    };

    renderTodoItems() {
        return (
            this.props.items.map((item) => {
                return <TodoItem
                    index={this.state.todoItems.indexOf(item)}
                    deleteTodoItem={this.deleteTodoItem}
                    task={item.task}
                    time={item.time}
                    key={this.state.todoItems.indexOf(item)}
                />
            })
        )
    }

    deleteTodoItem = (index) => {
        this.props.items.splice(index, 1);
        this.setState({
            todoItems: this.props.items
        })
    };

    addTodoItem = (task, time) => {
        this.props.items.push({task, time});
        this.setState({
            todoItems: this.props.items
        })
    };

    render() {
        return (
            <div className="todo-list card">
                <div className="todo-list__header card__header">
                    <div className="todo-list__total">{this.state.todoItems.length} Total Items</div>
                    <div className="card__icons todo-list__icons">
                        <i className="fa fa-sort" />
                        <i className="fa fa-question-circle-o" />
                        <i className="fa fa-cog" />
                    </div>
                </div>
                {this.renderTodoItems()}
            </div>
        )
    }
}

export default TodoListInner;
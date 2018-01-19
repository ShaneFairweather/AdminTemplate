import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
import TodoListInner from './TodoListInner';
import todoItems from '../../data/todoData';

class TodoList extends Component {
    state = {
        todoItems: todoItems
    };

    renderTodoItems() {
        return (
            todoItems.map((item) => {
                return <TodoItem
                    index={todoItems.indexOf(item)}
                    deleteTodoItem={this.deleteTodoItem}
                    task={item.task}
                    time={item.time}
                    key={todoItems.indexOf(item)}
                />
            })
        )
    }

    deleteTodoItem = (index) => {
        todoItems.splice(index, 1);
        this.setState({
            todoItems: todoItems
        })
    };

    addTodoItem = (task, time) => {
        todoItems.push({task, time});
        this.setState({
            todoItems: todoItems
        })
    };

    render() {
        return (
            <Container fluid>
                <div className="section-header">Todo List</div>
                <Row>
                    <Col xs="12" sm="12" md="7">
                        <TodoListInner items={todoItems}/>
                    </Col>
                    <TodoAdd addTodoItem={this.addTodoItem} />
                </Row>
            </Container>
        )
    }
}

export default TodoList;
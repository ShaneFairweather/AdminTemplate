import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';

const todoItems = [
    {
        task: 'Neque porro quisquam est, qui dolorem ipsum',
        time: 'Today at 9:30 AM'
    },
    {
        task: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        time: 'Wednesday at 12:30 AM'
    },
    {
        task: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
        time: '12/1 at 12:30 AM'
    },
    {
        task: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam',
        time: 'Tomorrow at 8:30 AM'
    },
    {
        task: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus ',
        time: 'Friday at 4:00 PM'
    },
    {
        task: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque',
        time: 'Today at 3:30 PM'
    },
    {
        task: 'Itaque earum rerum hic tenetur a sapiente delectus',
        time: '11/23 at 9:30 AM'
    }
];

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
                        <div className="todo-list card">
                            <div className="todo-list__header card__header">
                                <div className="todo-list__total">{todoItems.length} Total Items</div>
                                <div className="card__icons todo-list__icons">
                                    <i className="fa fa-sort" />
                                    <i className="fa fa-question-circle-o" />
                                    <i className="fa fa-cog" />
                                </div>
                            </div>
                            {this.renderTodoItems()}
                        </div>
                    </Col>
                    <TodoAdd addTodoItem={this.addTodoItem} />
                </Row>
            </Container>
        )
    }
}

export default TodoList;
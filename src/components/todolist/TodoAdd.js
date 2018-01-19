import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import { Col, FormGroup, Input } from 'reactstrap';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

class TodoAdd extends Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment(),
            taskValue: "",
            selectedTime: "12:00 am"
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
    };

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    };

    onTimeChange(value) {
        console.log(value && value.format(format));
        this.setState({selectedTime: value && value.format(format)})
    };

    handleSubmit = () => {
        // console.log(this.state.startDate.format("MM/DD"));
        // console.log(this.state.taskValue);
        // console.log(this.state.selectedTime);
        if (this.state.taskValue !== "") {
            this.props.addTodoItem(this.state.taskValue, `${this.state.startDate.format("MM/DD")} at ${this.state.selectedTime.toUpperCase()}`);
        this.setState({taskValue: ""});
        }
    };

    renderSubmitButton() {
        if(this.state.taskValue === "") {
            return <button onClick={() => this.handleSubmit()} className="todo-list__submit btn btn-main disabled">Submit</button>
        } else {
            return <button onClick={() => this.handleSubmit()} className="todo-list__submit btn btn-main">Submit</button>
        }
    }

    render() {
        const submitButtonClass = this.props.taskValue === "" ? "disabled" : "";
        console.log(submitButtonClass);
        return (
            <Col xs="12" sm="12" md="5">
                <div className="todo-list__add card">
                    <div className="todo-list__add__header">Add Todo</div>
                    <div className="todo-list_card">
                        <FormGroup>
                            <Input className="todo-list__textarea" type="text" name="text" id="exampleText" value={this.state.taskValue} onChange={(e) => this.setState({taskValue: e.target.value})}/>
                        </FormGroup>
                        <div className="todo-list__time-select">
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleDateChange}
                            />
                            &nbsp; At &nbsp;
                            <TimePicker
                                showSecond={false}
                                defaultValue={now}
                                className="xxx"
                                onChange={this.onTimeChange}
                                format={format}
                                use12Hours
                            />
                        </div>
                        {this.renderSubmitButton()}
                    </div>
                </div>
            </Col>
        )
    }
};

export default TodoAdd;
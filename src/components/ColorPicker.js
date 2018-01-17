import React, { Component } from 'react';

class ColorPicker extends Component {
    state = {
        purple: "purple",
        aqua: "aqua",
        peach: "peach",
        gray: "gray",
    };

    testNameCheck = (e) => {
        // console.log(e.target.id);
        this.props.handleActiveColorChange(e.target.id);
    };

    render() {
        return (
            <div className="color-picker">
                <div className="color-picker__option color-picker__option--purple"
                        onClick={(e) => this.testNameCheck(e)}
                        id="purple"
                />
                <div className="color-picker__option color-picker__option--aqua"
                     onClick={(e) => this.testNameCheck(e)}
                     id="aqua"
                />
                <div className="color-picker__option color-picker__option--peach"
                     onClick={(e) => this.testNameCheck(e)}
                     id="peach"
                />
                <div className="color-picker__option color-picker__option--gray"
                     onClick={(e) => this.testNameCheck(e)}
                     id="gray"
                />
                <div className="color-picker__option color-picker__option--blue"
                     onClick={(e) => this.testNameCheck(e)}
                     id="blue"
                />
            </div>
        )
    }
};

export default ColorPicker;

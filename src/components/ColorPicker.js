import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import onClickOutside from "react-onclickoutside";

class ColorPicker extends Component {
    state = {
        purple: "purple",
        aqua: "aqua",
        peach: "peach",
        gray: "gray",
        colorPickerVisible: false,
    };

    toggleColorPicker = () => {
        this.setState({
            colorPickerVisible: !this.state.colorPickerVisible
        }, console.log(this.state.colorPickerVisible));
    };

    handleClickOutside = () => {
        this.setState({ colorPickerVisible: false });
    };

    render() {
        // const colorPickerVisible = this.props.isVisible ? "visible" : "";
        return (
            <div>
                <div className="header__icon" onClick={() => this.toggleColorPicker()}>
                    <i className="fa fa-paint-brush"/>
                </div>
                <div className="color-picker">
                    <Collapse isOpened={this.state.colorPickerVisible} fixedHeight={605}>
                        <div className="color-picker__option color-picker__option--purple"
                                onClick={(e) => this.props.handleActiveColorChange(e.target.id)}
                                id="purple"
                        />
                        <div className="color-picker__option color-picker__option--aqua"
                             onClick={(e) => this.props.handleActiveColorChange(e.target.id)}
                             id="aqua"
                        />
                        <div className="color-picker__option color-picker__option--peach"
                             onClick={(e) => this.props.handleActiveColorChange(e.target.id)}
                             id="peach"
                        />
                        <div className="color-picker__option color-picker__option--gray"
                             onClick={(e) => this.props.handleActiveColorChange(e.target.id)}
                             id="gray"
                        />
                        <div className="color-picker__option color-picker__option--blue"
                             onClick={(e) => this.props.handleActiveColorChange(e.target.id)}
                             id="blue"
                        />
                        <div className="color-picker__option color-picker__option--celestial"
                             onClick={(e) => this.props.handleActiveColorChange(e.target.id)}
                             id="celestial"
                        />
                        <div className="color-picker__option color-picker__option--royal"
                             onClick={(e) => this.props.handleActiveColorChange(e.target.id)}
                             id="royal"
                        />
                    </Collapse>
                </div>
            </div>
        )
    }
};

export default onClickOutside(ColorPicker);

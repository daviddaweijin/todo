import React, { Component } from 'react';
export class TodoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { newItemText: "", warning: "" }
    }
    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value });
    }
    createNewTodo = () => {
        if (!this.state.newItemText) {
            this.setState({ warning: "please input something" });
        }
        this.props.callback(this.state.newItemText);
        this.setState({ newItemText: "" });
    }
    render = () =>
        <div className="my-1">
            <div className="warning text-center">{this.state.warning} fff</div>
            <input className="form-control" value={this.state.newItemText}
                onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1"
                onClick={this.createNewTodo}>Add</button>
        </div>
}
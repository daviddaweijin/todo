import React, { Component } from 'react';
export class VisibilityControl extends Component {

    aaa = (e) => {
        alert(this.props.callback);
        this.props.callback(e.target.checked);
    }
    render = () =>
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                checked={this.props.isChecked}
                onChange={this.aaa} />
            <label className="form-check-label">
                Show {this.props.description}
            </label>
        </div>
}
import React, { Component } from 'react';
import './MyFromBuilder.css';

export default class MyFormBuilder extends Component {
    render() {
        return (
            <div className="col-xs-12 main-block">
                <div className="col-xs-2 partition list-type-view">
                <ul class="list-group">
                    <li class="list-group-item">Text</li>
                    <li class="list-group-item">Select</li>
                    <li class="list-group-item">Radio Group</li>
                    <li class="list-group-item">Number</li>
                    <li class="list-group-item">Text Area</li>
                </ul>
                </div>
                <div className="col-xs-10 partition form-builder">
                    Form
                </div>
            </div>
        )
    }
}

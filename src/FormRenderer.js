import $ from "jquery";
import React, { Component, createRef } from 'react';
import ReactDOM from "react-dom";
import 'jquery-ui-sortable';

window.jQuery = $;
window.$ = $;

require("formBuilder");
require('formBuilder/dist/form-render.min.js')

export default class FormRenderer extends Component {
    fb = createRef();

    componentDidMount() {
        const formData = JSON.stringify(localStorage.getItem("formData"));
        var fbTemplate = document.getElementById('fb-template');
        $('.fb-render').formRender({
            dataType: 'xml',
            formData: fbTemplate.value,
            render: true
        });
    }

    render() {
        return (
            <div class="fb-render">
                <textarea id="fb-template"><form-template> <fields> <field name="select-1454177070204" label="Select" style="multiple" description="" required="false" className="form-control" type="select" > <option value="option-1">Option 1</option> <option value="option-2">Option 2</option> </field> <field name="rich-text-1454177067296" label="Text Area" description="" className="form-control" required="false" type="textarea" /> </fields> </form-template></textarea>
            </div>
        );
    }
}

ReactDOM.render(<FormRenderer />, document.getElementById("root"));
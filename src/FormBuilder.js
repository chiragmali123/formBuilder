import $ from "jquery";
import React, { Component, createRef } from "react";
import "./styles.css";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const defaultFields = [
  {
    type: "text",
    label: "formBuilder in React"
  },
  {
    type: "text",
    label: "This is a demonstration of formBuilder running in a React project."
  }
];

const disableFields = [
  'autocomplete',
  'file',
  'paragraph',
  'hidden',
  'button',
  'header',
  'number',
  'starRating'
];

const disabledAttrs = [
  'access',
  'className',
  'inline',
  'name',
  'max',
  'maxlength',
  'min',
  'multiple',
  'other',
  'rows',
  'step',
  'style',
  'subtype',
  'toggle',
];

const typeUserAttrs = {
  text: {
    display: {
      label: 'Display',
      value: true,
      type: 'checkbox',
    }
  },
  textarea: {
    display: {
      label: 'Display',
      value: true,
      type: 'checkbox',
    }
  },
  date: {
    display: {
      label: 'Display',
      value: true,
      type: 'checkbox',
    }
  },
  select: {
    display: {
      label: 'Display',
      value: true,
      type: 'checkbox',
    }
  },
  "checkbox-group": {
    display: {
      label: 'Display',
      value: true,
      type: 'checkbox',
    }
  },
  "radio-group": {
    display: {
      label: 'Display',
      value: true,
      type: 'checkbox',
    }
  }
}

const disabledFieldButtons = {
  text: ['remove'],
  textarea: ['remove'],
  select: ['remove'],
  date: ['remove'],
  "checkbox-group": ['remove'],
  "radio-group": ['remove'],
}

export default class FormBuilder extends Component {
  fb = createRef();

  onSave = (e, formData) => {
    console.log(formData);
    localStorage.setItem("formData", formData);
  }

  onAddField = (fieldId, fieldData) => {
    const customFieldData = fieldData;
    // default display is true.
    customFieldData.display = {
      label: 'Display',
      value: true,
      type: 'checkbox',
    }
    return customFieldData;
  }

  componentDidMount() {
    var options = {
      disableFields,
      defaultFields,
      disabledAttrs,
      editOnAdd: false,
      scrollToFieldOnAdd: true,
      controlPosition: 'left',
      disabledActionButtons: ['data', 'clear'],
      typeUserAttrs,
      disabledFieldButtons,
      onAddField: this.onAddField,
      onSave: this.onSave,
    };
    $(this.fb.current).formBuilder(options);
  }

  render() {
    return <div id="fb-editor" ref={this.fb} />;
  }
}
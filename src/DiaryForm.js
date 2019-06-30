import React from "react";
import "./DiaryForm.css";

class DiaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }
  render() {
    return (
      <form className="DiaryForm">
        <label>
          Title
          <input type="text" />
        </label>
        <label>
          Description
          <textarea cols="50" rows="15" />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default DiaryForm;

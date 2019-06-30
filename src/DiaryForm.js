import React from "react";
import "./DiaryForm.css";
import DiaryEntries from "./DiaryEntries";

class DiaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      descriptionValue: "",
      diaryEntries: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
    // console.log(this.state.title);
    // console.log(this.state.description);
  }

  formSubmitHandler(event) {
    event.preventDefault();
    const date = new Date().toLocaleDateString();
    const newEntry = [this.state.titleValue, this.state.descriptionValue, date];

    this.setState({
      diaryEntries: [...this.state.diaryEntries, newEntry]
    });

    // const entries = this.state.diaryEntries;
    // entries.push([this.state.titleValue, this.state.descriptionValue, date]);

    // console.log("Title: " + this.state.title);
    // console.log("Description: " + this.state.description);

    // for (let entries in this.state.diaryEntries) {
    //   console.log(entries)
    // }
  }

  render() {
    return (
      <div>
        <form className="DiaryForm">
          <label>
            Title
            <input
              type="text"
              name="titleValue"
              value={this.state.title}
              onChange={this.onChangeHandler}
            />
          </label>
          <label>
            Description
            <textarea
              cols="50"
              rows="15"
              name="descriptionValue"
              value={this.state.description}
              onChange={this.onChangeHandler}
            />
          </label>
          <button onClick={this.formSubmitHandler}>Submit</button>
        </form>
        <DiaryEntries
          title={this.state.title}
          description={this.state.description}
          date={this.state.date}
        />
      </div>
    );
  }
}

export default DiaryForm;

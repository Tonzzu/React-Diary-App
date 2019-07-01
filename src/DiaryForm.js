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
    this.deleteDiaryEntry = this.deleteDiaryEntry.bind(this);
  }

  onChangeHandler(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  formSubmitHandler(event) {
    event.preventDefault();
    const diaryEntries = [...this.state.diaryEntries];

    const date = new Date().toLocaleDateString();
    const id = 1 + Math.random();

    const newEntry = {
      title: this.state.titleValue,
      description: this.state.descriptionValue,
      date: date,
      id: id
    };

    diaryEntries.unshift(newEntry);

    // this.setState({
    //   diaryEntries: [newEntry, ...this.state.diaryEntries]
    // });

    this.setState({
      titleValue: "",
      descriptionValue: "",
      diaryEntries
    });
  }

  deleteDiaryEntry(id) {
    const diaryEntries = [...this.state.diaryEntries];
    const updatedDiaryEntries = diaryEntries.filter(entry => entry.id !== id);
    this.setState({
      diaryEntries: updatedDiaryEntries
    });
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
              value={this.state.titleValue}
              onChange={this.onChangeHandler}
            />
          </label>
          <label>
            Description
            <textarea
              cols="50"
              rows="15"
              name="descriptionValue"
              value={this.state.descriptionValue}
              onChange={this.onChangeHandler}
            />
          </label>
          <button
            onClick={this.formSubmitHandler}
            disabled={
              !this.state.titleValue.length ||
              !this.state.descriptionValue.length
            }
          >
            Submit
          </button>
        </form>
        <DiaryEntries
          entries={this.state.diaryEntries}
          title={this.state.diaryEntries.title}
          description={this.state.diaryEntries.description}
          date={this.state.diaryEntries.date}
          id={this.state.diaryEntries.id}
          deleteDiaryEntry={this.deleteDiaryEntry}
        />
      </div>
    );
  }
}

export default DiaryForm;

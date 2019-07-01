import React from "react";
import "./DiaryForm.css";
import DiaryEntries from "./DiaryEntries";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import { TextField } from "@material-ui/core";

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
      <Container maxWidth="md" className="DiaryForm">
        <form className="DiaryForm">
          {/* <label> */}
          {/* Title */}
          <TextField
            className="form-title"
            // required
            fullWidth
            margin="dense"
            label="Title"
            variant="outlined"
            // type="text"
            name="titleValue"
            value={this.state.titleValue}
            onChange={this.onChangeHandler}
          />
          {/* </label> */}
          {/* <label> */}
          {/* Description */}
          <TextField
            className="form-description"
            multiline
            rows="10"
            fullWidth
            margin="dense"
            // cols="30"
            label="Description"
            variant="outlined"
            // cols="50"
            // rows="15"
            name="descriptionValue"
            value={this.state.descriptionValue}
            onChange={this.onChangeHandler}
          />
          {/* </label> */}
          <Tooltip title="Add new entry">
            <Button
              style={{
                backgroundColor: "#06c26a",
                color: '#fff',
                width: '80px',
                fontWeight: 'bold'
              }}
              className="add-btn"
              variant="contained"
              // color=""
              onClick={this.formSubmitHandler}
              disabled={
                !this.state.titleValue.length ||
                !this.state.descriptionValue.length
              }
            >
              Add
            </Button>
          </Tooltip>
        </form>
        <DiaryEntries
          entries={this.state.diaryEntries}
          title={this.state.diaryEntries.title}
          description={this.state.diaryEntries.description}
          date={this.state.diaryEntries.date}
          id={this.state.diaryEntries.id}
          deleteDiaryEntry={this.deleteDiaryEntry}
        />
      </Container>
    );
  }
}

export default DiaryForm;

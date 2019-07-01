import React from "react";
import "./DiaryEntries.css";

class DiaryEntries extends React.Component {
  render() {
    return (
      <div>
        <ul style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {this.props.entries.map(entry => {
            return (
              <li className="DiaryEntries" key={entry.id}>
                <h2 className="entry-header">{entry.title}</h2>
                <p className="entry-description">{entry.description}</p>
                <p className="entry-date">Date: {entry.date}</p>
                <button
                  onClick={() => this.props.deleteDiaryEntry(entry.id)}
                  className="entry-delete btn"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DiaryEntries;

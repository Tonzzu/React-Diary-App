import React from "react";
import "./DiaryEntries.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";

function DiaryEntries(props) {
  return (
    <div className="DiaryEntries">
      <ul>
        {props.entries.map(entry => {
          return (
            <ExpansionPanel key={entry.id}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <h2 className="entry-header">{entry.title}</h2>
              </ExpansionPanelSummary>
              {/* <ExpansionPanelDetails> */}
                <p className="entry-description">{entry.description}</p>
                <p className="entry-date">Date: {entry.date}</p>
              {/* </ExpansionPanelDetails> */}
              <Tooltip title="Delete this entry">
                <Button
                              style={{
                backgroundColor: "#f71450",
                color: '#fff',
                width: '80px',
                fontWeight: 'bold'

              }}
                  variant="contained"
                  // color="secondary"
                  onClick={() => props.deleteDiaryEntry(entry.id)}
                  className="entry-delete btn"
                >
                  Delete
                  {/* <DeleteIcon /> */}
                </Button>
              </Tooltip>
            </ExpansionPanel>
          );
        })}
      </ul>
    </div>
  );
}

export default DiaryEntries;

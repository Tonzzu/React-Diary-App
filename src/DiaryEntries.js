import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Tooltip,
  Button
} from "@material-ui/core";

function DiaryEntries(props) {
  return (
    <div style={{ margin: "20px 0" }}>
      <ul>
        {props.entries.map(entry => {
          return (
            <ExpansionPanel key={entry.id} style={{margin: '5px 0'}}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <h2 style={{ margin: "0 25px" }}>{entry.title}</h2>
              </ExpansionPanelSummary>
              <p style={{ textAlign: "left", margin: "10px 50px" }}>
                {entry.description}
              </p>
              <p style={{ margin: "10px", fontSize: "14px" }}>{entry.date}</p>
              <Tooltip title="Delete this entry">
                <Button
                  style={{
                    backgroundColor: "#f71450",
                    color: "#fff",
                    width: "80px",
                    fontWeight: "bold",
                    margin: "20px"
                  }}
                  variant="contained"
                  // color="secondary"
                  onClick={() => props.deleteDiaryEntry(entry.id)}
                >
                  Delete
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

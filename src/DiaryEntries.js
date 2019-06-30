import React from "react";
import "./DiaryEntries.css";

function DiaryEntries(props) {
  return (
    <div>
      <article className="DiaryEntries">
        <h2>Title: Hello!</h2>
        <p>Description: lklklklkkkkkkkkkkk wolololllllllllllloooooooo</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </article>
    </div>
  );
}

export default DiaryEntries; 

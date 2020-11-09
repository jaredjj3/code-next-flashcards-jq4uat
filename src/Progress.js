import React from "react";

export const Progress = (props) => {
  return (
    <div class="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${props.width}%` }}
      />
    </div>
  );
};

import React from "react";

export const Progress = props => {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${props.fraction * 100}%` }}
      />
    </div>
  );
};

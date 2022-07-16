import React from 'react';

function BasicOutputContainer({props}) {
    return (
        <div className="emojiContainer">
            <span className="emojis">
              😁<p className="nature">Positive</p>
              <p className="percentage">{props.positive}%</p>
            </span>
            <span className="emojis">
              😐<p className="nature ">Neutral</p>
              <p className="percentage">{props.neutral}%</p>
            </span>
            <span className="emojis">
              😡<p className="nature">Negative</p>
              <p className="percentage">{props.negative}%</p>
            </span>
          </div>
    );
}

export default BasicOutputContainer;
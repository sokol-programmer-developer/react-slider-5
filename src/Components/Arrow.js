
import React from "react";
import "./Slider.css";


 const Arrow = ({ left_arrow, right_arrow }) => {
  return (
      <div className="arrows">
        <button className="arrow_left" onClick={left_arrow}>
            <h2 className="arrow_h2"> &#8592; </h2>
        </button>

          <button className="arrow_right" onClick={right_arrow}>
              <h2 className="arrow_h2"> &#8594;</h2>
          </button>
      </div>
  );
}

export default Arrow;

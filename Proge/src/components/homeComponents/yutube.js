import React from "react";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <i
        className={
          value >= 1
            ? "fa fa-map-marker"
            : value >= 0.5
            ? "fa fa-map-marker-half-alt"
            : "fa fa-map-marker"
        }
      ></i>
      <i
        className={
          value >= 2
            ? "fa fa-youtube"
            : value >= 1.5
            ? "fa fa-youtube-half-alt "
            : "fa fa-youtube"
        }
      ></i>
      <i
        className={
          value >= 3
            ? "fa fa-calendar-o"
            : value >= 2.5
            ? "fa fa-calendar-o-half-alt"
            : "fa fa-calendar-o"
        }
      ></i>


      <span>{text && text}</span>
    </div>
  );
};

export default yutube;
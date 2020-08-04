open Utils;

[@react.component]
let make = (~seconds) =>
  <div className="timer">
    <span className="timer-label"> {seconds |> formatTime |> s} </span>
  </div>
open Utils;

[@react.component]
let make = (~phase, ~value, ~onChange) =>
  <div className="editTime" >
    <span className="edit-time-label"> {s(phase)} </span>
    <input 
      type_="number" 
      value={string_of_int(value)}
      onChange={e => e->ReactEvent.Form.target##value |> onChange}
    />
  </div>;
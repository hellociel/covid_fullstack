import React from "react";

const List = (props) => (
  <div>
    <h4> DATA COMING BACK </h4>

    <ul>
      <li>
        name={props.name} confirmed={props.confirmed}
      </li>
    </ul>
  </div>
);

export default List;

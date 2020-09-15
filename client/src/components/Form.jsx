import React from "react";
import countries from "../csv/countriesarray.js";

const Form = (props) => (
  <div>
    <form onSubmit={props.onSubmit}>
      <label>Please select your country</label>
      <select name="selection" id="selection" onChange={props.onChange}>
        {countries.map((name) => (
          <option value={name}>{name}</option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  </div>
);

export default Form;

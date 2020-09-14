import React from "react";
import countries from "../csv/countriesarray.js";

const Form = (props) => (
  <div>
    <form>
      <label>Please select your country</label>
      <select name="selection" id="selection">
        {countries.map((name) => (
          <option value={name}>{name}</option>
        ))}
      </select>
    </form>
  </div>
);

export default Form;

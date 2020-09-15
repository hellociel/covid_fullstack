import React from "react";
import { countries, continents } from "../csv/countriesarray.js";
import {
  FormWrapper,
  Button,
  FormStyle,
  Label,
  Select,
  OptionVal,
} from "../styledComponents/AppStyle.jsx";
const Form = (props) => (
  <FormWrapper>
    <FormStyle onSubmit={props.onSubmit}>
      <Label>By Country</Label>
      <Select name="selection" id="selection" onChange={props.onChange}>
        <OptionVal selected="selected">All</OptionVal>
        {countries.map((name) => (
          <OptionVal value={name}>{name}</OptionVal>
        ))}
      </Select>
      <Button>Submit</Button>
    </FormStyle>
    <FormStyle onSubmit={props.onSubmit}>
      <Label>By Continents</Label>
      <Select name="selection" id="selection" onChange={props.onChange}>
        <OptionVal selected="selected">All</OptionVal>
        {continents.map((name) => (
          <OptionVal value={name}>{name}</OptionVal>
        ))}
      </Select>
      <Button>Submit</Button>
    </FormStyle>
    <FormStyle onSubmit={props.onSubmit}>
      <Label>By Top 30</Label>
      <Select name="selection" id="selection" onChange={props.onChange}>
        <OptionVal selected="selected">All</OptionVal>
        <OptionVal value="topcases"> Total Cases</OptionVal>
        <OptionVal value="topdeceased"> Total Deceased</OptionVal>
        <OptionVal value="toptested"> Total Tested</OptionVal>
      </Select>
      <Button>Submit</Button>
    </FormStyle>
  </FormWrapper>
);

export default Form;

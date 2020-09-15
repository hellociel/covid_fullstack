import React from "react";
import { countries, continents } from "../csv/countriesarray.js";
import {
  FormWrapper,
  Button,
  FormStyle,
  Label,
  Select,
  OptionVal,
  FormDiv,
} from "../styledComponents/AppStyle.jsx";
const Form = (props) => (
  <FormWrapper>
    <FormDiv>
      <FormStyle onSubmit={props.onCountrySubmit}>
        <Label>By Country</Label>
        <Select name="selection" id="countryName" onChange={props.onChange}>
          <OptionVal id="currCountry" selected="selected">
            All
          </OptionVal>
          {countries.map((name) => (
            <OptionVal id="currCountry" value={name}>
              {name}
            </OptionVal>
          ))}
        </Select>
        <Button>Submit</Button>
      </FormStyle>
    </FormDiv>
    <FormDiv>
      <FormStyle onSubmit={props.onContinentSubmit}>
        <Label>By Continents</Label>
        <Select name="selection" id="continentName" onChange={props.onChange}>
          <OptionVal unselected="selected" value="global">
            All
          </OptionVal>
          {continents.map((name) => (
            <OptionVal id="continent" value={name}>
              {name}
            </OptionVal>
          ))}
        </Select>
        <Button>Submit</Button>
      </FormStyle>
    </FormDiv>
    <FormDiv>
      <FormStyle onSubmit={props.onTop30Submit}>
        <Label>By Top 30</Label>
        <Select name="selection" id="top30Name" onChange={props.onChange}>
          <OptionVal selected="selected">All</OptionVal>
          <OptionVal id="top30" value="topcases">
            Total Cases
          </OptionVal>
          <OptionVal value="topdeceased"> Total Deceased</OptionVal>
          <OptionVal value="toptested"> Total Tested</OptionVal>
        </Select>
        <Button>Submit</Button>
      </FormStyle>
    </FormDiv>
  </FormWrapper>
);

export default Form;

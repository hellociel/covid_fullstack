import React from "react";
import styled from "styled-components";
const BaseWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 70%;
  margin-left: 15%;
  margin-right: 20%;
  background-color: white;
  font-family: Arial;
  text-align: center;
  color: #383838;
  align-items: center;
  justify-content: center;
`;
const MainTitle = styled.h1`
  padding: 30px;
  font-size: 2em;
  text-align: center;
  color: #383838;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #007872;
`;
const LastUpdated = styled.h3`
  font-size: 1em;
  text-align: right;
`;

// const Label = styled.label``;

const Button = styled.button`
  border-radius: 0.2em;
  border: 1px solid white;
  padding: 8px 10px;
  margin: 10px;
  width: 150px;
  color: #007872;
  font-weight: bold;
  background-color: white;
  &:hover {
    border: 1px solid #007872;
    padding: 8px 10px;
    background-color: #007872;
    color: white;
    font-weight: 800;
  }
`;

// Create a Wrapper component that'll render a <section> tag with some styles

// #94bcbc
const TableWrapper = styled.div`
  padding: 20px;
  background-color: white;
  border: 0.5px solid #cccccc;
  border-radius: 0.2em;

  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const Table = styled.table`
  position: relative;
  width: 100%;
`;

const Td = styled.td`
  padding: 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Th = styled.th`
  padding: 15px;
  border: none;
  border-bottom: 1px solid #ddd;
`;

const TotalTh = styled.th`
  padding: 15px;
  border: none;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const TotalTd = styled.td`
  text-align: center;
  font-weight: bold;
  padding: 15px;
  color: #f05f3b;
  border: none;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Tr = styled.tr`
  border: none;
  border-collapse: collapse;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const MainTr = styled.tr`
  border-bottom: 1px solid #ddd;
  background-color: #d3e2e3;
`;
const FormWrapper = styled.div`
  padding: 30px;
  background-color: #a5c5c3;
  display: flex;
  border-radius: 0.2em;
  justify-content: space-between;
`;
const FormStyle = styled.form`
  position: relative;
  width: 80%;
  text-align: center;
  align-items: center;
`;
const Label = styled.label`
  font-weight: bold;
  text-align: center;
  padding: 20px;
  margin: 20px;
  align-items: right;
  margin-left: 30px;
  width: 100px;
`;
const Select = styled.select`
  margin: 10px;
  padding: 20px;
  text-align: center;
  align-items: center;
  padding: 5px;
  border-radius: 0.2em;
  border: none;
  width: 200px;
`;
const OptionVal = styled.option`
  padding: 5px;
`;
export {
  BaseWrapper,
  FormWrapper,
  FormStyle,
  Label,
  Select,
  OptionVal,
  Title,
  Table,
  TableWrapper,
  Button,
  Th,
  Td,
  TotalTd,
  TotalTh,
  Tr,
  MainTr,
  MainTitle,
  LastUpdated,
};

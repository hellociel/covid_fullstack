import React from "react";
import {
  Table,
  Title,
  Th,
  Td,
  TotalTh,
  TotalTd,
  MainTr,
  LastUpdated,
  TableWrapper,
  Tr,
} from "../styledComponents/AppStyle.jsx";

const Top30Table = (props) => {
  let totalcases = props.totalcases;
  let totaldeaths = props.totaldeaths;
  let totaltested = props.totaltested;
  let cases = false;
  let deaths = false;
  let tested = false;

  let name = "";

  if (totalcases.length > 1) {
    name = "Top 30 Countries - Total Cases";
  } else if (totaldeaths.length > 1) {
    name = "Top 30 Countries - Total Deceased";
  } else if (totaltested.length > 1) {
    name = "Top 30 Countries - Total Tested";
  }

  name === "All" ? (name = "Gloabal") : name;
  return (
    <TableWrapper>
      <Title>{name}</Title>

      <Table>
        <MainTr>
          <TotalTh>Total Cases</TotalTh>
          <Th>New Cases</Th>
          <Th>Active Cases</Th>
          <Th>Critical Cases</Th>
          <Th>Recovered Cases</Th>
        </MainTr>
        <Tr>
          <TotalTd>{props.data.totalcases}</TotalTd>
          <Td>{props.data.newcases}</Td>
          <Td>{props.data.activecases}</Td>
          <Td>{props.data.criticalcases}</Td>
          <Td>{props.data.recoveredcases}</Td>
        </Tr>
        <MainTr>
          <TotalTh>Total Deceased</TotalTh>
          <Th>New Deceased</Th>
        </MainTr>
        <Tr>
          <TotalTd> {props.data.totaldeaths}</TotalTd>
          <Td> {props.data.newdeaths} </Td>
        </Tr>
        <MainTr>
          <TotalTh>Total Tested</TotalTh>
        </MainTr>
        <Tr>
          <TotalTd> {props.data.totaltests}</TotalTd>
        </Tr>
      </Table>
    </TableWrapper>
  );
};

export default Top30Table;

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
  let givendata = {};
  let total = 0;
  let newcase = 0;
  let active = 0;
  let critical = 0;
  let recovered = 0;
  let totaldeaths = 0;
  let newdeaths = 0;

  for (let i = 0; i < props.data.length; i++) {
    total += props.data[i].totalcases;
    newcase = props.data[i];
    active += props.data[i].activecases;
    critical += props.data[i].criticalcases;
    recovered += props.data[i].recoveredcases;
    totaldeaths += props.data[i].totaldeaths;
    newdeaths += props.data[i].newdeaths;
  }
  givendata.totalcases = total;
  givendata.newcases = newcase;
  givendata.activecases = active;
  givendata.criticalcases = critical;
  givendata.recoveredcases = recovered;
  givendata.totaldeaths = totaldeaths;
  givendata.newdeaths = newdeaths;

  return (
    <TableWrapper>
      <Title>Top 30 Data</Title>

      <Table>
        <MainTr>
          <TotalTh>Total Cases</TotalTh>
          <Th>New Cases</Th>
          <Th>Active Cases</Th>
          <Th>Critical Cases</Th>
          <Th>Recovered Cases</Th>
        </MainTr>
        <Tr>
          <TotalTd>{givendata.totalcases}</TotalTd>
          <Td>{givendata.newcases}</Td>
          <Td>{givendata.activecases}</Td>
          <Td>{givendata.criticalcases}</Td>
          <Td>{givendata.recoveredcases}</Td>
        </Tr>
        <MainTr>
          <TotalTh>Total Deceased</TotalTh>
          <Th>New Deceased</Th>
        </MainTr>
        <Tr>
          <TotalTd> {givendata.totaldeaths}</TotalTd>
          <Td> {givendata.newdeaths} </Td>
        </Tr>
        <MainTr>
          <TotalTh>Total Tested</TotalTh>
        </MainTr>
        <Tr>
          <TotalTd> {givendata.totaltests}</TotalTd>
        </Tr>
      </Table>
    </TableWrapper>
  );
};

export default Top30Table;

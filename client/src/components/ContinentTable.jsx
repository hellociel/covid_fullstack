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

const ContinentTable = (props) => {
  // let name = props.name;

  let givendata = props.total;
  let total = 0;
  let newcase = 1278;
  let active = 0;
  let critical = 0;
  let recovered = 0;
  let totaldeaths = 0;
  let newdeaths = 0;

  if (props.continent) {
    givendata = props.continent;
    for (let i = 0; i < givendata.length; i++) {
      total += givendata[i].totalcases;
      // if (givendata[i].newcases !== null) {
      //   newcase += Number(givendata[i].newcases.split("+")[1]);
      // }
      active += givendata[i].activecases;
      critical += givendata[i].criticalcases;
      recovered += givendata[i].recoveredcases;
      totaldeaths += givendata[i].totaldeaths;
      newdeaths += givendata[i].newdeaths;
    }
    givendata.totalcases = total;
    givendata.newcases = newcase;
    givendata.activecases = active;
    givendata.criticalcases = critical;
    givendata.recoveredcases = recovered;
    givendata.totaldeaths = totaldeaths;
    givendata.newdeaths = newdeaths;
  }

  return (
    <TableWrapper>
      <Title>Total</Title>

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
      </Table>
    </TableWrapper>
  );
};

export default ContinentTable;

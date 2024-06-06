import * as React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Distribution", 159, 6.0, 24, 4.0),
  createData("Oro Kraft", 237, 9.0, 37, 4.3),
  createData("Franchise", 262, 16.0, 24, 6.0),
  createData("E-Commerce", 305, 3.7, 67, 4.3),
  createData("Total", 356, 16.0, 49, 3.9),
];

export default function CurrentDiwaliYearTable({ VendorWiseData }: any) {
  const data = VendorWiseData?.netsaleSummray;
  console.log("first", data);
  return (
    <TableContainer>
      <Table
        stickyHeader
        aria-label="sticky table"
        style={{ fontFamily: "__Montserrat_b1da2a" }}
      >
        <TableHead style={{ border: "1px solid", borderColor: "#E0E0FF" }}>
          <TableRow>
            <TableCell style={StyleNa}>Type</TableCell>
            <TableCell align="left" style={headerStyle}>
              Net Sales
            </TableCell>
            <TableCell align="left" style={headerStyle}>
              Diamond
            </TableCell>
            <TableCell align="left" style={headerStyle}>
              Return
            </TableCell>
            <TableCell align="left" style={headerStyle}>
              Return%
            </TableCell>
            <TableCell align="left" style={headerStyle}>
              Gold
            </TableCell>

            <TableCell align="left" style={headerStyle}>
              Silver
            </TableCell>

            <TableCell align="left" style={headerStyle}>
              Platinum
            </TableCell>

            <TableCell align="left" style={headerStyleNa}>
              Rare
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: any) => (
            <TableRow key={row.type}>
              <TableCell component="th" scope="row" style={cellStyleA}>
                {row.type ?? 0}
              </TableCell>
              <TableCell align="left" style={cellStyleN}>
                {row.netsale ?? 0} Cr
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.diamond ?? 0} Cr
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.return ?? 0} Cr
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.returnPercent ?? 0} %
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.gold ?? 0} Cr
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.silver ?? 0} Cr
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.platinum} Cr
              </TableCell>
              <TableCell align="left" style={cellStyle}>
                {row.rare} Cr
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const headerStyle = {
  backgroundColor: "#FBFBFE",
  color: "#25215E",
  fontWeight: "bolder",
  padding: "9px",
  fontSize: "16px",
  // padding: "9px 9px",
  fontFamily: "__Montserrat_b1da2a",
  borderTop: "1px solid #E0E0FF",
  borderBottom: "1px solid #E0E0FF",
};
const headerStyleNa = {
  backgroundColor: "#FBFBFE",
  color: "#25215E",
  fontWeight: "bolder",
  fontSize: "16px",
  // padding: "9px 9px",
  fontFamily: "__Montserrat_b1da2a",
  borderRight: "1px solid #E0E0FF",
  borderTop: "1px solid #E0E0FF",
  borderBottom: "1px solid #E0E0FF",
};
const StyleNa = {
  backgroundColor: "#FBFBFE",
  color: "#25215E",
  fontWeight: "bolder",
  fontSize: "16px",
  // padding: "9px 9px",
  fontFamily: "__Montserrat_b1da2a",
  borderLeft: "1px solid #E0E0FF",
  borderTop: "1px solid #E0E0FF",
};

const cellStyle = {
  color: "#6E7191",
  fontSize: "16px",
  paddingBottom: "9px",
  paddingTop: "9px", // Decreased cell height
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "500",
};
const cellStyleH = {
  color: "#6E7191",
  fontSize: "16px",
  borderRight: "1px solid #E0E0FF",

  paddingBottom: "9px",
  paddingTop: "9px", // Decreased cell height
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "500",
};
const cellStyleN = {
  color: "#008000",
  fontSize: "16px",
  paddingBottom: "9px",
  paddingTop: "9px", // Decreased cell height
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "560",

  // borderRight: "1px solid #E0E0FF",
};
const cellStyleA = {
  color: "#25215E",
  fontSize: "16px",
  // borderRight: "1px solid #E0E0FF",

  paddingBottom: "9px",
  paddingTop: "9px", // Decreased cell height
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "650",
};

import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { dummyData } from "../DummyData/DummyData";

const NewOutLetTable = ({ valueType }: any) => {
  // console.log(valueType, "valueType");
  return (
    <div className="p-4 w-full">
      <PerfectScrollbar>
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{ fontFamily: "__Montserrat_b1da2a" }}
          className="border-2 rounded-md"
        >
          <TableHead style={{ border: "", borderColor: "#E0E0FF" }}>
            <TableRow>
              <TableCell style={{ ...headerStyleNa, width: 250 }}>
                State
              </TableCell>
              <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                SH
              </TableCell>
              <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                Cur. Month Target
              </TableCell>
              <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                Cur. Month Found
              </TableCell>
              <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                Cur. Month Achieved %.
              </TableCell>
              <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                Cur. M. New Outlet Sale
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left" style={{ ...cellStyle, width: 150 }}>
                  {row.BSM}
                </TableCell>
                <TableCell align="left" style={{ ...cellStyle, width: 150 }}>
                  {row.ApproveBA}
                </TableCell>
                <TableCell align="left" style={{ ...cellStyle, width: 150 }}>
                  {row.ExistingBA}
                </TableCell>
                <TableCell align="left" style={{ ...cellStyle, width: 150 }}>
                  {row.PendingBA}
                </TableCell>
                <TableCell align="left" style={{ ...cellStyle, width: 150 }}>
                  {row.DiamondTarget}
                </TableCell>

                <TableCell align="left" style={{ ...cellStyle, width: 150 }}>
                  {row.TotalNetSale}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PerfectScrollbar>
    </div>
  );
};

const headerStyle = {
  backgroundColor: "#FBFBFE",
  color: "#25215E",
  fontWeight: "bolder",
  padding: "9px",
  fontSize: "16px",
  fontFamily: "__Montserrat_b1da2a",
  // borderBottom: "1px solid #E0E0FF",
  // border: "1px solid #E0E0FF",
};
const headerStyleNa = {
  backgroundColor: "#FBFBFE",
  color: "#25215E",
  fontWeight: "bolder",
  fontSize: "16px",
  padding: "9px",
  fontFamily: "__Montserrat_b1da2a",
  // border: "1px solid #E0E0FF",
};
const cellStyle = {
  color: "#6E7191",
  fontSize: "16px",
  padding: "9px",
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "500",
};
const cellStyleN = {
  color: "#008000",
  fontSize: "16px",
  padding: "9px",
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "600",
  // border: "1px solid #E0E0FF",
  // borderLeft: "1px solid #E0E0FF",
};
const cellStyleA = {
  color: "#25215E",
  fontSize: "16px",
  // border: "1px solid #E0E0FF",
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "650",
};

export default NewOutLetTable;

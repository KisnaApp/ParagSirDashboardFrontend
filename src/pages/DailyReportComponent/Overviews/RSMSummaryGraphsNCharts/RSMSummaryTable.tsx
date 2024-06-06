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

const RSMSummaryTable = ({ valueType }: any) => {
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
          <TableHead style={{ border: "1px solid", borderColor: "#E0E0FF" }}>
            {valueType === "Gold Sale" ? (
              <TableRow>
                <TableCell style={{ ...headerStyleNa, width: 250 }}>
                  NSM
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  RSM
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Dist. & Key Ret.
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Existing Dis. & Key Ret.
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Only Gold Key Ret.
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  %
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Gold Weight Target (G)
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Today Gold Weight (G)
                </TableCell>
                <TableCell
                  align="left"
                  style={{ ...headerStyleNa, width: 150 }}
                >
                  Gold Wt. (G) Net
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Gold Ach. %
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Gold (G) Balance
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Repeat Purchase
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Tour Days With Line
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Tour Planning
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell style={{ ...headerStyleNa, width: 250 }}>
                  NSM
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  RSM
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Approve BA
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Existing BA
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Pending BA
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Diamond Target
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Today Net Sale
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Total Net Sale
                </TableCell>
                <TableCell
                  align="left"
                  style={{ ...headerStyleNa, width: 150 }}
                >
                  Diamond Achieve%
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Balance Target
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Today Order
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Total Order
                </TableCell>
                {valueType === "Kisna Diamond Sale" ? (
                  <>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Last Year Sales
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Goly % (C. Month)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      DYTD Growth%
                    </TableCell>
                  </>
                ) : valueType === "Sale wise Top to Bottom" ? (
                  <>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Gold Wt Target(G)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Gold Wt.(G) Net
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Overall Sale(Inv.)
                    </TableCell>
                  </>
                ) : valueType === "Percentage Wise Top to Bottom" ? (
                  <>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Gold Wt Target(G)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Gold Wt.(G) Net
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Overall Sale(Inv.)
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Gold Wt Target
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Gold Wt Net
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...headerStyle, width: 150 }}
                    >
                      Overall Sale
                    </TableCell>
                  </>
                )}
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {dummyData.map((row, index) => (
              <TableRow key={index}>
                {valueType === "Gold Sale" ? (
                  <>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        ...cellStyleA,
                        borderTop: row.NSM ? "1px solid #E0E0FF" : "none",
                        borderBottom: row.NSM ? "1px solid #E0E0FF" : "none",
                        width: 250,
                      }}
                    >
                      {row.NSM}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.BSM}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.ApproveBA}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.ExistingBA}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.PendingBA}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.DiamondTarget}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.TodayNetSale}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.TotalNetSale}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyleN, width: 150 }}
                    >
                      {row.DiamondAchieve}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.BalanceTarget}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.TodayOrder}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.TotalOrder}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.LastYearSales}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.Goly}
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        ...cellStyleA,
                        border: row.NSM ? "1px solid #E0E0FF" : "none",
                        borderBottom: row.NSM ? "1px solid #E0E0FF" : "none",
                        width: 250,
                      }}
                    >
                      {row.NSM}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.BSM}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.ApproveBA}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.ExistingBA}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.PendingBA}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.DiamondTarget}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.TodayNetSale}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.TotalNetSale}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyleN, width: 150 }}
                    >
                      {row.DiamondAchieve}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.BalanceTarget}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.TodayOrder}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.TotalOrder}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.GoldWtTarget}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.GoldWtNet}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.GoldWtNet}
                    </TableCell>
                  </>
                )}
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
  fontWeight: "560",
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

export default RSMSummaryTable;

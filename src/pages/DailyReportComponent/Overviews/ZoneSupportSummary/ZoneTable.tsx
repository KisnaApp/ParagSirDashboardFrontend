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
import { dummyData2 } from "../DummyData/DummyData";

export default function ZoneTable({ valueType }: any) {
  return (
    <div className="p-4 w-full">
      <PerfectScrollbar>
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{ fontFamily: "__Montserrat_b1da2a" }}
          className="border-2 rounded-md"
        >
          {valueType === "Gold Sale" ? (
            <TableHead style={{}}>
              <TableRow>
                <TableCell style={{ ...headerStyle, width: 150 }}>
                  Zone Head
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Dist. & Key Ret.
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Existing Dist. & Key
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Only Gold Key Ret.
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  %
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Gold (G) Weight
                </TableCell>

                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Today Gold Weight (G)
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Gold Wt. Net (G)
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Gold % Achieved
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
                {/* <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Tour Planning
                </TableCell> */}
              </TableRow>
            </TableHead>
          ) : (
            <TableHead style={{}}>
              <TableRow>
                <TableCell style={{ ...headerStyle, width: 150 }}>
                  Zone Head
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
                  Dia. Target
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Today Net Sale
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Total Net Sale
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
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
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Gold Wt. Target (G)
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Gold Wt. (G) Net
                </TableCell>
                <TableCell align="left" style={{ ...headerStyle, width: 150 }}>
                  Overall Sale (Inv.)
                </TableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {dummyData2.map((row, index) => (
              <TableRow key={index}>
                {valueType === "Gold Sale" ? (
                  <>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ ...cellStyle, width: 50 }}
                    >
                      {row.State}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.SH}
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
                    {/* <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.Goly}
                    </TableCell> */}
                  </>
                ) : (
                  <>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ ...cellStyle, width: 50 }}
                    >
                      {row.State}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.SH}
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
                    {valueType === "Sale wise Top to Bottom" ? (
                      <TableCell
                        align="left"
                        style={{ ...cellStyleN, width: 150 }}
                      >
                        {row.TodayNetSale}
                      </TableCell>
                    ) : (
                      <TableCell
                        align="left"
                        style={{ ...cellStyle, width: 150 }}
                      >
                        {row.TodayNetSale}
                      </TableCell>
                    )}
                    {valueType === "Percentage Wise Top to Bottom" ? (
                      <TableCell
                        align="left"
                        style={{ ...cellStyleN, width: 150 }}
                      >
                        {row.DiamondAchieve}
                      </TableCell>
                    ) : (
                      <TableCell
                        align="left"
                        style={{ ...cellStyle, width: 150 }}
                      >
                        {row.DiamondAchieve}
                      </TableCell>
                    )}
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
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
                      {row.TodayGoldWt}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: 150 }}
                    >
                      {row.GoldWtTarget}
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
}

const headerStyle = {
  backgroundColor: "#FBFBFE",
  color: "#25215E",
  fontWeight: "bolder",
  padding: "9px",
  fontSize: "16px",
  fontFamily: "__Montserrat_b1da2a",
  border: "1px solid #E0E0FF",
  // borderBottom: "1px solid #E0E0FF",
};
const headerStyleNa = {
  backgroundColor: "#FBFBFE",
  color: "#25215E",
  fontWeight: "bolder",
  fontSize: "16px",
  padding: "9px",
  fontFamily: "__Montserrat_b1da2a",
  borderRight: "1px solid #E0E0FF",
  borderLeft: "1px solid #E0E0FF",
  borderBottom: "1px solid #E0E0FF",
};
const cellStyle = {
  color: "#6E7191",
  fontSize: "16px",
  padding: "9px",
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "500",
  border: "1px solid #E0E0FF",
};
const cellStyleN = {
  color: "#008000",
  fontSize: "16px",
  padding: "9px",
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "560",
  border: "1px solid #E0E0FF",
  // borderLeft: "1px solid #E0E0FF",
};
const cellStyleA = {
  color: "#25215E",
  fontSize: "16px",
  borderRight: "1px solid #E0E0FF",
  fontFamily: "__Montserrat_b1da2a",
  fontWeight: "650",
};

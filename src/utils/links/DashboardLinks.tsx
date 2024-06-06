export interface iDashLinks {
  text: string;
  url: string;
  // icon: React.ReactNode;
}

export const DashboardLinks: iDashLinks[] = [
  {
    text: "Overall Sales",
    url: "/overallSales",
    // icon: <UserIcon />,
  },
  {
    text: "Daily Report",
    url: "/dailyReport",
    // icon: <WalletIcon />,
  },
];

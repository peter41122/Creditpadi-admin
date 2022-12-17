import Index from "./views/Index";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import Balance from "./views/Balance";
import SendMoney from "./views/SendMoney";
import Profile from "./views/Profile";
import CardsManagement from "./views/CardsManagement";
import Setting from "./views/Setting";
import Notifications from "./views/Notifications";

import dashboardIcon from "./assets/img/admin/sidebar-dashboard.png";
import balanceIcon from "./assets/img/admin/sidebar-balance.png";
import sendmoneyIcon from "./assets/img/admin/sidebar-sendmoney.png";
import profileIcon from "./assets/img/admin/sidebar-profile.png";
import cardsmngIcon from "./assets/img/admin/sidebar-cardsmng.png";
import settingIcon from "./assets/img/admin/sidebar-setting.png";
import notificationsIcon from "./assets/img/admin/sidebar-notification.png";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "",
    component: <Index />,
    layout: "/home",
  },
  {
    path: "/signin",
    name: "Login",
    icon: "",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Register",
    icon: "",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: dashboardIcon,
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/balance",
    name: "Balance",
    icon: balanceIcon,
    component: <Balance />,
    layout: "/admin",
  },
  {
    path: "/sendmoney",
    name: "Send Money",
    icon: sendmoneyIcon,
    component: <SendMoney />,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: profileIcon,
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/cardsmng",
    name: "Cards Management",
    icon: cardsmngIcon,
    component: <CardsManagement />,
    layout: "/admin",
  },
  {
    path: "/setting",
    name: "Setting",
    icon: settingIcon,
    component: <Setting />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: notificationsIcon,
    component: <Notifications />,
    layout: "/admin",
  },
];
export default routes;

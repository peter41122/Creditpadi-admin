import Index from "./views/Index";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import Balance from "./views/Balance";
import SendMoney from "./views/SendMoney";
import Profile from "./views/Profile";
import CardsManagement from "./views/CardsManagement";
import Setting from "./views/Setting";

var routes = [
  {
    path: "/",
    name: "Home",
    icon: "",
    component: Index,
    layout: "/home",
  },
  {
    path: "/signin",
    name: "Login",
    icon: "",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Register",
    icon: "",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/balance",
    name: "Account Balance",
    icon: "",
    component: Balance,
    layout: "/admin",
  },
  {
    path: "/sendmoney",
    name: "Send Money",
    icon: "",
    component: SendMoney,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Account Profile",
    icon: "",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/cardsmng",
    name: "Cards",
    icon: "",
    component: CardsManagement,
    layout: "/admin",
  },
  {
    path: "/setting",
    name: "Account Setting",
    icon: "",
    component: Setting,
    layout: "/admin",
  },
];
export default routes;

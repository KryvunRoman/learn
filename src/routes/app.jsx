import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  Group
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/table",
    sidebarName: "Matrix",
    navbarName: "Matrix",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/aboutus",
    sidebarName: "About Us",
    navbarName: "About Us",
    icon: Group,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;

import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { ImProfile } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { appState } from "../../store/app";
import HomeIcon from "@mui/icons-material/Home";
import MenuItem from "../menuItem/MenuItem";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideNav = () => {
  const theme = useTheme();
  const [open, setOpen] = useRecoilState(appState);
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" open={open.sideNavOpen}>
      <DrawerHeader></DrawerHeader>
      <List>
        <MenuItem
          title="Tech Dashboard"
          icon={<HomeIcon size={20} />}
          route="/"
        />
        <MenuItem
          title="Individual Team Dashboard"
          icon={<BiSolidDashboard size={20} />}
          route="/teamDashboard"
        />
        <MenuItem
          title="Employees"
          icon={<BsFillPeopleFill size={20} />}
          route="/employees"
        />
        <Divider />
        <MenuItem
          title="Manage Settings"
          icon={<IoIosSettings size={20} />}
          route="/settings"
        />
        <MenuItem
          title="Profile"
          icon={<ImProfile size={20} />}
          route="/profile"
        />
      </List>
    </Drawer>
  );
};

export default SideNav;

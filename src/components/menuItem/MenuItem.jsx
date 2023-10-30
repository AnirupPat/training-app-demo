import HomeIcon from "@mui/icons-material/Home";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { appState } from "../../store/app";

const MenuItem = ({ icon, route, title }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useRecoilState(appState);

  return (
    <ListItem
      disablePadding
      sx={{ display: "block" }}
      onClick={() => {
        navigate(`${route}`);
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;

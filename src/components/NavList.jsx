import React from "react";
import { List, ListItemText, ListItem, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
const NavList = () => {
  const navIcon = [
    { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon />, route: "/" },
    {
      id: 2,
      name: "Archive",
      icon: <ArchiveOutlinedIcon />,
      route: "/archive",
    },
    {
      id: 3,
      name: "Trash",
      icon: <DeleteOutlineOutlinedIcon />,
      route: "/delete",
    },
  ];
  return (
    <List>
      {navIcon.map((list) => (
        <Link
          to={list.route}
          style={{ textDecoration: "none", color: "inherit" }}
          key={list.id}
        >
          <ListItem key={list.id}>
            <ListItemIcon>{list.icon}</ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default NavList;

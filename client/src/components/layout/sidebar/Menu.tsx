import React, {FC, useState} from "react";
import { useLocation } from 'react-router-dom'
import {Collapse, List, ListItem, ListItemIcon, ListItemText, useTheme} from "@mui/material";
import {ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon} from "@mui/icons-material";
import { items } from "./items";
import { hasChildren } from "./utils";
import {MenuItem as IMenuItem} from "./items";
import {Link} from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";

export default function Menu() {
  return items.map((item, key) => <MenuItem key={key} item={item} />);
}

interface MenuItemProps {
  item: IMenuItem
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel: FC<MenuItemProps> = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.to;
  const theme = useTheme();

  const linkStyle = {
    color: isActive ? theme.palette.text.secondary : theme.palette.text.primary,
    backgroundColor: isActive ? theme.palette.grey.A200 : "inherit",
  };

  return (
    <ListItem component={Link} to={item.to || ''} style={linkStyle}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title}/>
    </ListItem>
  );
};

const hasActiveItem = (items: IMenuItem[], location: string): boolean => items.some((item) => {
  return item.to === location;
});

const MultiLevel: FC<MenuItemProps> = ({ item }) => {
  const { items: children } = item;
  const location = useLocation();
  const openDefaultState = hasActiveItem(children || [], location.pathname);
  const [open, setOpen] = useState(openDefaultState);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children && children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

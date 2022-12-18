import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@mui/material";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import CreateModal from "./CreateModal";

const useStyles = makeStyles({
  sidebar: {
    height: "100%",
    width: "200px",
    background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
    boxShadow: "rgb(0 0 0 / 50%) 0rem 0 1.6875rem 0rem",
    borderRadius: "12px",
    margin: "1rem",
  },
  head: {
    padding: "24px 32px 10px",
    textAlign: "center",
    opacity: "1",
    background: "transparent",
    boxShadow: "none",
    fontSize: "20px",
    color: "white",
    borderBottom: "1px solid rgb(255, 255, 255, 0.1)",
  },
  menu: {
    overflowY: "auto",
    height: "calc(100% - 4rem)",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    "& a, button": {
      justifyContent: "unset",
      fontWeight: 400,
      textTransform: "none",
      padding: "0.8rem 1rem",
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      color: "#fff",
      borderRadius: "0.375rem",
      transition:
        "box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    "& a:hover, button:hover": {
      background: "rgb(255, 255, 255, 0.1)",
    },
    "& a.active": {
      background:
        "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
      boxShadow:
        "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
    },
  },
  createButton: {
    marginTop: "auto !important",
  },
});

const links = [
  {
    href: "/",
    icon: <DashboardIcon />,
    label: "Dashboard",
  },
  {
    href: "/events",
    icon: <DashboardIcon />,
    label: "Events",
  },
  {
    href: "/planned",
    icon: <DashboardIcon />,
    label: "Planned",
  },
  {
    href: "/completed",
    icon: <DashboardIcon />,
    label: "Completed",
  },
];

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.sidebar}>
        <div className={classes.head}>{"trib"}</div>
        <div className={classes.menu}>
          {links.map((link) => (
            <Link legacyBehavior href={link.href} key={link.href}>
              <a
                className={classNames({
                  ["active"]: router.pathname === link.href,
                })}
              >
                {link.icon}
                {link.label}
              </a>
            </Link>
          ))}
          <Button
            onClick={() => setOpen(true)}
            classes={{ root: classes.createButton }}
          >
            <NoteAddOutlinedIcon />
            {"Crate Event"}
          </Button>
        </div>
      </div>
      <CreateModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Sidebar;

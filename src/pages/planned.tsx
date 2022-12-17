import Layout from "@/components/layout";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Sidebar from "@/components/sidebar";
import LayoutWithSidebar from "@/components/LayoutWithSidebar";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100vw",
    padding: "1rem",
  },
});

const Planned = () => {
  const classes = useStyles();

  return <LayoutWithSidebar>{"aaa"}</LayoutWithSidebar>;
};

export default Planned;

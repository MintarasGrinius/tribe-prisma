import Layout from "@/components/layout";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Sidebar from "@/components/sidebar";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100vw",
    padding: "1rem",
  },
});

const Planned = () => {
  const classes = useStyles();

  return (
    <Layout description={"Descriptions page"} title={"Descriptions"}>
      <div className={classes.container}>
        <Sidebar />
      </div>
    </Layout>
  );
};

export default Planned;

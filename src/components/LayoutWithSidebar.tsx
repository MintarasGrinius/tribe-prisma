import Layout from "@/components/layout";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Sidebar from "@/components/sidebar";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100vw",
    padding: "1rem",
    display: "flex",
    backgroundColor: "rgb(240, 242, 245)",
  },
  innerContainer: {
    paddingLeft: "1rem",
    flex: 1,
  },
});

interface Props {
  children: React.ReactNode;
}

const LayoutWithSidebar = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <Layout description={"Descriptions page"} title={"Descriptions"}>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.innerContainer}>{children}</div>
      </div>
    </Layout>
  );
};

export default LayoutWithSidebar;

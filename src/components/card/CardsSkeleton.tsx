import Layout from "@/components/layout";
import { UserContext } from "@/components/user";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  skeleton: {
    margin: "1rem 0",
    borderRadius: "0.75rem",
  },
});

const CardsSkeleton = () => {
  const classes = useStyles();

  return (
    <>
      {Array(6)
        .fill(1)
        .map((a) => (
          <Skeleton
            className={classes.skeleton}
            variant="rect"
            width={"100%"}
            height={320}
          />
        ))}
    </>
  );
};

export default CardsSkeleton;

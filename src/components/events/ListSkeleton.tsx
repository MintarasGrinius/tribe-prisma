import Layout from "@/components/layout";
import { UserContext } from "@/components/user";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const useStyles = makeStyles({
  skeleton: {
    margin: "1rem 0",
    borderRadius: "0.75rem",
    display: "flex",
  },
  skeletonText: {
    width: "100%",
    fontSize: "1rem",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    margin: "0.3rem 0",
    cursor: "pointer",
  },
  container: {
    width: "100%",
  },
  avatar: {
    marginTop: "0 !important",
  },
});

const ListSkeleton = () => {
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(function mount() {
    setInnerHeight(window?.innerHeight);
  }, []);

  const classes = useStyles();
  return (
    <List classes={{ root: classes.container }}>
      {Array(Math.floor(innerHeight / 80))
        .fill(1)
        .map((a) => (
          <>
            <ListItem
              onClick={() => console.log("aaa")}
              classes={{ root: classes.item }}
              alignItems="flex-start"
            >
              <ListItemAvatar className={classes.avatar}>
                <Skeleton variant="circle" width={56} height={56} />
              </ListItemAvatar>
              <ListItemText>
                <Skeleton className={classes.skeletonText} variant="text" />
                <Skeleton className={classes.skeletonText} variant="text" />
              </ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
    </List>
  );
};

export default ListSkeleton;

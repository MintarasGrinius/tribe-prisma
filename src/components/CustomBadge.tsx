//@flow
import * as React from "react";
import { Badge, makeStyles } from "@material-ui/core";
import classNames from "classnames";

interface Props {
  status: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles({
  badge: {
    bottom: "20px",
    right: "50px",
    transition: "all 0.5s",
    background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    padding: "9px",
  },
  dislike: {
    background: "linear-gradient(195deg, rgb(106 106 106), rgb(64 64 64))",
  },
});

const CustomBadge = ({ children, status }: Props) => {
  const classes = useStyles();
  return (
    <Badge
      invisible={!status}
      classes={{
        badge: classNames(classes.badge, {
          [classes.dislike]: status !== "liked",
        }),
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      badgeContent={status === "liked" ? "Applied" : "Disliked"}
      color="secondary"
    >
      {children}
    </Badge>
  );
};

export default CustomBadge;

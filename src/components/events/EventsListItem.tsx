import React from "react";
import { makeStyles } from "@material-ui/core";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { generateDisplayableImage } from "../../utils";
import { PlannedEvent } from "../card";

interface Props {
  event: PlannedEvent;
}

const useStyles = makeStyles({
  item: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    margin: "0.3rem 0",
    cursor: "pointer",
  },
  avatar: {
    marginTop: "0 !important",
  },
});

const EventsListItem = ({
  event: { event_id, title, description, location, photos },
}: Props) => {
  const classes = useStyles();

  return (
    <>
      <ListItem
        onClick={() => console.log("aaa")}
        classes={{ root: classes.item }}
        alignItems="flex-start"
      >
        <ListItemAvatar className={classes.avatar}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt={event_id.toString()}
            src={generateDisplayableImage(photos[0])}
          />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography variant="body2" noWrap>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  color="text.primary"
                  variant="body2"
                >
                  {location}
                </Typography>
                {` — ${description}`}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default EventsListItem;

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
import CardModal from "../card/CardModal";

interface Props {
  event: PlannedEvent;
  applyToAttend: (id: number) => void;
  dislikeEvent: (id: number) => void;
}

const useStyles = makeStyles({
  item: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    margin: "0.3rem 0",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    "&:hover": {
      transition: "0.3s ease-in-out",
      backgroundColor: "#ffffff",
      boxShadow: "0px 0px 20px #fff",
      paddingTop: "0.8rem",
      paddingBottom: "0.8rem",
    },
  },
  avatar: {
    marginTop: "0 !important",
  },
});

const EventsListItem = ({ event, applyToAttend, dislikeEvent }: Props) => {
  const { event_id, title, description, location, photos } = event;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <>
      <ListItem
        onClick={() => setOpen(true)}
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
      <CardModal
        applyToAttend={() => applyToAttend(event_id)}
        dislike={() => dislikeEvent(event_id)}
        open={open}
        setOpen={setOpen}
        event={event}
      />
    </>
  );
};

export default EventsListItem;

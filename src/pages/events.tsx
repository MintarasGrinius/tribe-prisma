import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import LayoutWithSidebar from "@/components/LayoutWithSidebar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { PlannedEvent } from "@/components/card";
import axios from "axios";
import { authHeaders, backURL } from "@/components/user/env";
import { apply, dislike, generateDisplayableImage } from "../utils";
import ListSkeleton from "@/components/events/ListSkeleton";
import EventsListItem from "@/components/events/EventsListItem";

const useStyles = makeStyles({
  container: {
    width: "100%",
  },
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

const Events = () => {
  const classes = useStyles();
  const [events, setEvents] = React.useState<PlannedEvent[]>([]);
  const [loading, setLoading] = React.useState(true);

  const applyToAttend = async (eventId) => {
    setLoading(true);
    await apply(eventId)
      .then(() => {
        getEvents();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const dislikeEvent = async (eventId) => {
    setLoading(true);
    await dislike(eventId)
      .then(() => {
        getEvents();
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const getEvents = async (): Promise<void> => {
    setLoading(true);
    const authHeader = await authHeaders();

    axios
      .get(backURL("api/v1/events"), {
        headers: { ...authHeader },
      })
      .then(({ data }) => {
        console.log(data);
        setEvents(data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <LayoutWithSidebar>
      <List classes={{ root: classes.container }}>
        {loading ? (
          <ListSkeleton />
        ) : (
          <>
            {events.map((event) => (
              <EventsListItem
                dislikeEvent={dislikeEvent}
                applyToAttend={applyToAttend}
                event={event}
              />
            ))}
          </>
        )}
      </List>
    </LayoutWithSidebar>
  );
};

export default Events;

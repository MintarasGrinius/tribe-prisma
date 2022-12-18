//@flow
import * as React from "react";
import {
  alpha,
  Box,
  Button,
  Input,
  InputBase,
  makeStyles,
  Modal,
  styled,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { createTheme, TextField } from "@mui/material";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useStyles = makeStyles({
  modalBax: {
    padding: "1rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    backgroundColor: "rgb(18, 18, 18)",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px",
    color: "#dfdfdf",
    borderRadius: "12px",
  },
  textField: {
    width: "48%",
    "&:hover, &:active": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    "& input, textarea": {
      color: "#fff",
    },
    "& fieldset, label": {
      borderColor: "#dfdfdf !important",
      color: "#979797 !important",
    },
  },
  form: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  },
  submit: {
    width: "100%",
    backgroundColor: "#676767",
    "&:hover": {
      backgroundColor: "#979797",
    },
  },
});

const CreateModal = ({ open, setOpen }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box className={classes.modalBax}>
            <div className={classes.heading}>
              <h3>{"Create an event"}</h3>
              <p>{"Fill party details to create"}</p>
            </div>
            <Formik
              initialValues={{
                age_group: {
                  from: "",
                  to: "",
                },
                capacity: "",
                category: "",
                description: "",
                dress_code: "",
                location: "",
                own_drinks: false,
                time: "",
                title: "",
                photos: "",
              }}
              onSubmit={(a) => console.log(a)}
            >
              <Form className={classes.form}>
                <TextField
                  color="primary"
                  name="from"
                  label="Start Date and Time"
                  classes={{ root: classes.textField }}
                  size="small"
                />
                <TextField
                  color="primary"
                  name="to"
                  label="End Date and Time"
                  classes={{ root: classes.textField }}
                  size="small"
                />
                <TextField
                  color="primary"
                  name="capacity"
                  label="Capacity"
                  classes={{ root: classes.textField }}
                  size="small"
                />
                <TextField
                  color="primary"
                  name="category"
                  label="Category"
                  classes={{ root: classes.textField }}
                  size="small"
                />
                <TextField
                  color="primary"
                  name="description"
                  label="Description"
                  classes={{ root: classes.textField }}
                  size="small"
                  rows={4}
                  multiline
                />
                <TextField
                  color="primary"
                  name="dress_code"
                  label="Dress code"
                  classes={{ root: classes.textField }}
                  size="small"
                  rows={4}
                  multiline
                />
                <TextField
                  color="primary"
                  name="location"
                  label="Location"
                  classes={{ root: classes.textField }}
                  size="small"
                />
                <TextField
                  color="primary"
                  name="time"
                  label="Time"
                  classes={{ root: classes.textField }}
                  size="small"
                />
                <TextField
                  color="primary"
                  name="title"
                  label="Title"
                  classes={{ root: classes.textField }}
                  size="small"
                />
                <TextField
                  color="primary"
                  name="photos"
                  label="Photos"
                  classes={{ root: classes.textField }}
                  size="small"
                />
                <Button
                  classes={{ root: classes.submit }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Create
                </Button>
              </Form>
            </Formik>
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default CreateModal;

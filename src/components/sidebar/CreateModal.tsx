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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import classNames from "classnames";

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
    // height: "40px",
    "& > div": {
      height: "40px",
      "& svg": {
        color: "#979797",
      },
      "& input": {
        height: "40px",
      },
    },
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
              {({ values, handleChange, touched, errors, setFieldValue }) => {
                return (
                  <Form className={classes.form}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        label="Start Date and Time"
                        className={classNames(classes.textField)}
                        renderInput={(params) => (
                          <TextField
                            InputLabelProps={{
                              shrink: true,
                            }}
                            {...params}
                            inputProps={{
                              placeholder: "",
                            }}
                          />
                        )}
                        value={values.age_group.from}
                        onChange={(a) =>
                          setFieldValue("age_group[from]", a["$d"])
                        }
                      />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        label="End Date and Time"
                        className={classNames(classes.textField)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder=""
                            inputProps={{
                              placeholder: "",
                            }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        )}
                        value={values.age_group.to}
                        onChange={(a) =>
                          setFieldValue("age_group[to]", a["$d"])
                        }
                      />
                    </LocalizationProvider>
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      color="primary"
                      name="capacity"
                      label="Capacity"
                      classes={{ root: classes.textField }}
                      size="small"
                      value={values.capacity}
                      onChange={handleChange}
                      error={touched.capacity && Boolean(errors.capacity)}
                      helperText={touched.capacity && errors.capacity}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      color="primary"
                      name="category"
                      label="Category"
                      classes={{ root: classes.textField }}
                      size="small"
                      value={values.category}
                      onChange={handleChange}
                      error={touched.category && Boolean(errors.category)}
                      helperText={touched.category && errors.category}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      color="primary"
                      name="description"
                      label="Description"
                      classes={{ root: classes.textField }}
                      size="small"
                      rows={4}
                      multiline
                      value={values.description}
                      onChange={handleChange}
                      error={touched.description && Boolean(errors.description)}
                      helperText={touched.description && errors.description}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      color="primary"
                      name="dress_code"
                      label="Dress code"
                      classes={{ root: classes.textField }}
                      size="small"
                      rows={4}
                      multiline
                      value={values.dress_code}
                      onChange={handleChange}
                      error={touched.dress_code && Boolean(errors.dress_code)}
                      helperText={touched.dress_code && errors.dress_code}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      color="primary"
                      name="location"
                      label="Location"
                      classes={{ root: classes.textField }}
                      size="small"
                      value={values.location}
                      onChange={handleChange}
                      error={touched.location && Boolean(errors.location)}
                      helperText={touched.location && errors.location}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      color="primary"
                      name="time"
                      label="Time"
                      classes={{ root: classes.textField }}
                      size="small"
                      value={values.time}
                      onChange={handleChange}
                      error={touched.time && Boolean(errors.time)}
                      helperText={touched.time && errors.time}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      color="primary"
                      name="title"
                      label="Title"
                      classes={{ root: classes.textField }}
                      size="small"
                      value={values.title}
                      onChange={handleChange}
                      error={touched.title && Boolean(errors.title)}
                      helperText={touched.title && errors.title}
                    />
                    <TextField
                      InputLabelProps={{
                        shrink: true,
                      }}
                      color="primary"
                      name="photos"
                      label="Photos"
                      classes={{ root: classes.textField }}
                      size="small"
                      value={values.photos}
                      onChange={handleChange}
                      error={touched.photos && Boolean(errors.photos)}
                      helperText={touched.photos && errors.photos}
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
                );
              }}
            </Formik>
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default CreateModal;

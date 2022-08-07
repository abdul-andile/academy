import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./_form.module.scss";
import { useNavigate } from "react-router-dom";

import bgImg from "../../img/youtube.jpg";

import { useState } from "react";
const theme = createTheme();
const axios = require("axios").default;

const RequestServiceForm = (props) => {
  const [video_url, setVideo_url] = useState("");
  const [video_title, setVideo_title] = useState("");
  const [video_description, setVideo_description] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const url = "http://localhost:4000/admin";
  const navigate = useNavigate();

  const handleVideoUrlChange = (e) => {
    setVideo_url(e.target.value);
  };
  const handleVideoTitleChange = (e) => {
    setVideo_title(e.target.value);
  };
  const handleVideoDescriptionChange = (e) => {
    setVideo_description(e.target.value);
  };
  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.formType === "admin-dashboard") {
      axios
        .post(`${url}/addVideo`, {
          video_url: video_url,
          video_title: video_title,
          video_description: video_description,
        })
        .then(function (response) {
          setVideo_url("");
          setVideo_title("");
          setVideo_description("");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("its here");
      try {
        const response = axios.post(`${url}/login`, {
          email: username,
          password: password,
        });
        console.log(response);
        if (response.status === 200) {
          navigate("/dashboard");
          console.log("Login successfully");
        }
      } catch (err) {
        if (err.response?.status === 400) {
          console.log("Invalid output");
          setErrMsg("Invalid input");
        } else if (err.response?.status === 401) {
          console.log("Incorrect credentials");
          setErrMsg("Incorrect credentials");
        } else {
          console.log("Login failed");
          setErrMsg("Login failed");
        }
      }
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "auto" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              {props.formType === "admin-dashboard"
                ? "Add Videos "
                : "Admin Login"}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {props.formType === "admin-dashboard" ? (
                <div>
                  <TextField
                    margin="normal"
                    required
                    autowidth="true"
                    id="video_url"
                    label="video_url"
                    name="video_url"
                    autoComplete="name"
                    autoFocus
                    value={video_url}
                    onChange={handleVideoUrlChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    type="text"
                    value={video_title}
                    autowidth="true"
                    id="video_title"
                    label="video_title"
                    name="video_title"
                    onChange={handleVideoTitleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    autowidth="true"
                    id="video_description"
                    label="video_description"
                    name="video_description"
                    autoComplete="video_description"
                    value={video_description}
                    onChange={handleVideoDescriptionChange}
                  />
                </div>
              ) : (
                <div>
                  <TextField
                    margin="normal"
                    required
                    autowidth="true"
                    id="username"
                    label="username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={username}
                    onChange={usernameChangeHandler}
                  />
                  <TextField
                    margin="normal"
                    required
                    type="password"
                    value={password}
                    autowidth="true"
                    id="password"
                    label="password"
                    name="password"
                    onChange={passwordChangeHandler}
                  />
                </div>
              )}
              {props.formType === "admin-dashboard" ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {props.formType === "admin-dashboard" ? "Add video" : "Login"}
                </Button>
              ) : (
                <Link className={classes.link} to="/admin/dashboard">
                  Login
                </Link>
              )}
              <Link
                className={classes.link}
                to={props.formType === "admin-dashboard" ? "/admin" : "/"}
              >
                Back
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default RequestServiceForm;

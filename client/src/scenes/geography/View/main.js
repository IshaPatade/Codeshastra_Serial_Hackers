import React, { useEffect } from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Form from "./Form/index.js";
import "../App.css"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const MainPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <AppBar position="static" style={{backgroundColor: "#002D62", borderRadius: "10px"}}> */}
        <Toolbar className="header">
          <Typography variant="h6" className={classes.title}>
            RESUME GENERATOR
          </Typography>
        </Toolbar>
      {/* </AppBar> */}
      <Form />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(MainPage);

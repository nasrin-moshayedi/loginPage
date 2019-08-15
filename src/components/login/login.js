import React from "react";
import { withStyles } from "@material-ui/styles";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import EmailLogin from "../emailLogin/emailLogin";
import PhoneLogin from "../phoneLogin/phoneLogin";
import { Styles } from "./loginStyle";
import { Button } from "@material-ui/core";

class Login extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.header}>
        <BrowserRouter>
          <Grid container justify="center">
            <Grid item lg={3} xl={3} md={4} sm={8} xs={10}>
              <Grid container justify="center">
                <Grid item xl={6} xs={6} className={classes.headerLeft}>
                  <Link to="/" className={classes.headerLink}>
                    email login
                  </Link>
                  {/* </Button> */}
                </Grid>
                <Grid item xl={6} xs={6} className={classes.headerRight}>
                  <Link to="/phone" className={classes.headerLink}>
                    phone login
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Route exact path="/" render={() => <EmailLogin />} />
          <Route exact path="/phone" render={() => <PhoneLogin />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(Styles)(Login);

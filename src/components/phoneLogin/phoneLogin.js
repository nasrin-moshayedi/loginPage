import React from "react";
// form validator
import { ValidatorForm } from "react-material-ui-form-validator";
// material ui imports
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

// image
import Logo from "./../../logo.svg";
// customize style
import { Styles } from "./../login/loginStyle";
// components imports
import PhoneInbux from "./PhoneInbox";
import PasswordInbox from "./../public/PasswordInbox";

class Login extends React.Component {
  state = {
    submitted: false
  };
  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  };
  render() {
    const { submitted } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Grid item lg={3} xl={3} md={4} sm={8} xs={10}>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              className={classes.container}
            >
              <Grid container justify="center" alignItems="center">
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={11}
                  xs={11}
                  style={{
                    justifyContent: "center",
                    display: "flex"
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={Logo}
                    className={classes.bigAvatar}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={11} xs={11}>
                  <PhoneInbux />
                </Grid>
                <Grid item lg={10} md={10} sm={11} xs={11}>
                  <PasswordInbox />
                </Grid>
                <Grid item lg={10} md={10} sm={11} xs={11}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                    fullWidth
                    className={classes.btn}
                  >
                    {(submitted && "Your form is submitted!") ||
                      (!submitted && "Submit")}
                  </Button>
                </Grid>
              </Grid>
            </ValidatorForm>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(Styles)(Login);

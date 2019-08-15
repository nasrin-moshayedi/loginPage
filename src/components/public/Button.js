import React from "react";
// material ui imports
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

// customize style
import { Styles } from "./../login/loginStyle";

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
        <Button
          variant="contained"
          type="submit"
          disabled={submitted}
          fullWidth
          className={classes.btn}
        >
          {(submitted && "Your form is submitted!") || (!submitted && "Submit")}
        </Button>
      </div>
    );
  }
}

export default withStyles(Styles)(Login);

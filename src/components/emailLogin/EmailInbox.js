import React from "react";
import { withStyles } from "@material-ui/styles";
import { TextValidator } from "react-material-ui-form-validator";

import { Styles } from "./../login/loginStyle";

class Login extends React.Component {
  state = {
    formData: {
      email: ""
    }
  };

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
    this.setState({ password: formData.password });
  };

  render() {
    const { formData } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <TextValidator
          label="Email"
          onChange={this.handleChange}
          name="email"
          value={formData.email}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.input}
        />
      </div>
    );
  }
}

export default withStyles(Styles)(Login);

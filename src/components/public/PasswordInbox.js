import React from "react";

// text validator
import { TextValidator } from "react-material-ui-form-validator";

// materila-ui style
import { withStyles } from "@material-ui/styles";

// customize style
import { Styles } from "./../login/loginStyle";

class PasswoordInbox extends React.Component {
  state = {
    formData: {
      password: ""
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
          label="Password"
          type="password"
          onChange={this.handleChange}
          name="password"
          value={formData.password}
          validators={["required"]}
          errorMessages={["this field is required"]}
          margin="normal"
          variant="outlined"
          fullWidth
          className={classes.input}
        />
      </div>
    );
  }
}

export default withStyles(Styles)(PasswoordInbox);

import React from "react";

// phonenumber imports
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

// material-ui style
import { withStyles } from "@material-ui/styles";

//  stylecustomize
import { Styles } from "./../login/loginStyle";

class PhoneInbox extends React.Component {
  state = {
    value: ""
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={value => this.setState({ value })}
          error={
            value
              ? isValidPhoneNumber(value)
                ? undefined
                : "Invalid phone number"
              : "required"
          }
        />
      </div>
    );
  }
}

export default withStyles(Styles)(PhoneInbox);

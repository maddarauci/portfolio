import React, {Component} from 'react';
//import TextField from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';
//import isEmail from 'validator/lib/isEmail';
//import LinearProgress from 'material-ui/LinearProgress';
import './contact.css';

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      email: '',
      errorMessage: null,
      successMessage: null,
      messageAlreadySent: false,
      loading: false
    }
  }

  async componentDidMount() {}

  componentWillUnmount() {}

  validateString(str) {
    if (!str || str < 1)
      return false;
    return true;
  }

  /**
     * @throws
     */

  render() {
    return (

      <div className="contact">
        <p className="headline">Are you nosy? Then write me a message:</p>
        <strong><p>Email: <em>dominicd165@gmail.com</em></p></strong>
      </div>
    );
  }
}

export default ContactComponent;

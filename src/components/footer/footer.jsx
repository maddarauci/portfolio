import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
//import Tooltip from '@mui/material/Tooltip';
//import Button from '@mui/material/Button';


const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/maddarauci">
            Check-out my Github
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Back to top" onClick={this.onScrollToTop}/>
        </div>
    );
  }
}

export default FooterComponent;

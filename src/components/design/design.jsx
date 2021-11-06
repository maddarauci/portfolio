import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';


class DesignComponent extends Component {

    render() {
        return (
          <div className="design">
            <p className="headline">My Experience and Design</p>
            <p className="text-justify">
              I have been coding since year 11.
              I know how to write up website from scratch using the following technologies
              HTML, CSS and JS and other fancy things like ReactJs and Vue.
              I have a good understanding of the following designs and techques.
            </p>

              <div className="design-checkbox">
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  iconStyle={{"fill":"#A80202"}}
                  label="UI & UX Design"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Performance Optimizations"
              />
            </div>
            <p className="text-justify">
              It is probably a good idea for you to know that i am Not a web-developer, 
              i just happen to be good at these skills.
              <br></br> I only learned these skills from my hacking background and out curiosity 
                but i am profient in these skills.
            </p>
          </div>
        );
    }
}

export default DesignComponent;

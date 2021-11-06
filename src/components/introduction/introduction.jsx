import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="https://www.nawpic.com/media/2020/madara-uchiha-nawpic-26.jpg" size={350}/>
            <h3>About Me:</h3>
            <p className="introduction-text">
              Hi, i am Dom, a web developer among other things. <br></br>
              I am interested in and do research AI systems, I love implementing ML research papers
              in my spare time.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;

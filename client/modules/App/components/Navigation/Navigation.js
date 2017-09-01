import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import styles from './Navigation.css';
import { Link } from 'react-router';

//const navOptions = ['home', 'posts', 'about'];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //selectedPage: 'home',
    };
  }

  /*handleNavChange(option) {
    this.setState({
      selectedPage: option,
    });
    browserHistory.push(`/${option}`);
  }*/

  render() {
    return (
      <div className={styles.navigation}>
        <ul>
                <li>
                    <Link to="/home" ><FormattedMessage id="home" /></Link>
                </li>
                <li>
                    <Link to="/" ><FormattedMessage id="posts" /></Link>
                </li>
                
                <li>
                    <Link to="/about" ><FormattedMessage id="about" /></Link>
                </li>

        </ul>
      </div>
    );
  }
}

export default Navigation;
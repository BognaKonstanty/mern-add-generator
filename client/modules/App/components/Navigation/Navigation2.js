import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import styles from './Navigation.css';

const navOptions = ['home', 'posts', 'about'];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //selectedPage: 'home',
    };
  }

  handleNavChange(option) {
    this.setState({
      selectedPage: option,
    });
    browserHistory.push(`/${option}`);
  }

  render() {
    return (
      <div className={styles.navigation}>
        <ul>
          {
            navOptions.map(option => {
              return (
                <li key={option} onClick={() => this.handleNavChange(option)}>
                  <FormattedMessage id={`${option}`} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Navigation;
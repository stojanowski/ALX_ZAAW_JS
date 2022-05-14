import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

function Main({ children }) {
  return (
    <div className={styles.wraper}>
      <header className={styles.header}>
        <nav>
          <Link to="/">Chat app</Link>
          <ul>
            <li>
              <Link to="/me">My profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">{children}</div>
      <footer>Hello footer</footer>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

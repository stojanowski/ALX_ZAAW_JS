import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1 className={styles.title}>Instagram App</h1>
      </Link>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/me">My Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/pokemon" className={styles.link}>
      Покемоны з хуками
    </NavLink>

    <NavLink to="/counter" className={styles.link}>
      Counter
    </NavLink>

    <NavLink to="/notes" className={styles.link}>
      useMemo
    </NavLink>
  </nav>
);

export default memo(Navigation);

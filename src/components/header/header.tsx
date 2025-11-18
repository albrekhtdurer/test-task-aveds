import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import styles from './header.module.css';
import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to='/'><img alt='логотип' src={logo}></img></Link>
      <div className={styles.header__link_container}>
      <Link to='/contacts' className={styles.header__link}>Контакты</Link>
      <Link to='/login' className={styles.header__link}>Войти</Link>
      </div>
    </header>
  );
}
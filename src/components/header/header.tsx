import logo from '../../assets/logo.svg'
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img alt='логотип' src={logo}></img>
      <div className={styles.header__link_container}>
      <a className={styles.header__link}>Контакты</a>
      <a className={styles.header__link}>Войти</a>
      </div>
    </header>
  );
}
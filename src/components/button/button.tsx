import styles from './button.module.css';

type ButtonProps = {
  children: string;
}

export const Button = (props: ButtonProps) => {
  const {children} = props;
  return <button className={styles.button}>{children}</button>;
}
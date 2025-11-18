import styles from './button.module.css';

type ButtonProps = {
  children: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const {children, onClick} = props;
  return <button onClick={onClick} className={styles.button}>{children}</button>;
}
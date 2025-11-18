import type { FC } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  children: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const {children, onClick} = props;
  return <button onClick={onClick} className={styles.button}>{children}</button>;
}
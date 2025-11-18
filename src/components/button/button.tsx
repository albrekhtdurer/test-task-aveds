import type { FC, ReactElement } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  children: string | ReactElement;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {children, onClick, type, disabled} = props;
  return <button onClick={onClick} className={styles.button} type={type} disabled={disabled}>{children}</button>;
}
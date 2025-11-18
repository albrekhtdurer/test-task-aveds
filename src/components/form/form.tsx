import { useState, type FC } from "react";
import { Button } from "../button/button";
import styles from './form.module.css';

export const Form: FC = () => {
  const nameState = {
    value: '',
    errorText: '',
    error: false,
  }

  const passwordState = {
    value: '',
    errorText: '',
    error: false,
  }

  const [nameValue, setNameValue] = useState(nameState);
  const [passwordValue, setPasswordValue] = useState(passwordState);
  const [authErrorValue, setAuthErrorValue] = useState('');

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameToSet = e.target.value;
    const errorToSet = /^[a-zA-Zа-яА-ЯЁё0-9\s]+$/.test(nameToSet)
      ? ''
      : 'Некорректный формат имени';
    setNameValue({
      value: nameToSet,
      errorText: errorToSet,
      error: Boolean(errorToSet)
    });
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordToSet = e.target.value;
    const errorToSet = passwordToSet.length <= 8 ? 'Пароль должен быть не короче 8 символов' : '';
    setPasswordValue({
      value: passwordToSet,
      errorText: errorToSet,
      error: Boolean(errorToSet)
    })
  }

  const isFormValid = Boolean(
    !nameValue.error && !passwordValue.error
  );

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthErrorValue('');

  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <fieldset className={styles.form__fieldset}>
      <label>
      <input
        value={nameValue.value}
        placeholder="Имя пользователя"
        onChange={nameChangeHandler}
        type='text'
        required
        className={styles.form__input}
        />
        <span className={styles.form__error_text}>
            {nameValue.errorText || ""}
        </span>
        </label>
        <label>
      <input
        value={passwordValue.value}
        placeholder="Пароль"
        onChange={passwordChangeHandler}
        type='password'
        required
        className={styles.form__input}
        />
        <span className={styles.form__error_text}>
            {passwordValue.errorText || ""}
        </span>
        </label>
      </fieldset>
      <Button type='submit' disabled={isFormValid}>Войти</Button>
      <span className={styles.form__error_text}>{authErrorValue || ""}</span>
    </form>
  )
}
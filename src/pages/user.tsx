import type { FC } from "react";
import { Button } from "../components/button/button";

import styles from "./pages.module.css";
import { useNavigate } from "react-router-dom";

type UserProps = {
  logoutHandler: () => void;
  name: string;
}

export const User: FC<UserProps> = (props) => {
  const {name, logoutHandler} = props;
  const navigate = useNavigate();
  const onClickContacts = () => {
    navigate('/contacts');
  }

  return (
    <>
      <h1 className={styles.headline}>
        Привет, {name}
      </h1>
      <div className={styles.buttons_container}>
        <Button onClick={logoutHandler}>Выйти из аккаунта</Button>
        <Button onClick={onClickContacts}>Перейти в контакты</Button>
      </div>
    </>
  );
};

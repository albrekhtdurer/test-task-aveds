import type { FC } from "react";
import { Button } from "../components/button/button";

import styles from "./pages.module.css";
import { logout } from "../utils/utils";
import { useNavigate } from "react-router-dom";

type UserProps = {
  name: string;
}

export const User: FC<UserProps> = (props) => {
  const {name} = props;
  const navigate = useNavigate();
  const onCLickLogout = () => {
    logout();
    navigate('/');
  }

  const onClickContacts = () => {
    navigate('/contacts');
  }

  return (
    <>
      <h1 className={styles.headline}>
        Привет, {name}
      </h1>
      <div className={styles.buttons_container}>
        <Button onClick={onCLickLogout}>Выйти из аккаунта</Button>
        <Button onClick={onClickContacts}>Перейти в контакты</Button>
      </div>
    </>
  );
};

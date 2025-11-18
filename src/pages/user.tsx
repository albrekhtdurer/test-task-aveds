import type { FC } from "react";
import { Button } from "../components/button/button";

import styles from "./pages.module.css";

type UserProps = {
  name: string;
}

export const User: FC<UserProps> = (props) => {
  const {name} = props;
  return (
    <>
      <h1 className={styles.headline}>
        Привет, {name}
      </h1>
      <div className={styles.buttons_container}>
        <Button>Выйти из аккаунта</Button>
        <Button>Перейти в контакты</Button>
      </div>
    </>
  );
};

import type { FC } from "react";
import { Button } from "../components/button/button";
import heartUrl from '../assets/heart.svg';
import stethoscopeUrl from '../assets/stethoscope.svg';
import storyUrl from '../assets/story.svg';

import styles from "./pages.module.css";
import { Card } from "../components/card/card";

export const Main: FC = () => {
  return (
    <>
      <h1 className={styles.headline}>
        Место для получения медицинской помощи
      </h1>
      <div className={styles.buttons_container}>
        <Button>Войти</Button>
        <Button>Контакты</Button>
      </div>
      <div className={styles.card__container}>
        <Card title='Онлайн-прием' imageUrl={heartUrl} text="Рыба текст"></Card>
        <Card title='Экстренный случай' imageUrl={stethoscopeUrl} text="Рыба текст"></Card>
        <Card title='Лечение рака' imageUrl={storyUrl} text="Рыба текст"></Card>
      </div>
    </>
  );
};

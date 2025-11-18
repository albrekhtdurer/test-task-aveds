import type { FC } from "react";
import { Button } from "../components/button/button";
import heartUrl from '../assets/heart.svg';
import stethoscopeUrl from '../assets/stethoscope.svg';
import storyUrl from '../assets/story.svg';

import styles from "./pages.module.css";
import { Card } from "../components/card/card";
import { useLocation, useNavigate } from "react-router-dom";

export const Main: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onClickLogin = () => navigate('/login', {state: {background: location}});
  const onClickContacts = () => navigate('/contacts');
  return (
    <>
      <h1 className={styles.headline}>
        Место для получения медицинской помощи
      </h1>
      <div className={styles.buttons_container}>
        <Button onClick={onClickLogin}>Войти</Button>
        <Button onClick={onClickContacts}>Контакты</Button>
      </div>
      <div className={styles.card__container}>
        <Card title='Онлайн-прием' imageUrl={heartUrl} text="Рыба текст"></Card>
        <Card title='Экстренный случай' imageUrl={stethoscopeUrl} text="Рыба текст"></Card>
        <Card title='Лечение рака' imageUrl={storyUrl} text="Рыба текст"></Card>
      </div>
    </>
  );
};

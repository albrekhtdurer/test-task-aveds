import styles from './card.module.css';

type CardProps = {
  imageUrl: string;
  title: string;
  text: string;
}

export const Card = (props: CardProps) => {
  const {imageUrl, title, text} = props;
  return (
    <div className={styles.card}>
      <img className={styles.card__image} alt='иконка' src={imageUrl}></img>
      <h2 className={styles.card__title}>{title}</h2>
      <div className={styles.card__separator}></div>
      <p className={styles.card__text}>{text}</p>
    </div>
  )
}
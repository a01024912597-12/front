import styles from "./Card.module.css";

export interface CardType {
  idx?: number;
  title: string;
  content: string;
  author: string;
}

const InfoCard = ({ idx, title, content = '(No Content)', author }: CardType) => {
  return (
    <div className={styles.card} key={idx}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author : {author}</p>
    </div>
  );
};

export default InfoCard;

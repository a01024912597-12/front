import styles from "./Card.module.css";
import type { ReactNode } from "react";

type ChildCard = {
  title?: string;
  children: ReactNode;
};

const CardLayout = ({ title, children }: ChildCard) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
export default CardLayout;

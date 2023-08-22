import Image from "next/image";
import styles from "./card.module.css";

interface CardProps {
    title: string;
    description: string;
    type: string;
}

export function Card({ title, description, type }: CardProps) {
    return (
        <div className={`${styles.card} ${styles[type]}`}>
        </div>
    );
}

export function AddCard() {
    return (
        <div className={`${styles.card} ${styles.add}`}>
            <img src="/img/plus.png" alt="Plus"></img>
        </div>
    );
}

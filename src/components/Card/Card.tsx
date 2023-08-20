import Image from "next/image";
import styles from "./card.module.css";

interface CardProps {
    title: string;
    description: string;
    type: string;
}

export default function Card({ title, description, type }: CardProps) {
    return (
        <div className={`${styles.card} ${styles[type]}`}>
        </div>
    );
}

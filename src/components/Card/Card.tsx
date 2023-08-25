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
            <div style={{marginBottom:0, height:10}}>
                <Image src="/img/close.png" alt="close" width={516} height={516} className={styles.close}></Image>
                
            </div>
            <h4 style={{margin:10}}>{title}</h4>
            <p style={{fontSize:16}}>{description}</p>
            <div className={styles.activity}>
                <Image src="/img/fire-flame-.png" alt="fire" width={516} height={516} className={styles.upcoming}></Image>
                <Image src="/img/check2.png" alt="check" width={516} height={516} className={styles.completed}></Image>
            </div>
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

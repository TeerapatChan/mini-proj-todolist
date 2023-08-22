import cardType from "../Card/card.module.css";
import styles from "./color.module.css";

export default function Color({ type }: { type: string }) {
    return (
            <div className={`${styles.type} ${cardType[type]}`}></div>
    );
}

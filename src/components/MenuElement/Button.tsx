import styles from "./button.module.css";
import Image from "next/image";
import Color from "./Color";

interface Props {
    type: string;
    img?: string; 
}

export function TaskButton({ type, img }: Props) {
    return (
        <div className={`${styles.button} ${styles[type]}`}>
            {img && <Image src={img} alt={type} width={24} height={24} />}
            {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
    );
}

export function ListButton({ type}: Props) {
    return (
        <div className={`${styles.button} ${styles[type]}`}>
            <Color type={type}></Color>
            {type.charAt(0).toUpperCase() + type.slice(1)}
            <Image src="/img/close.png" alt="close" width={516} height={516} className={styles.close}></Image>
        </div>
    );
}

export function AddButton() {
    return (
        <div className={`${styles.button} ${styles.add}`}>
            <Image src="/img/plus.png" alt="add" width={16} height={16} />
            Add new list
        </div>
    );
}

export function LogoutButton() {
    return (
        <div className={`${styles.button} ${styles.logout}`}>
            <Image src="/img/logout.png" alt="logout" width={16} height={16} />
            Logout
        </div>
    )
}
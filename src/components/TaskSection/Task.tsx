import styles from "./task.module.css";
import Image from "next/image";

interface TaskProps {
    type: string;
    img: string;
}

export default function Task({type, img}: TaskProps) {
    return (
        <div className={`${styles.task} ${styles[type]}`}>
            <Image src={img} alt={type} width={24} height={24}/>
            {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
    )
}
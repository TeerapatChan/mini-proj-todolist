import Image from "next/image";
import styles from "./menu.module.css";
import TaskSection from "../TaskSection/TaskSection";


export default function Menu(){
    return (
        <div className={styles.menu}>
            <p>Menu</p>
            <input type="text" className={styles.search} placeholder="Search" />
            <TaskSection></TaskSection>
        </div>
    )
}

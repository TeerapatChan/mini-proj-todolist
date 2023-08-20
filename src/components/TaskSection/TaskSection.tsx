import styles from "./tasksection.module.css";
import Task from "./Task";
import Image from "next/image"; // Import the Image component

export default function TaskSection() {
    return (
        <div>
            <p className={styles.taskBtn}>Tasks</p>
            <Task type="upcoming" img="/img/trending-topic.png"/>
            <Task type="today" img="/img/checklist.png"/>
            <Task type="completed" img="/img/check.png"/>
        </div>
    );
}

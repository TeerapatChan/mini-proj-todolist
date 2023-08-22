import styles from "./section.module.css";
import {ListButton, TaskButton, AddButton} from "./Button";
import Image from "next/image"; 
import Color from "./Color";

export function TaskSection() {
    return (
        <div style={{marginBottom:24}}>
            <p className={`${styles.TitleBtn} ${styles.task}`}>Tasks</p>
            <div className="TaskContainer"></div>
            <TaskButton type="upcoming" img="/img/trending-topic.png"/>
            <TaskButton type="today" img="/img/checklist.png"/>
            <TaskButton type="completed" img="/img/check.png"/>
        </div>
    );
}

export function ListSection() {
    return (
        <div style={{marginBottom:24}}>
            <p className={styles.TitleBtn}>Lists</p>
            <div className="ListContainer">
                <ListButton type="personal"/>
                <ListButton type="work"/>
                <ListButton type="etc"/>
            </div>
            <AddButton></AddButton>
        </div>
    );
}
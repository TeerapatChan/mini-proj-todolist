import styles from "./Todo.module.css";
import {Card, AddCard} from "../Card/Card";

export function Todo() {
    return (
        <div className={styles.todo}>
            <Card title="Title" description="Description" type="work" />
            <Card title="Title" description="Description" type="etc" />
            <Card title="Title" description="Description" type="personal" />
            <Card title="Title" description="Description" type="etc" />
            <Card title="Title" description="Description" type="etc" />
            <AddCard></AddCard>
        </div>
    )
}

export function TodoContainer() {
    return (
        <div className={styles.TodoContainer}>
            <Todo></Todo>
        </div>
    )
}
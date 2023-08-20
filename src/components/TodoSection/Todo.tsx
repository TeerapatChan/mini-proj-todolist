import styles from "./Todo.module.css";
import Card from "../Card/Card";

export default function Todo() {
    return (
        <div className={styles.todo}>
            <Card title="Title" description="Description" type="work" />
            <Card title="Title" description="Description" type="etc" />
            <Card title="Title" description="Description" type="personal" />
            <Card title="Title" description="Description" type="etc" />
            <Card title="Title" description="Description" type="etc" />
        </div>
    )
}
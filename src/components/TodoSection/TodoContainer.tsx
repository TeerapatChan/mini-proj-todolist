import styles from "./TodoContainer.module.css";
import Todo from "./Todo";
export default function TodoContainer() {
    return (
        <div className={styles.TodoContainer}>
            <Todo></Todo>
        </div>
    )
}

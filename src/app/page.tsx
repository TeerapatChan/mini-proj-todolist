import Image from 'next/image'
import styles from './page.module.css'
import {TodoContainer} from '../components/TodoSection/Todo'
import Menu from '../components/Menu/Menu'

export default function Home() {
  return (
    <main className={styles.container}>
      <Menu></Menu>
      <TodoContainer></TodoContainer>
    </main>
  )
}

import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
     
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1587463272361-565200f82b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=40" 
      />

      <div className={styles.profile}>

        <Avatar 
          className={styles.avatar} 
          src="https://avatars.githubusercontent.com/u/95891521?v=4" 
        />

        <strong>Weliton Duarte</strong>
        <span>Wed Developer</span>
      </div>
      
      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar Perfil
          </a>
      </footer>
    </aside>
  )
}
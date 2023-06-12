import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from "@phosphor-icons/react";

interface CommentsProps {
  content: string;
  onDeleteComment: (commen: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentsProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    //opção correta como padrao à ser usado no dia a dia
    setLikeCount((state) => {
      return state + 1
    })


    //Aqui é  o modo mais simples de fazer
      // setLikeCount(likeCount + 1)

    //Voce armazena o estado mais atualizado me uma variavel 
      // const likeMax = likeCount + 1
      // setLikeCount(likeMax + 1)
  }

  return (
    <div className={styles.comment}>

      <Avatar 
        src="https://avatars.githubusercontent.com/u/95891521?v=4"
        hasBorder={false}
        alt=""        
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Weliton Duarte</strong>
              <time title='26 de abril às 15:50' dateTime='2023-04-26 15:48:50'> Cerca de 1h</time>
            </div>
            <button onClick={handleDeleteComment} className={styles.trash} title='Delete'>
            <Trash size={24} />
            </button>

          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button title='Like' onClick={handleLikeComment}>
            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>  
        </footer>

      </div>
    </div>
  )
}
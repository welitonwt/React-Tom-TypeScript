import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'
import { Post, PostType } from './components/Post'
import styles from './App.module.css'
import './global.css'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/welitonwt.png',
      name: 'Weliton',
      role: 'Web Developer'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋 ,'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      
    ],
    publishedAt: new Date('2023-05-29 15:15:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/41982298?v=4',
      name: 'Gabriel',
      role: 'Web Developer fuul-stack'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋 ,'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'paragraph', content: 'jane.design/doctorcare' },
      
    ],
    publishedAt: new Date('2023-05-29 18:15:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/limalucas99.png',
      name: 'Lucas Lima',
      role: 'Web Developer back-end'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋 ,'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'paragraph', content: 'jane.design/doctorcare' },
      
    ],
    publishedAt: new Date('2023-05-29 10:15:00'),
  },
];


export function App() {
  return (
    <div>

      <Header />     

      <div className={styles.wrapper}>

        <SideBar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
        
      </div>

    </div>
  )
}

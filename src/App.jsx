import { Header, Sidebar, Post } from "./components/";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Junior Paes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id at nulla ullam error totam dolore libero nisi, laboriosam voluptatum doloremque quas doloribus ea veniam harum ipsam veritatis ab magnam!"
          />
          <Post
            author="Jonatan Paes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id at nulla ullam error totam dolore libero nisi, laboriosam voluptatum doloremque quas doloribus ea veniam harum ipsam veritatis ab magnam!"
          />
        </main>
      </div>
    </div>
  );
}

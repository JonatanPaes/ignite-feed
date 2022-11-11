import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Junior Paes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id at nulla ullam error totam dolore libero nisi, laboriosam voluptatum doloremque quas doloribus ea veniam harum ipsam veritatis ab magnam!"
      />
      <Post
        author="Jonatan Paes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id at nulla ullam error totam dolore libero nisi, laboriosam voluptatum doloremque quas doloribus ea veniam harum ipsam veritatis ab magnam!"
      />
    </div>
  );
}

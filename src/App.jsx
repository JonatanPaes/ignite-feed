import { Header, Sidebar, Post } from "./components/";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/JonatanPaes.png",
      name: "Juninho Paes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: " Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-12 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Ficon-user-male-avatar-business-5359553%2F&psig=AOvVaw3saW_JOP6w8UeimB1W0rkM&ust=1668438735656000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLiU3eK4q_sCFQAAAAAdAAAAABAE",
      name: "User Test",
      role: "Tester",
    },
    content: [
      { type: "paragraph", content: "Eae 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-10 21:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

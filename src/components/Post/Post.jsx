import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/JonatanPaes.png"
          />
          <div className={styles.authorInfo}>
            <strong>Juninho Paes</strong>

            <span> Web Developer</span>
          </div>
        </div>

        <time title="12 de Novembro às 15:30h " dateTime="20022-05-11 15:30:30">
          Pubicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉<a href=""> jane.design/doctorcare </a>
        </p>
        <p>
          <a href=""> #novoprojeto #nlw #rocketseat </a>
        </p>
      </div>
    </article>
  );
}

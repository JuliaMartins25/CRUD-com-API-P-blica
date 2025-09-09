import styles from "./info.module.css";
import Header from "../components/header/header";

export default function InfoPage() {
  return (

    <div className={styles.page}>
          <Header/>
      <div className={styles.container}>
        <h1 className={styles.title}>Harry Potter API</h1>
        <h3 className={styles.subtitle}>informações</h3>

        <p className={styles.text}>
          <strong>Documentação oficial:</strong>{" "}
          <a
            href="https://hp-api.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Ver Mais
          </a>
        </p>

        <p className={styles.text}>
          <strong>URL Base:</strong> https://hp-api.onrender.com/api/characters
        </p>

        <p className={styles.text}>
          <strong>Endpoint escolhido:</strong> /api/characters
        </p>

        <div className={styles.block}>
          <strong>Atributos principais recebidos:</strong>
          <ul className={styles.list}>
            <li>name</li>
            <li>gender</li>
            <li>house</li>
            <li>dateOfBirth</li>
            <li>alive</li>
            <li>ancestry</li>
            <li>wand</li>
            <li>patronus</li>
            <li>actor</li>
            <li>image</li>
          </ul>
        </div>

        <p className={styles.text}>
          Esta API disponibiliza informações detalhadas sobre o universo de
          Harry Potter, incluindo personagens, casas, varinhas, animais mágicos
          e muito mais. Ela pode ser usada em projetos para exibir dados dos
          filmes e livros de forma prática e organizada.
        </p>
      </div>
    </div>
  );
}

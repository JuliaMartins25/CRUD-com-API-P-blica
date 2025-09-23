"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "antd";
import axios from "axios";
import styles from "./personagens.module.css";

export default function Get() {
  const [loading, setLoading] = useState(false);
  const [characters, setcharacters] = useState([]);
  const [error, setError] = useState(false);

  const router = useRouter();

  const buscarcharacters = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters"
      );
      setcharacters(response.data);
    } catch (error) {
      setError(true);
      console.error("❌ Erro ao buscar comentários:", error);
    } finally {
      setLoading(false);
    }
  };

  const navegarParaPersonagem = (characterId) => {
    router.push(`/get/${characterId}`);
  };

  useEffect(() => {
    buscarcharacters();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Personagens de Harry Potter</h1>
        <Link href="/infomation" className={styles.link}>
          <Button type="primary" size="large" className={styles.botao}>
            Voltar
          </Button>
        </Link>
      </div>

      <h2>Personagens ({characters.length})</h2>
      {loading ? (
        "Carregando..."
      ) : (
        <ul className={styles.list}>
        {characters.map((character) => (
          <li
            key={character.id}
            className={styles.card}
            onClick={() => navegarParaPersonagem(character.id)}
          >
            <hr />
            <div className={styles.imageContainer}>
              <img
                src={character.image}
                alt={character.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.filmTitle}>{character.name}</h2>
              
            </div>
            <p className={styles.subtitulo}>
              <strong>Nome:</strong> {character.name}
            </p>
            <p className={styles.conteudo}>
              <strong>Casa:</strong> {character.house}
            </p>
            <div className={styles.rating}>
                <Link href="/" className={styles.link}>
                  <span className={styles.score}>
                    Saiba Mais {character.rt_score}
                  </span>
                </Link>
              </div>
          </li>
        ))}
      </ul>
      
      )}
      {error && <p>❌ Ocorreu um erro ao buscar os comentários.</p>}
    </div>
  );
}

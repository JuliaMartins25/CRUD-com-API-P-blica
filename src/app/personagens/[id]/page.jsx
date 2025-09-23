"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

import styles from "./page.module.css"

export default function GetByIdPage() {
  const [character, setcharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();
  const characterId = params.id;

  const buscarPersonagem = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://hp-api.onrender.com/api/characters${characterId}`
      );
      setcharacter(response.data);
    } catch (error) {
      setError(true);
      console.error("❌ Erro ao buscar detalhe do personagem:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarPersonagem();
  }, [characterId]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>❌ Erro ao carregar detalhe do personagem</div>;
  if (!character) return <div>Detalhe do personagem não encontrado</div>;

  return (
    <div>
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
      <p className={styles.conteudo}>
        <strong>genêro:</strong> {character.gender}
      </p>
      <p className={styles.conteudo}>
        <strong>Aniversário:</strong> {character.dateOfBirth}
      </p>
      <p className={styles.conteudo}>
        <strong>Vivo/Morto:</strong> {character.alive}
      </p>
      <p className={styles.conteudo}>
        <strong>Ancentral:</strong> {character.ancestry}
      </p>
      <p className={styles.conteudo}>
        <strong>Varinha:</strong> {character.wand}
      </p>
      <p className={styles.conteudo}>
        <strong>Patrono:</strong> {character.patronus}
      </p>
      <p className={styles.conteudo}>
        <strong>actor:</strong> {character.ancestry}
      </p>
    </div>
  );
}

"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>Harry Potter API</h1>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/personagens" className={styles.link}>Ver Personagens</Link>
          <Link href="/post" className={styles.link}>Adicionar Personagens</Link>
          <Link href="/delete" className={styles.link}>Apagar Personagens</Link>
          <Link href="/put" className={styles.link}>Atualizar Personagens</Link>
        </nav>
      </div>
    </header>
  );
}
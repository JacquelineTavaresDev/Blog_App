import Link from "next/link";
import { getArtigos } from "@/lib/artigos";
import { formatarData } from "@/lib/formatarData";
import styles from "./page.module.css";

export default function ArtigosPage() {
  const artigos = getArtigos();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Artigos</h1>

      <section className={styles.list}>
        {artigos.map((artigo) => (
          <article key={artigo.slug} className={styles.card}>
            <h2>{artigo.titulo}</h2>

            <p className={styles.meta}>
              {artigo.autor} • {formatarData(artigo.data)}
            </p>

            <Link
              href={`/artigos/${artigo.slug}`}
              className={styles.link}
            >
              Ler artigo →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

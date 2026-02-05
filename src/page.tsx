import Link from "next/link";
import { getArtigos } from "@/lib/artigos";
import { formatarData } from "@/lib/formatarData";
import styles from "./page.module.css";

export const dynamic = "force-static";

export default async function HomePage() {
  const artigos = getArtigos();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog</h1>

      <section className={styles.list}>
        {artigos.map((artigo) => (
          <article key={artigo.slug} className={styles.card}>
            <h2>
              <Link href={`/artigos/${artigo.slug}`}>
                {artigo.titulo}
              </Link>
            </h2>

            <div className={styles.meta}>
              ✍️ {artigo.autor} · 📅 {formatarData(artigo.data)}
            </div>

            <p className={styles.excerpt}>
              {artigo.conteudo.slice(0, 140)}...
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

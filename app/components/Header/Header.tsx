import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">Meu Blog</Link>
        </h1>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/artigos">Artigos</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}

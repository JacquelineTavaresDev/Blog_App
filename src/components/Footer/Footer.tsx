import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Meu Blog · Desenvolvido com Next.js
      </p>
    </footer>
  );
}

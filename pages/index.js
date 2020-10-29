import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> blueboxb.us | home </title>{" "}
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#"> blueboxb.us! </a>{" "}
        </h1>{" "}
        <p className={styles.description}>
          follow along on our skoolie journey{" "}
        </p>{" "}
        <div className={styles.grid}>
          <a href="/tardis" className={styles.card}>
            <h3> Our T.A.R.D.I.S. </h3>{" "}
            <p> Time And Relative Dimension In Space. </p>{" "}
          </a>{" "}
          <a href="/companions" className={styles.card}>
            <h3> Companions </h3>{" "}
            <p>
              {" "}
              2 Parents, 3 Kids, 2 Dogs, 1 Cat, 2 Geckos & 2 Snakes... in a bus.{" "}
            </p>{" "}
          </a>{" "}
          <a href="/console" className={styles.card}>
            <h3> Console </h3> <p> Beep, boop, beep... Under construction. </p>{" "}
          </a>{" "}
          <a href="/blog" className={styles.card}>
            <h3> Blog </h3>{" "}
            <p>
              {" "}
              Follow along on our crazy, wild ride through time and space!{" "}
            </p>{" "}
          </a>{" "}
        </div>{" "}
      </main>{" "}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright &copy; <a href="https://ninexmobility.com">ninexmobility</a>{" "}
          | Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />{" "}
        </a>{" "}
      </footer>{" "}
    </div>
  );
}

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DUMMY_NAMES from '../public/Names';
import Button from "../components/Button";
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const handleNameChange = e => {
    const value = e.target.value;
    setName(value);

  }
  const handleButtonClick = () => {
    if (name.trim().length != 0) {
      DUMMY_NAMES.push(name);
      router.push("/blogs?name=" + name);
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogger</title>
      </Head>
      <Header />

      <main className={styles.main}>
        <div className={styles.signin}>
          <h3>NAME:</h3>
          <input type="text" className={styles.input} onChange={handleNameChange} />
          <Button type="button" title={"ENTER BLOGGER"} onClick={handleButtonClick} />
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

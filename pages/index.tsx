import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Landing from '../components/Landing';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple Ecom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="Apple-.ico" />
      </Head>

      <Header />
      <main>
        <Landing />
      </main>
    </div>
  );
}

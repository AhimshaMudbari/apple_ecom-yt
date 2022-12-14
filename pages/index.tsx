import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import HeadlessUi from '../components/HeadlessUi';
import Landing from '../components/Landing';
import styles from '../styles/Home.module.css';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';

interface Props {
  categories: [Category];
  products: [Products]
}
export default function Home({ categories, products }) {
  return (
    <div>
      <Head>
        <title>Apple Ecom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="Apple-.ico" />
      </Head>

      <Header />
      <main className='relative h-[200vh]' >
        <Landing />
      </main>
      <section className='relative z-40 bg-[#011121] -mt-[100vh] min-h-screen '>
        <div className='space-y-10 py-14'>
          <h1 className='text-4xl font-medium tracking-wide text-center text-gray-300'>Products</h1>
          <HeadlessUi products={products} categories={categories} />
        </div>
      </section>
    </div>
  );
}


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories()
  const products = await fetchProducts();
  return {
    props: { categories, products },
  }
}

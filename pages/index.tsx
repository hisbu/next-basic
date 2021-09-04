import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/headers';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home page">

        <Image src="/gnome.jpg" width={300} height={200} alt="gnome" />

        <h1 className={styles['title-homepage']}>Welcome hisbu</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <Image src="/nologo.jpg" width={300} height={200} alt="nologo" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum mauris eget nunc lobortis, elementum vulputate nulla elementum.</p>
        <Image src="/4K.jpg" width={300} height={200} alt="4K" />
      </Layout>
    </>
  );
}

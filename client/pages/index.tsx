import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Next Facebook</title>
        <meta name="description" content="Generated by create next app" /> 
      </Head>

      <h1>Hello World</h1>
    </div>
  )
}

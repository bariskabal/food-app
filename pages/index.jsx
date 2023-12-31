import Header from '../components/layout/Header'
import Head from 'next/head'
import Home from './home/index'
import Input from '@/components/form/Input'
import Footer from '../components/layout/Footer'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Fooder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}


import Head from 'next/head';
import styles from './index.module.scss'
import HeroSection from '@/components/landing-page-components/HeroSection';
import ProductDemo from '@/components/landing-page-components/ProductDemo';
import UserTypes from '@/components/landing-page-components/UserTypes';
import WhyUseUs from '@/components/landing-page-components/WhyUseUs';
import ContactUs from '@/components/landing-page-components/ContactUs';

export default function Home() {

  return (
    <>
      <Head>
        <title>TruckDispatch - Freight Transportation Services | Connect with Verified Carriers and Shippers</title>
        <meta name="description" content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation. Whether you're shipping goods across town or across the country, we can help you find the right truck to get the job done. Contact us today to learn more about our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeroSection
          title="Transform your <br /> Road freight & Cargo Delivery experience"
          subtitle="With vetted transporters, goods security, insurance, we promise a swift, reliable, and sustainable road freight transport."
          btnActionText='Get Started'
          btnUrl="https://dashboard.gettruckdispatch.com/auth/join"
        />
        <ProductDemo />
        <UserTypes />
        <WhyUseUs />
        <ContactUs />
      </main>
    </>
  )
}

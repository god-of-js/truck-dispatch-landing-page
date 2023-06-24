import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './index.module.scss'
import TruckImgRounded from '../assets/Truck-img-rounded.svg';
import HeroTruck from '../assets/hero-truck-full.svg'
import verifiedCheck from '../assets/verified-check.svg'
import RoadImage from '../assets/Road.svg'

const UiButton = dynamic(() => import('@/components/ui/UiButton'));

export default function Home() {
  const achievements = [
    {
      title: 'BUSINESS EXPERIENCE ',
      stat: '40 +'
    },
    {
      title: 'TRUCKS & VANS ',
      stat: '1000 +'
    },
    {
      title: 'TRANSPORTER NETWORK',
      stat: '300 + '
    },
  ]

  return (
    <>
      <Head>
        <title>TruckDispatch - Freight Transportation Services | Connect with Verified Carriers and Shippers</title>
        <meta name="description" content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation. Whether you're shipping goods across town or across the country, we can help you find the right truck to get the job done. Contact us today to learn more about our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id='home' className={styles['hero-section']}>
          <div className={styles['hero-section__inner']}>
            <div className={styles["page-width"]}>
              <h2>
                Transform <Image src={TruckImgRounded} alt='truck image' /> your Road Freight Transport Experience
              </h2>
              <div className={styles['hero-subtitle-container']}>
                <div className={styles['hero-subtitle-container__inner']}>
                  <p>
                    With vetted transporters, goods security, insurance, we promise a swift, reliable, and sustainable road freight transport.
                  </p>
                  <a href="https://dashboard.gettruckdispatch.com/auth/join/agent">
                    <UiButton>
                      Get Started
                    </UiButton>
                  </a>
                </div>
              </div>
            </div>

            <div className={`${styles.achievements} ${styles['page-width']}`}>
              <div className={styles["achievements__inner"]}>

              <div className={styles.achievement}>
                <h3>40 +</h3>
                <p>YEARS OF <br />  EXPERIENCE </p>
              </div>
              <div className={styles.achievement}>
                <h3>1000 +</h3>
                <p>TRUCKS &  <br />VANS </p>
              </div>
              <div className={styles.achievement}>
                <h3>300 + </h3>
                <p>TRANSPORTER <br /> NETWORK</p>
              </div>
              <div className={styles['verified-container']}>
                <Image src={verifiedCheck} alt='verified check mark' />
              </div>
              </div>
            </div>

            <div className={styles['highway-images']}>
              <Image src={HeroTruck} className={styles['truck-image']} alt='truck' />
              <Image src={RoadImage} className={styles['road-image']} alt='image of a road' />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

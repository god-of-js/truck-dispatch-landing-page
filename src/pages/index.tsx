import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './index.module.scss'
import TruckImgRounded from '../assets/Truck-img-rounded.svg';
import HeroTruck from '../assets/hero-truck-full.svg'
import verifiedCheck from '../assets/verified-check.svg'
import RoadImage from '../assets/Road.svg'
import Shipper1 from '../assets/shipper-1.jpeg'
import Shipper2 from '../assets/shipper-2.jpeg'
import Shipper3 from '../assets/shipper-3.jpeg'
import Shipper4 from '../assets/shipper-4.jpeg'
import Shipper5 from '../assets/shipper-5.jpeg'
import Van from '../assets/van.jpeg'


const UiButton = dynamic(() => import('@/components/ui/UiButton'));
const UiAvatar = dynamic(() => import('@/components/ui/UiAvatar'));
const UiIcon = dynamic(() => import('@/components/ui/UiIcon'));

export default function Home() {
  const shipperAvatars = [
    Shipper1,
    Shipper2,
    Shipper3,
    Shipper4,
    Shipper5
  ];

  return (
    <>
      <Head>
        <title>TruckDispatch - Freight Transportation Services | Connect with Verified Carriers and Shippers</title>
        <meta name="description" content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation. Whether you're shipping goods across town or across the country, we can help you find the right truck to get the job done. Contact us today to learn more about our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles['hero-section']}>
          <div className={styles['hero-section__inner']}>
            <div className={styles["page-width"]}>
              <h1>
                Transform <Image src={TruckImgRounded} alt='truck image' /> your Road Freight Transport Experience
              </h1>
              <div className={styles['hero-subtitle-container']}>
                <div className={styles['hero-subtitle-container__inner']}>
                  <p>
                    With vetted professional transporters, goods security, insurance, we promise a swift, reliable, and sustainable road freight transport.
                  </p>
                  <a href="https://dashboard.gettruckdispatch.com/auth/join">
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
        <section className={`${styles['page-width']} ${styles['client-user-type-group']}`}>
          <header>
            <h2>
              Transport solutions for Businesses & Individuals to  <span className={styles.highlight}>Solve</span> any cargo transport problems
            </h2>
            <p className={styles['with-border-top']}>Whether you’re an individual or a company, we have solutions available for you. See the category that best fits you.</p>
          </header>
          <div className={styles['user-type']}>
            <div className={styles['user-type__avatars']}>
              {shipperAvatars.map((avatar, index) => (<div key={index} className={styles.avatar}><UiAvatar avatar={avatar} /></div>))}
            </div>
            <div className={styles['user-type__details']}>
              <h3>Shippers / Agents</h3>
              <p>Shippers/Agents are individuals who directly or indirectly have  cargo in need of Transport</p>
              <a href="">
                <UiButton variant="primary-text" size="text"> <span>CONTINUE AS A SHIPPER</span><UiIcon icon="ArrowRight" /></UiButton>
              </a>
            </div>
          </div>
          <div className={`${styles['user-type']} ${styles['invert']}`}>
            <div className={styles['user-type__avatars']}>
              {shipperAvatars.map((avatar, index) => (<div key={index} className={styles.avatar}><UiAvatar avatar={avatar} /></div>))}
            </div>
            <div className={styles['user-type__details']}>
              <h3>Companies</h3>
              <p>These are institutions or organizations of any size who directly or indirectly have  cargo in need of Transport.</p>
              <a href="">
                <UiButton variant="primary-text" size="text"> <span>CONTINUE AS A COMPANY</span><UiIcon icon="ArrowRight" /></UiButton>
              </a>
            </div>
          </div>
        </section>
        <section className={`${styles['page-width']} ${styles['service-user-type-group']}`}>
          <header>
            <div className={styles["van-image"]}>
              <Image src={Van} alt="Truckdispatch van image" />
            </div>
            <div className='heading-content-beside-image'>
              <h2>
                <span className={styles.highlight}>Better</span> working experience & proper Truck Management
              </h2>
              <p>For transporters/truck drivers & transport companies of any size, we have a complete toolbox of practical solutions to manage your every day hassles and provide you with mouth watering jobs.</p>
            </div>
          </header>
          <div className={`${styles['user-type']} ${styles['invert']}`}>
            <div className={styles['user-type__avatars']}>
              {shipperAvatars.map((avatar, index) => (<div key={index} className={styles.avatar}><UiAvatar avatar={avatar} /></div>))}
            </div>
            <div className={styles['user-type__details']}>
              <h3>Shippers / Agents</h3>
              <p>Shippers/Agents are individuals who directly or indirectly have  cargo in need of Transport</p>
              <a href="">
                <UiButton variant="primary-text" size="text"> <span>CONTINUE AS A SHIPPER</span><UiIcon icon="ArrowRight" /></UiButton>
              </a>
            </div>
          </div>
          <div className={`${styles['user-type']}`}>
            <div className={styles['user-type__avatars']}>
              {shipperAvatars.map((avatar, index) => (<div key={index} className={styles.avatar}><UiAvatar avatar={avatar} /></div>))}
            </div>
            <div className={styles['user-type__details']}>
              <h3>Companies</h3>
              <p>These are institutions or organizations of any size who directly or indirectly have  cargo in need of Transport.</p>
              <a href="">
                <UiButton variant="primary-text" size="text"> <span>CONTINUE AS A COMPANY</span><UiIcon icon="ArrowRight" /></UiButton>
              </a>
            </div>
          </div>
        </section>
        <section className={styles["logistics-is-a-peoples-business"]}>
          <div className={`${styles['page-width']} ${styles['logistics-is-a-peoples-business__inner']}`}>
            <div className={styles["peoples-business-hero-section"]}>
              <Image src={TruckImgRounded} alt='truck image' />
              <h3>Logistics is a people's business. We are convinced the best value is created by personal touch.</h3>

              <a href="https://dashboard.gettruckdispatch.com/auth/join">
                <UiButton>
                  Get Started
                </UiButton>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

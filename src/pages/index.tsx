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
import Transporter1 from '../assets/transporter-1.jpeg'
import Transporter2 from '../assets/transporter-2.jpeg'
import Transporter3 from '../assets/transporter-3.jpeg'
import Transporter4 from '../assets/transporter-4.jpeg'
import Transporter5 from '../assets/transporter-5.jpeg'
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

  const transporterAvatars = [
    Transporter1,
    Transporter2,
    Transporter3,
    Transporter4,
    Transporter5
  ]

  const peopleBenefits = [
    {
      title: 'Market Expertise',
      paragraph: 'Our organization comprises of leaders in the transport business with over 40 years experience.'
    },
    {
      title: 'Personal Contact',
      paragraph: 'Customer support and various means of communication available to take care of your professional needs.'
    },
    {
      title: 'Operational Excellence',
      paragraph: 'Long-term partnerships with vetted professional transporters.'
    },
  ]

  const clipboardTick = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="clipboard-tick">
      <g id="vuesax/bold/clipboard-tick">
        <g id="clipboard-tick_2">
          <path id="Vector" d="M14.35 2H9.65001C8.61001 2 7.76001 2.84 7.76001 3.88V4.82C7.76001 5.86 8.60001 6.7 9.64001 6.7H14.35C15.39 6.7 16.23 5.86 16.23 4.82V3.88C16.24 2.84 15.39 2 14.35 2Z" fill="#4326C4" />
          <path id="Vector_2" d="M17.24 4.81998C17.24 6.40998 15.94 7.70998 14.35 7.70998H9.65004C8.06004 7.70998 6.76004 6.40998 6.76004 4.81998C6.76004 4.25998 6.16004 3.90998 5.66004 4.16998C4.25004 4.91998 3.29004 6.40998 3.29004 8.11998V17.53C3.29004 19.99 5.30004 22 7.76004 22H16.24C18.7 22 20.71 19.99 20.71 17.53V8.11998C20.71 6.40998 19.75 4.91998 18.34 4.16998C17.84 3.90998 17.24 4.25998 17.24 4.81998ZM15.34 12.73L11.34 16.73C11.19 16.88 11 16.95 10.81 16.95C10.62 16.95 10.43 16.88 10.28 16.73L8.78004 15.23C8.49004 14.94 8.49004 14.46 8.78004 14.17C9.07004 13.88 9.55004 13.88 9.84004 14.17L10.81 15.14L14.28 11.67C14.57 11.38 15.05 11.38 15.34 11.67C15.63 11.96 15.63 12.44 15.34 12.73Z" fill="#4326C4" />
        </g>
      </g>
    </g>
  </svg>

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
              {transporterAvatars.map((avatar, index) => (<div key={index} className={styles.avatar}><UiAvatar avatar={avatar} /></div>))}
            </div>
            <div className={styles['user-type__details']}>
              <h3>Transporters</h3>
              <p>Transporters are individuals that provide transportation services for moving goods from one location to another </p>
              <a href="">
                <UiButton variant="primary-text" size="text"> <span>CONTINUE AS A TRANSPORTER</span><UiIcon icon="ArrowRight" /></UiButton>
              </a>
            </div>
          </div>
          <div className={`${styles['user-type']}`}>
            <div className={styles['user-type__avatars']}>
              {shipperAvatars.map((avatar, index) => (<div key={index} className={styles.avatar}><UiAvatar avatar={avatar} /></div>))}
            </div>
            <div className={styles['user-type__details']}>
              <h3>Transport Companies</h3>
              <p>These are institutions or organizations of any size that provide transportation services for moving goods from one location to another.</p>
              <a href="">
                <UiButton variant="primary-text" size="text"> <span>CONTINUE AS A TRANSPORT COMPANY</span><UiIcon icon="ArrowRight" /></UiButton>
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
            <div className={styles["people-business-list"]}>
              {peopleBenefits.map((benefit) => <div key={benefit.title} className={styles["list-item"]}>
                <div className={styles["check-container"]}>
                  {clipboardTick}
                </div>
                <div className={styles["content"]}>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.paragraph}</p>
                </div>
              </div>)}
            </div>
          </div>
        </section>
        <section className={styles["contact-us"]}>
          
        </section>
      </main>
    </>
  )
}

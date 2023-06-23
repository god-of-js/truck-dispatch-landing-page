import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Icons } from '@/components/ui/UiIcon';
import styles from './index.module.scss'
import TruckImgRounded from '../assets/Truck-img-rounded.svg';
import HeroTruck from '../assets/hero-truck-full.svg'
import verifiedCheck from '../assets/verified-check.svg'
import RoadImage from '../assets/Road.svg'

const UiIcon = dynamic(() => import('@/components/ui/UiIcon'));
const UiButton = dynamic(() => import('@/components/ui/UiButton'));
const FAQList = dynamic(() => import('@/components/faqs/FAQList'));

interface BenefitObj {
  icon: Icons;
  title: string;
  subtitle: string;
}
interface ListObj {
  title: string;
  subtitle: string;
}
export default function Home() {
  const benefits: BenefitObj[] = [
    {
      icon: 'ShieldCheck',
      title: 'Access to Verified Transporters',
      subtitle:
        'Our transporters undergo rigorous identity and fraud verification before vetting to prevent fraud and protect you and your goods.',
    },
    {
      icon: 'Kanban',
      title: 'Transport Management',
      subtitle:
        'Benefit from transparency and cost savings while we manage all your transports and logistics service providers via the TruckDispatch platform.',
    },
    {
      icon: 'Truck',
      title: 'Freight Forwarding',
      subtitle:
        'Use our proven transport capacity on our Nigerian-wide tradelane network. With our partner network of highly qualified transporters, we offer you the right capacity at the right time.',
    },
  ];
  const personalInteractionData: ListObj[] = [
    {
      title: 'Market Expertise',
      subtitle:
        'Our organization comprises of seasoned transporters to take care of your business.',
    },
    {
      title: 'Personal Contact',
      subtitle:
        'Customer support and various means of communication available to take care of your professional needs.',
    },
    {
      title: 'Operational Excellence',
      subtitle: 'Long-term partnerships with vetted transporters.',
    },
  ];
  const becomeParterData = [
    {
      title: 'The truck is always full',
      subtitle:
        'We provide you with loads that are based on your vehicle, location, and availability, free of charge: it is up to you to decide whether you want to claim them or not. We offer the flexibility that you need to improve the operating account of your trucks.',
      boldSubtitleStarter: 'We grow together.',
    },
    {
      title: 'Exclusive offers(coming soon)',
      subtitle:
        'We provide you with offers such as insurance to further reduce the cost of repairs and damages incurred on your vehicle. We also provide an additional method of gaining through referral systems.',
      boldSubtitleStarter: 'Get exclusive benefits.',
    },
    {
      title: 'Quick and assured payments',
      subtitle:
        'Payment would be completed immediately we verify your loading status before the trip starts.',
      boldSubtitleStarter: 'Say goodbye to late payments.',
    },
    {
      title: 'Always by your side',
      subtitle:
        'Our customer care is always available to answer all questions and assist in anyway possible.',
      boldSubtitleStarter: 'You are not alone',
    },
    {
      title: 'Planned journeys',
      subtitle:
        "TruckDispatch's mobile responsive website allows you to organize the routes in advance, centralize paperwork management, manage and visualize earnings, and have all the information within reach.",
      boldSubtitleStarter:
        'Keep everything under control with your mobile phone.',
    },
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
        <section id='home' className={styles.hero_section}>
          <div className={styles.hero_section_inner}>
            <div className={styles.hero_text}>
              <h2>
                Transform <Image src={TruckImgRounded} alt='truck image'/> your Road Freight Transport Experience
              </h2>
            </div>
            <div className={styles.hero_subtitle}>
              <div>
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
            <div className={styles.achievements_highway_images_container}>
              <div className={styles.achievements}>
                <div>
                  <h3>40 +</h3>
                  <p>BUSINESS EXPERIENCE</p>
                </div>
                <div>
                  <h3>500 +</h3>
                  <p> TRUCKS & VANS</p>
                </div>
                <div>
                  <h3>50 +</h3>
                  <p>TRANSPORTERS NETWORK</p>
                </div>
                <div className={styles.verified_container}>
                  <Image src={verifiedCheck} alt='verified check mark'/>
                </div>
              </div>
              <div className={styles.highway_images}>
                <div className={styles.road_image}>
                  <Image  src={RoadImage} alt='image of a road'/>
                </div>
                <div className={styles.truck_image}>
                  <Image src={HeroTruck} alt='truck'/>
                </div>
              </div>
            </div>
            
            
          </div>
          
        </section>
      </main>
    </>
  )
}

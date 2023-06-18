import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Icons } from '@/components/ui/UiIcon';
import styles from '@/styles/Home.module.scss'
import TruckImage from '../assets/truck-image.jpeg';
import AgentWithTrailer from '../assets/agent-with-trailer.jpeg';
import TruckImgRounded from '../assets/Truck-img-rounded.svg';
import HeroTruck from '../assets/Hero-Truck.svg'
import verifiedCheck from '../assets/verified-check.svg'

import Link from 'next/link';
import ListComponent from '@/components/ui/UiList';

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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quia enim quo obcaecati ab doloremque cumque maiores aliquid facere numquam fugiat inventore dolorum, praesentium fugit dignissimos. Et, dolores, illum minus accusamus alias vero, consequuntur impedit a maxime commodi at ipsam autem incidunt. Voluptate numquam quos ipsum a eos ad ab!
              <div className={styles.truck_image}>
                <Image src={HeroTruck} alt='truck'/>
              </div>
            </div>
          </div>
          
        </section>
        <section className={styles.benefits}>
          <div className={styles.benefits_inner}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefit}>
                <div className={styles.icon}>
                  <UiIcon icon={benefit.icon} size="40" />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.subtitle}</p>
              </div>
            ))}

          </div>
        </section>
        <section className={styles.personal_interaction}>
          <div className={styles.text_content}>
            <h3>Logistics is a {"people's"} business</h3>
            <p>We are convinced the best value is created by personal touch.</p>
            <ul>
              {personalInteractionData.map((item, index) => (
                <li key={index}>
                  <div className={styles.icon_container}>
                    <UiIcon icon="Checks" size="24" />
                  </div>
                  <div className={styles.list_text_content}>
                    <div className={styles.list_text_content__title}>{item.title}</div>
                    <div className={styles.list_text_content__subtitle}>
                      {item.subtitle}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="https://dashboard.gettruckdispatch.com/auth/join/agent">
              <UiButton isSquare variant="dark">
                Get Started <UiIcon icon="ArrowUpRight" />
              </UiButton>
            </Link>
          </div>
          <div className={styles.img_container}>
            <Image src={AgentWithTrailer} alt="Truck dispatch agent" />
          </div>
        </section>
        <section className={styles.become_our_partner}>
          <div className={styles.become_our_partner_inner}>
            <div className={styles.main_content}>
              <h3>
                WE IMPROVE THE WORKING EXPERIENCE OF MORE THAN 200 TRANSPORTERS
                REGISTERED IN OUR NETWORK
              </h3>
              <p>
                The quality of our road freight service would not be possible
                without the professionalism of the transporters that collaborate
                with TruckDispatch.
              </p>
              <div className={styles.actions_container}>
                <a href="https://dashboard.gettruckdispatch.com/auth/join/transporter">
                  <UiButton isSquare>
                    Join As a transporter <UiIcon icon="ArrowUpRight" />
                  </UiButton>
                </a>
                <a href="https://dashboard.gettruckdispatch.com/auth/join/agent">
                  <UiButton variant="secondary" isSquare>
                    I am an Agent
                  </UiButton>
                </a>
              </div>
            </div>
            <div className={styles.list_content}>
              <ListComponent data={becomeParterData} />
            </div>
          </div>
        </section>
        <section className={styles.faqs}>

          <div className={styles.faqs_inner}>
            <div className={styles.go_to_faqs}>
              <h3>DO YOU HAVE ANY QUESTIONS ABOUT TRUCKDISPATCH?</h3>
              <div className={styles.action_btns}>
                <Link href="/faqs">
                  <UiButton isSquare>
                    Go To FAQs <UiIcon icon="ArrowUpRight" />
                  </UiButton>
                </Link>
              </div>
            </div>
            <div className={styles.faq_list}>
              <FAQList isMini />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

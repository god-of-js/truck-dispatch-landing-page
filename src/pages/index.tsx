import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import  { Icons } from '@/components/ui/UiIcon';
import styles from '@/styles/Home.module.scss'
import TruckImage from '../assets/truck-image.jpeg';

const UiIcon = dynamic(() => import('@/components/ui/UiIcon'));
const UiButton = dynamic(() => import('@/components/ui/UiButton'));

interface BenefitObj {
  icon: Icons;
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
  return (
    <>
      <Head>
        <title>TruckDispatch - Freight Transportation Services | Connect with Verified Carriers and Shippers</title>
        <meta name="description" content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation. Whether you're shipping goods across town or across the country, we can help you find the right truck to get the job done. Contact us today to learn more about our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.hero_section}>
          <div className={styles.text_content}>
            <div className={styles.text_content_inner}>
              <h2>
                The fastest, secure and most sustainable solution for road freight
                transport
              </h2>
              <p>
                Transport Management. Vetted and verified transporters. Goods
                Security. Goods Insurance. The best customer experience. Thanks to
                its powerful network of professional transporters, Truckdispatch
                makes road freight transport a swift, reliable, and sustainable
                experience.
              </p>
              <div className={styles.btn_container}>
                <a href="https://www.gettruckdispatch.com/auth/join/agent">
                  <UiButton>
                    Get Started <UiIcon icon="ArrowUpRight" />
                  </UiButton>
                </a>
                <a href="https://www.gettruckdispatch.com/auth/join/agent">
                  <UiButton variant="secondary">
                    I am a transporter
                  </UiButton>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.img_container}>
            <Image src={TruckImage} alt="Truckdispatch hero" layout="responsive" objectFit="contain" />
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
        {/* <PersonalInteraction />
      <BecomeOurPartner />
      <FAQs /> */}
      </main>
    </>
  )
}

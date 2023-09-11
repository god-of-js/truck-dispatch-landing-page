import styles from './shippers.module.scss';
import HeroSection from "@/components/landing-page-components/HeroSection";
import ContactUs from '@/components/landing-page-components/ContactUs';
import FirstPlace from '@/assets/first-place.jpeg'
import Security from '@/assets/security.jpeg'
import Ratings from '@/assets/ratings.jpeg'
import DigitalizedComputer from '@/assets/digitalized-computer.jpeg'
import HandShake from '@/assets/handshake.jpeg'
import Van from '@/assets/van.svg'
import BenefitCard from '@/components/BenefitCard';
import UiButton from '@/components/ui/UiButton';
import Image from 'next/image';

export default function ShippersPage() {
    const benefits = [
        {
            img: FirstPlace,
            title: 'Transparent Pricing',
            subtitle: 'We bypass middlemen and link shippers directly with transporters enabling us to be more transparent and cost-effective.'
        },
        {
            img: Security,
            title: 'Security',
            subtitle: 'We operate with vetted professional drivers which reduces the risks of fraud and theft.'
        },
        {
            img: Ratings,
            title: 'Ratings',
            subtitle: 'Make informed decisions about the transporter for your trip by looking through the transporter\'s ratings.'
        },
        {
            img: DigitalizedComputer,
            title: 'Digitalized System',
            subtitle: 'Shippers can save time and money with our fully digital solution from trip creation to trip completion.'
        },
        {
            img: HandShake,
            title: 'Customer Support',
            subtitle: 'Our logistics professionals have the experience to assist shippers and carriers. With our dedicated support team around Nigeria, we are just a call away.'
        }
    ]

    return (
        <div className={styles.shippers_page}>
            <HeroSection title="Experience <br /> seamless & efficient transportation" btnActionText="Get Started" btnActionUrl="" subtitle="Our commitment to reliability ensures stress-free shipments, while our transparent cost structure provides clarity and peace of mind for shippers." />
            <div className={styles.benefits}>
                <header>
                    <h2>Exclusive benefits <br /> for Shippers</h2>
                    <div className={styles.header_line} />
                </header>
                <div className={styles.benefits__list}>
                    {benefits.map((benefit, index) => <BenefitCard key={index} benefit={benefit} />)}
                    <div className={styles.get_started}>
                        <div className={styles.content}>

                        <p>Start enjoying better working experience & transport solutions tailored for you.</p>
                        <UiButton variant='white'>Get Started</UiButton>
                        </div>
                        <div className={styles.img_container}>
                            <Image src={Van} alt="Truckdispatch truck" />
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs />

        </div>
    )
}
import styles from './transporters.module.scss';
import HeroSection from "@/components/landing-page-components/HeroSection";
import ContactUs from '@/components/landing-page-components/ContactUs';
import FirstPlace from '@/assets/first-place.jpeg'
import RockHand from '@/assets/rockhand.jpeg'
import Woohhoo from '@/assets/woohhoo.jpeg'
import Diamond from '@/assets/diamond.jpeg'
import Van from '@/assets/van.svg'
import BenefitCard from '@/components/BenefitCard';
import UiButton from '@/components/ui/UiButton';
import UiList from '@/components/ui/UiList';
import Image from 'next/image';
import Head from 'next/head';

export default function TransportersPage() {
    const benefits = [
        {
            img: FirstPlace,
            title: 'Get paid fast and reliably',
            subtitle: 'Assigned trips are pre-paid, with payment processing handled seamlessly and automatically. Once you submit the loading proof, payment is swiftly initiated, ensuring a hassle-free experience for you.'
        },
        {
            img: RockHand,
            title: 'Less admin work',
            subtitle: 'We will go through cumbersome tender processes for you! Pick the routes that fit you best without the administrative hassle. This way, you can grow sustainably while avoiding transport packages that you are not 100% comfortable with.'
        },
        {
            img: Woohhoo,
            title: 'Plan your transports',
            subtitle: 'View all transports assigned to you in a detailed manner to assist in planning. this helps you plan better by understanding each transport\'s details and timing. This way, you can use your resources, time, and efforts wisely, making sure everything goes smoothly.'
        },
        {
            img: Diamond,
            title: 'Deals',
            subtitle: 'Engage in a wide array of advantageous opportunities, including but not limited to enticing referral bonuses, exclusive promotions, and a plethora of other enticing deals. '
        },
    ]

    const howItWorks = [
        {
            title: 'Get Started',
            subtitle: 'Register as either a transporter or a transport company to access carrier benefits.',
            icon: <svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/bold/verify">
                    <g id="verify">
                        <path id="Vector" d="M19.5599 9.74006L18.1999 8.16006C17.9399 7.86006 17.7299 7.30006 17.7299 6.90006V5.20006C17.7299 4.14006 16.8599 3.27006 15.7999 3.27006H14.0999C13.7099 3.27006 13.1399 3.06006 12.8399 2.80006L11.2599 1.44006C10.5699 0.850059 9.43988 0.850059 8.73988 1.44006L7.16988 2.81006C6.86988 3.06006 6.29988 3.27006 5.90988 3.27006H4.17988C3.11988 3.27006 2.24988 4.14006 2.24988 5.20006V6.91006C2.24988 7.30006 2.03988 7.86006 1.78988 8.16006L0.439883 9.75006C-0.140117 10.4401 -0.140117 11.5601 0.439883 12.2501L1.78988 13.8401C2.03988 14.1401 2.24988 14.7001 2.24988 15.0901V16.8001C2.24988 17.8601 3.11988 18.7301 4.17988 18.7301H5.90988C6.29988 18.7301 6.86988 18.9401 7.16988 19.2001L8.74988 20.5601C9.43988 21.1501 10.5699 21.1501 11.2699 20.5601L12.8499 19.2001C13.1499 18.9401 13.7099 18.7301 14.1099 18.7301H15.8099C16.8699 18.7301 17.7399 17.8601 17.7399 16.8001V15.1001C17.7399 14.7101 17.9499 14.1401 18.2099 13.8401L19.5699 12.2601C20.1499 11.5701 20.1499 10.4301 19.5599 9.74006ZM14.1599 9.11006L9.32988 13.9401C9.18988 14.0801 8.99988 14.1601 8.79988 14.1601C8.59988 14.1601 8.40988 14.0801 8.26988 13.9401L5.84988 11.5201C5.55988 11.2301 5.55988 10.7501 5.84988 10.4601C6.13988 10.1701 6.61988 10.1701 6.90988 10.4601L8.79988 12.3501L13.0999 8.05006C13.3899 7.76006 13.8699 7.76006 14.1599 8.05006C14.4499 8.34006 14.4499 8.82006 14.1599 9.11006Z" fill="#4326C4" />
                    </g>
                </g>
            </svg>

        },
        {
            title: 'Bid For Jobs',
            subtitle: 'Bid for trips broadcasted to the network with your own pricing and stand a chance to be considered by the responsible shipper',
            icon: <svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/bold/verify">
                    <g id="verify">
                        <path id="Vector" d="M19.5599 9.74006L18.1999 8.16006C17.9399 7.86006 17.7299 7.30006 17.7299 6.90006V5.20006C17.7299 4.14006 16.8599 3.27006 15.7999 3.27006H14.0999C13.7099 3.27006 13.1399 3.06006 12.8399 2.80006L11.2599 1.44006C10.5699 0.850059 9.43988 0.850059 8.73988 1.44006L7.16988 2.81006C6.86988 3.06006 6.29988 3.27006 5.90988 3.27006H4.17988C3.11988 3.27006 2.24988 4.14006 2.24988 5.20006V6.91006C2.24988 7.30006 2.03988 7.86006 1.78988 8.16006L0.439883 9.75006C-0.140117 10.4401 -0.140117 11.5601 0.439883 12.2501L1.78988 13.8401C2.03988 14.1401 2.24988 14.7001 2.24988 15.0901V16.8001C2.24988 17.8601 3.11988 18.7301 4.17988 18.7301H5.90988C6.29988 18.7301 6.86988 18.9401 7.16988 19.2001L8.74988 20.5601C9.43988 21.1501 10.5699 21.1501 11.2699 20.5601L12.8499 19.2001C13.1499 18.9401 13.7099 18.7301 14.1099 18.7301H15.8099C16.8699 18.7301 17.7399 17.8601 17.7399 16.8001V15.1001C17.7399 14.7101 17.9499 14.1401 18.2099 13.8401L19.5699 12.2601C20.1499 11.5701 20.1499 10.4301 19.5599 9.74006ZM14.1599 9.11006L9.32988 13.9401C9.18988 14.0801 8.99988 14.1601 8.79988 14.1601C8.59988 14.1601 8.40988 14.0801 8.26988 13.9401L5.84988 11.5201C5.55988 11.2301 5.55988 10.7501 5.84988 10.4601C6.13988 10.1701 6.61988 10.1701 6.90988 10.4601L8.79988 12.3501L13.0999 8.05006C13.3899 7.76006 13.8699 7.76006 14.1599 8.05006C14.4499 8.34006 14.4499 8.82006 14.1599 9.11006Z" fill="#4326C4" />
                    </g>
                </g>
            </svg>

        },
        {
            title: 'Get Assigned',
            subtitle: 'If the shipper is okay with your profile, he may either negotiate or make full payment through our platform. An email would be sent to notify you that you have been selected.',
            icon: <svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/bold/verify">
                    <g id="verify">
                        <path id="Vector" d="M19.5599 9.74006L18.1999 8.16006C17.9399 7.86006 17.7299 7.30006 17.7299 6.90006V5.20006C17.7299 4.14006 16.8599 3.27006 15.7999 3.27006H14.0999C13.7099 3.27006 13.1399 3.06006 12.8399 2.80006L11.2599 1.44006C10.5699 0.850059 9.43988 0.850059 8.73988 1.44006L7.16988 2.81006C6.86988 3.06006 6.29988 3.27006 5.90988 3.27006H4.17988C3.11988 3.27006 2.24988 4.14006 2.24988 5.20006V6.91006C2.24988 7.30006 2.03988 7.86006 1.78988 8.16006L0.439883 9.75006C-0.140117 10.4401 -0.140117 11.5601 0.439883 12.2501L1.78988 13.8401C2.03988 14.1401 2.24988 14.7001 2.24988 15.0901V16.8001C2.24988 17.8601 3.11988 18.7301 4.17988 18.7301H5.90988C6.29988 18.7301 6.86988 18.9401 7.16988 19.2001L8.74988 20.5601C9.43988 21.1501 10.5699 21.1501 11.2699 20.5601L12.8499 19.2001C13.1499 18.9401 13.7099 18.7301 14.1099 18.7301H15.8099C16.8699 18.7301 17.7399 17.8601 17.7399 16.8001V15.1001C17.7399 14.7101 17.9499 14.1401 18.2099 13.8401L19.5699 12.2601C20.1499 11.5701 20.1499 10.4301 19.5599 9.74006ZM14.1599 9.11006L9.32988 13.9401C9.18988 14.0801 8.99988 14.1601 8.79988 14.1601C8.59988 14.1601 8.40988 14.0801 8.26988 13.9401L5.84988 11.5201C5.55988 11.2301 5.55988 10.7501 5.84988 10.4601C6.13988 10.1701 6.61988 10.1701 6.90988 10.4601L8.79988 12.3501L13.0999 8.05006C13.3899 7.76006 13.8699 7.76006 14.1599 8.05006C14.4499 8.34006 14.4499 8.82006 14.1599 9.11006Z" fill="#4326C4" />
                    </g>
                </g>
            </svg>

        },
        {
            title: 'Load Trip & Request Payment',
            subtitle: 'After been assigned and loading the trip, submit the loading proof as a video after which payment would be approved by the responsible shipper.',
            icon: <svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/bold/verify">
                    <g id="verify">
                        <path id="Vector" d="M19.5599 9.74006L18.1999 8.16006C17.9399 7.86006 17.7299 7.30006 17.7299 6.90006V5.20006C17.7299 4.14006 16.8599 3.27006 15.7999 3.27006H14.0999C13.7099 3.27006 13.1399 3.06006 12.8399 2.80006L11.2599 1.44006C10.5699 0.850059 9.43988 0.850059 8.73988 1.44006L7.16988 2.81006C6.86988 3.06006 6.29988 3.27006 5.90988 3.27006H4.17988C3.11988 3.27006 2.24988 4.14006 2.24988 5.20006V6.91006C2.24988 7.30006 2.03988 7.86006 1.78988 8.16006L0.439883 9.75006C-0.140117 10.4401 -0.140117 11.5601 0.439883 12.2501L1.78988 13.8401C2.03988 14.1401 2.24988 14.7001 2.24988 15.0901V16.8001C2.24988 17.8601 3.11988 18.7301 4.17988 18.7301H5.90988C6.29988 18.7301 6.86988 18.9401 7.16988 19.2001L8.74988 20.5601C9.43988 21.1501 10.5699 21.1501 11.2699 20.5601L12.8499 19.2001C13.1499 18.9401 13.7099 18.7301 14.1099 18.7301H15.8099C16.8699 18.7301 17.7399 17.8601 17.7399 16.8001V15.1001C17.7399 14.7101 17.9499 14.1401 18.2099 13.8401L19.5699 12.2601C20.1499 11.5701 20.1499 10.4301 19.5599 9.74006ZM14.1599 9.11006L9.32988 13.9401C9.18988 14.0801 8.99988 14.1601 8.79988 14.1601C8.59988 14.1601 8.40988 14.0801 8.26988 13.9401L5.84988 11.5201C5.55988 11.2301 5.55988 10.7501 5.84988 10.4601C6.13988 10.1701 6.61988 10.1701 6.90988 10.4601L8.79988 12.3501L13.0999 8.05006C13.3899 7.76006 13.8699 7.76006 14.1599 8.05006C14.4499 8.34006 14.4499 8.82006 14.1599 9.11006Z" fill="#4326C4" />
                    </g>
                </g>
            </svg>
        },
        {
            title: 'The Trip Starts',
            subtitle: 'Update trip details to keep the shipper notified, get Transfer delivery order, e.t.c through our powerful dashboard.',
            icon: <svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/bold/verify">
                    <g id="verify">
                        <path id="Vector" d="M19.5599 9.74006L18.1999 8.16006C17.9399 7.86006 17.7299 7.30006 17.7299 6.90006V5.20006C17.7299 4.14006 16.8599 3.27006 15.7999 3.27006H14.0999C13.7099 3.27006 13.1399 3.06006 12.8399 2.80006L11.2599 1.44006C10.5699 0.850059 9.43988 0.850059 8.73988 1.44006L7.16988 2.81006C6.86988 3.06006 6.29988 3.27006 5.90988 3.27006H4.17988C3.11988 3.27006 2.24988 4.14006 2.24988 5.20006V6.91006C2.24988 7.30006 2.03988 7.86006 1.78988 8.16006L0.439883 9.75006C-0.140117 10.4401 -0.140117 11.5601 0.439883 12.2501L1.78988 13.8401C2.03988 14.1401 2.24988 14.7001 2.24988 15.0901V16.8001C2.24988 17.8601 3.11988 18.7301 4.17988 18.7301H5.90988C6.29988 18.7301 6.86988 18.9401 7.16988 19.2001L8.74988 20.5601C9.43988 21.1501 10.5699 21.1501 11.2699 20.5601L12.8499 19.2001C13.1499 18.9401 13.7099 18.7301 14.1099 18.7301H15.8099C16.8699 18.7301 17.7399 17.8601 17.7399 16.8001V15.1001C17.7399 14.7101 17.9499 14.1401 18.2099 13.8401L19.5699 12.2601C20.1499 11.5701 20.1499 10.4301 19.5599 9.74006ZM14.1599 9.11006L9.32988 13.9401C9.18988 14.0801 8.99988 14.1601 8.79988 14.1601C8.59988 14.1601 8.40988 14.0801 8.26988 13.9401L5.84988 11.5201C5.55988 11.2301 5.55988 10.7501 5.84988 10.4601C6.13988 10.1701 6.61988 10.1701 6.90988 10.4601L8.79988 12.3501L13.0999 8.05006C13.3899 7.76006 13.8699 7.76006 14.1599 8.05006C14.4499 8.34006 14.4499 8.82006 14.1599 9.11006Z" fill="#4326C4" />
                    </g>
                </g>
            </svg>
        },
        {
            title: 'Complete trip',
            subtitle: 'Complete the trip to notify the shipper that his trip has been completed, get rated and reviews by the shipper. Thank you in advance for helping us with our trip.',
            icon: <svg viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="vuesax/bold/verify">
                    <g id="verify">
                        <path id="Vector" d="M19.5599 9.74006L18.1999 8.16006C17.9399 7.86006 17.7299 7.30006 17.7299 6.90006V5.20006C17.7299 4.14006 16.8599 3.27006 15.7999 3.27006H14.0999C13.7099 3.27006 13.1399 3.06006 12.8399 2.80006L11.2599 1.44006C10.5699 0.850059 9.43988 0.850059 8.73988 1.44006L7.16988 2.81006C6.86988 3.06006 6.29988 3.27006 5.90988 3.27006H4.17988C3.11988 3.27006 2.24988 4.14006 2.24988 5.20006V6.91006C2.24988 7.30006 2.03988 7.86006 1.78988 8.16006L0.439883 9.75006C-0.140117 10.4401 -0.140117 11.5601 0.439883 12.2501L1.78988 13.8401C2.03988 14.1401 2.24988 14.7001 2.24988 15.0901V16.8001C2.24988 17.8601 3.11988 18.7301 4.17988 18.7301H5.90988C6.29988 18.7301 6.86988 18.9401 7.16988 19.2001L8.74988 20.5601C9.43988 21.1501 10.5699 21.1501 11.2699 20.5601L12.8499 19.2001C13.1499 18.9401 13.7099 18.7301 14.1099 18.7301H15.8099C16.8699 18.7301 17.7399 17.8601 17.7399 16.8001V15.1001C17.7399 14.7101 17.9499 14.1401 18.2099 13.8401L19.5699 12.2601C20.1499 11.5701 20.1499 10.4301 19.5599 9.74006ZM14.1599 9.11006L9.32988 13.9401C9.18988 14.0801 8.99988 14.1601 8.79988 14.1601C8.59988 14.1601 8.40988 14.0801 8.26988 13.9401L5.84988 11.5201C5.55988 11.2301 5.55988 10.7501 5.84988 10.4601C6.13988 10.1701 6.61988 10.1701 6.90988 10.4601L8.79988 12.3501L13.0999 8.05006C13.3899 7.76006 13.8699 7.76006 14.1599 8.05006C14.4499 8.34006 14.4499 8.82006 14.1599 9.11006Z" fill="#4326C4" />
                    </g>
                </g>
            </svg>
        },
    ]

    return (
        <>
            <Head>
                <title>Transporters - TruckDispatch - Freight Transportation Services | Connect with Verified Carriers and Shippers</title>
                <meta name="description" content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation. Whether you're shipping goods across town or across the country, we can help you find the right truck to get the job done. Contact us today to learn more about our services." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.shippers_page}>
                <HeroSection title="Supercharge <br /> your business growth with us" btnActionText="Get Started" btnActionUrl="" subtitle="Access a wide range of loads, enjoy fast payments, streamline administrative tasks, and efficiently manage your fleet." />
                <section className={styles.benefits}>
                    <header>
                        <h2>Exclusive benefits <br /> for Transporters</h2>
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
                </section>
                <section className={styles.how_it_works}>
                    <h2>How it works</h2>
                    <div className={styles.how_it_works__list}>
                        <UiList data={howItWorks.slice(0, 3)} withVerticalLine />
                        <UiList data={howItWorks.slice(3, 6)} withVerticalLine />
                    </div>
                    <a href="https://dashboard.gettruckdispatch.com/auth/join">
                        <UiButton>Get Started</UiButton>
                    </a>
                </section>
                <ContactUs />

            </div>
        </>
    )
}
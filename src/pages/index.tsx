import Head from "next/head";
import styles from "./index.module.scss";
import HeroSection from "@/components/landing-page-components/HeroSection";
import ProductDemo from "@/components/landing-page-components/ProductDemo";
import UserTypes from "@/components/landing-page-components/UserTypes";
import WhyUseUs from "@/components/landing-page-components/WhyUseUs";
import ContactUs from "@/components/landing-page-components/ContactUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>TruckDispatch - Freight & Truck Dispatch Services</title>
        <meta
          name="description"
          content="TruckDispatch streamlines freight logistics, connecting carriers, truck owners, and shippers for efficient transportation. Ship goods locally or nationally. Contact us for excellence.."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* opengraph */}
        <meta
          property="og:title"
          content="Revolutionize your freight experience with TruckDispatch."
        />
        <meta
          property="og:description"
          content="TruckDispatch connects carriers & truck owners to shippers for efficient transportation. Ship goods locally or nationally. Contact us for top-notch freight services."
        />
        <meta property="og:url" content="https://www.gettruckdispatch.com/" />
        <meta property="og:site_name" content="Truck Dispatch" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dkngy4g5z/image/upload/v1704872874/opengraph-image_xvrtxa_yciokk.png"
        />
        <meta property="og:image:type" content="web" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:type" content="web" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dkngy4g5z/image/upload/v1704872874/opengraph-image_xvrtxa_yciokk.png"
        />
        <meta
          name="twitter:title"
          content="Revolutionize your freight experience with TruckDispatch."
        />
        <meta
          name="twitter:description"
          content="TruckDispatch connects carriers & truck owners to shippers for efficient transportation. Ship goods locally or nationally. Contact us for top-notch freight services."
        />
        {/* opengraph */}

        <link rel="canonical" href="https://www.gettruckdispatch.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroSection
          title="Transform your <br /> Road freight & Cargo Delivery experience"
          subtitle="With vetted transporters, goods security, insurance, we promise a swift, reliable, and sustainable road freight transport."
          btnActionText="Get Started"
          btnUrl="https://dashboard.gettruckdispatch.com/auth/join"
        />
        <ProductDemo />
        <UserTypes />
        <WhyUseUs />
        <ContactUs />
      </main>
    </>
  );
}

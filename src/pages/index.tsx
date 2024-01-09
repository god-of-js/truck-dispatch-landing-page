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
        <title>
          TruckDispatch - Freight Transportation & Truck Dispatch Services
        </title>
        <meta
          name="description"
          content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation. Whether you're shipping goods across town or across the country, we can help you find the right truck to get the job done. Contact us today to learn more about our road freight services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="truck dispatch, truck dispatch services, freight transportation, road freight, cargo delivery, vetted transporters, dispatch company"
        />
        <meta name="author" content="https://www.gettruckdispatch.com/" />
        <meta name="publisher" content="https://www.gettruckdispatch.com/" />

        {/* opengraph */}
        <meta property="og:title" content="Truck Dispatch" />
        <meta
          property="og:description"
          content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation."
        />
        <meta property="og:url" content="https://www.gettruckdispatch.com/" />
        <meta property="og:site_name" content="Truck Dispatch" />
        <meta property="og:image" content="https://picsum.photos/1200/630" />
        <meta property="og:image:type" content="web" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:type" content="web" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image" content="https://picsum.photos/1200/630" />
        <meta name="twitter:title" content="Truck Dispatch" />
        <meta
          name="twitter:description"
          content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation."
        />
        {/* opengraph */}

        <link rel="canonical" href="https://www.gettruckdispatch.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="image_src" />
        <link rel="https://picsum.photos/1200/630" />
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

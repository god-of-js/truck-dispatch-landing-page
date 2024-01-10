import Head from "next/head";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/landing-page-components/HeroSection")
);
const ProductDemo = dynamic(
  () => import("@/components/landing-page-components/ProductDemo")
);
const UserTypes = dynamic(
  () => import("@/components/landing-page-components/UserTypes")
);
const WhyUseUs = dynamic(
  () => import("@/components/landing-page-components/WhyUseUs")
);
const ContactUs = dynamic(
  () => import("@/components/landing-page-components/ContactUs")
);

export default function Home() {
  return (
    <>
      <Head>
        <title>
          TruckDispatch - Freight Transportation Services | Connect with
          Verified Carriers and Shippers
        </title>
        <meta
          name="description"
          content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation. Whether you're shipping goods across town or across the country, we can help you find the right truck to get the job done. Contact us today to learn more about our road freight services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

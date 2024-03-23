import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "./FAQs.module.scss";

const FAQList = dynamic(() => import("@/components/faqs/FAQList"));

export default function FAQs() {
  return (
    <>
      <Head>
        <title>FAQs - TruckDispatch - Freight & Truck Dispatch Services</title>
        <meta
          name="description"
          content="Explore our FAQ section for answers about TruckDispatch, including inquiries related to road freight. Get the info to streamline your operations with our services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* opengraph */}
        <meta
          property="og:title"
          content="Explore Frequently Asked Questions at TruckDispatch."
        />
        <meta
          property="og:description"
          content="Explore our FAQ section for answers about TruckDispatch, including inquiries related to road freight. Get the info to streamline your operations with our services."
        />
        <meta
          property="og:url"
          content="https://www.gettruckdispatch.com/faqs"
        />
        <meta property="og:site_name" content="Truck Dispatch" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dkngy4g5z/image/upload/v1704876550/about-us_cxenfl.png"
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
          content="https://res.cloudinary.com/dkngy4g5z/image/upload/v1704876550/about-us_cxenfl.png"
        />
        <meta
          name="twitter:title"
          content="Explore Frequently Asked Questions at TruckDispatch."
        />
        <meta
          name="twitter:description"
          content="Explore our FAQ section for answers about TruckDispatch, including inquiries related to road freight. Get the info to streamline your operations with our services."
        />
        {/* opengraph */}

        <link rel="canonical" href="https://www.gettruckdispatch.com/faqs" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="https://res.cloudinary.com/dkngy4g5z/image/upload/v1704876550/about-us_cxenfl.png" />
      </Head>

      <main className={styles.faqs}>
        <div className={styles.inner}>
          <h3>Frequently Asked Questions</h3>
          <FAQList />
        </div>
        <div className={styles.contact_us}>
          <h3>{"CAN'T FIND WHAT YOU'RE LOOKING FOR?"}</h3>
          <p>
            Contact our team via the chat box provided below and we would help
            resolve your questions or problems.
          </p>
        </div>
      </main>
    </>
  );
}

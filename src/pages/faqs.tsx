import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "./FAQs.module.scss";

const FAQList = dynamic(() => import("@/components/faqs/FAQList"));

export default function FAQs() {
  return (
    <>
      <Head>
        <title>
          Blog - TruckDispatch - Freight Transportation Services | Connect with
          Verified Carriers and Shippers
        </title>
        <meta
          name="description"
          content="Explore our FAQ section for answers to frequently asked questions about TruckDispatch, including inquiries related to road freight. Find the information you need to make the most of our services and streamline your road freight operations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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

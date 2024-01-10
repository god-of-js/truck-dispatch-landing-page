import dynamic from "next/dynamic";
import styles from "./about.module.scss";
import RoundedTruckImage from "@/assets/rounded-truck-img.png";
import Image from "next/image";
import Head from "next/head";

const UiList = dynamic(() => import("../components/ui/UiList"));
const ContactUs = dynamic(
  () => import("@/components/landing-page-components/ContactUs")
);

export default function AboutUs() {
  const whyTruckDispatch = [
    {
      title: "Customer first",
      subtitle:
        "At Truckdispatch, our utmost priority is delivering exceptional customer satisfaction and providing a seamless user experience with our product. We recognize the significance of aligning business requirements with digitalization, enabling us to bridge the gap and empower your business with enhanced efficiency and cost-effectiveness.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/bold/user-octagon">
            <g id="user-octagon">
              <path
                id="Vector"
                d="M17.5099 3.85L11.5699 0.42C10.5999 -0.14 9.39992 -0.14 8.41992 0.42L2.48992 3.85C1.51992 4.41 0.919922 5.45 0.919922 6.58V13.42C0.919922 14.54 1.51992 15.58 2.48992 16.15L8.42992 19.58C9.39992 20.14 10.5999 20.14 11.5799 19.58L17.5199 16.15C18.4899 15.59 19.0899 14.55 19.0899 13.42V6.58C19.0799 5.45 18.4799 4.42 17.5099 3.85ZM9.99992 5.34C11.2899 5.34 12.3299 6.38 12.3299 7.67C12.3299 8.96 11.2899 10 9.99992 10C8.70992 10 7.66992 8.96 7.66992 7.67C7.66992 6.39 8.70992 5.34 9.99992 5.34ZM12.6799 14.66H7.31992C6.50992 14.66 6.03992 13.76 6.48992 13.09C7.16992 12.08 8.48992 11.4 9.99992 11.4C11.5099 11.4 12.8299 12.08 13.5099 13.09C13.9599 13.75 13.4799 14.66 12.6799 14.66Z"
                fill="#4326C4"
              />
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Customer support",
      subtitle:
        "We are here to help you before, during, and after every shipment. When you contact us, you will be assisted by specialists.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/bold/microphone">
            <g id="microphone">
              <path
                id="Vector"
                d="M10.0001 19.93C4.9601 19.93 0.850098 15.83 0.850098 10.78V8.89995C0.850098 8.50995 1.1701 8.19995 1.5501 8.19995C1.9301 8.19995 2.2501 8.51995 2.2501 8.89995V10.78C2.2501 15.05 5.7201 18.52 9.9901 18.52C14.2601 18.52 17.7301 15.05 17.7301 10.78V8.89995C17.7301 8.50995 18.0501 8.19995 18.4301 8.19995C18.8101 8.19995 19.1301 8.51995 19.1301 8.89995V10.78C19.1501 15.83 15.0401 19.93 10.0001 19.93Z"
                fill="#4326C4"
              />
              <path
                id="Vector_2"
                d="M9.9999 0C6.6399 0 3.8999 2.74 3.8999 6.1V10.79C3.8999 14.15 6.6399 16.89 9.9999 16.89C13.3599 16.89 16.0999 14.15 16.0999 10.79V6.1C16.0999 2.74 13.3599 0 9.9999 0ZM12.1799 8.59C12.1099 8.86 11.8599 9.04 11.5899 9.04C11.5399 9.04 11.4799 9.03 11.4299 9.02C10.4099 8.74 9.3299 8.74 8.3099 9.02C7.9799 9.11 7.6499 8.92 7.5599 8.59C7.4699 8.27 7.6599 7.93 7.9899 7.84C9.2199 7.5 10.5199 7.5 11.7499 7.84C12.0799 7.93 12.2699 8.26 12.1799 8.59ZM13.0299 5.82C12.9399 6.07 12.7099 6.22 12.4599 6.22C12.3899 6.22 12.3199 6.21 12.2499 6.18C10.7199 5.62 9.0399 5.62 7.5099 6.18C7.1899 6.3 6.8399 6.14 6.7199 5.82C6.6099 5.51 6.7699 5.16 7.0899 5.04C8.8899 4.39 10.8699 4.39 12.6599 5.04C12.9799 5.16 13.1399 5.51 13.0299 5.82Z"
                fill="#4326C4"
              />
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Network of vetted professional transporters",
      subtitle:
        "Our network consists of vetted transporters with numerous years of experience in the field. This reduces risk and unprofessionalism. Can’t take our word for it? View the ratings and remarks of each transporter when you look into their profile.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/bold/truck">
            <g id="truck">
              <path
                id="Vector"
                d="M12 0.92V9.23C12 10.25 11.17 11.08 10.15 11.08H1C0.45 11.08 0 10.63 0 10.08V3.69C0 1.65 1.65 0 3.69 0H11.07C11.59 0 12 0.41 12 0.92Z"
                fill="#4326C4"
              />
              <path
                id="Vector_2"
                d="M19.5 13.5C19.78 13.5 20 13.72 20 14V15C20 16.66 18.66 18 17 18C17 16.35 15.65 15 14 15C12.35 15 11 16.35 11 18H9C9 16.35 7.65 15 6 15C4.35 15 3 16.35 3 18C1.34 18 0 16.66 0 15V13C0 12.45 0.45 12 1 12H10.5C11.88 12 13 10.88 13 9.5V4C13 3.45 13.45 3 14 3H14.84C15.56 3 16.22 3.39 16.58 4.01L17.22 5.13C17.31 5.29 17.19 5.5 17 5.5C15.62 5.5 14.5 6.62 14.5 8V11C14.5 12.38 15.62 13.5 17 13.5H19.5Z"
                fill="#4326C4"
              />
              <path
                id="Vector_3"
                d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
                fill="#4326C4"
              />
              <path
                id="Vector_4"
                d="M14 20C15.1046 20 16 19.1046 16 18C16 16.8954 15.1046 16 14 16C12.8954 16 12 16.8954 12 18C12 19.1046 12.8954 20 14 20Z"
                fill="#4326C4"
              />
              <path
                id="Vector_5"
                d="M20 10.53V12H17C16.45 12 16 11.55 16 11V8C16 7.45 16.45 7 17 7H18.29L19.74 9.54C19.91 9.84 20 10.18 20 10.53Z"
                fill="#4326C4"
              />
            </g>
          </g>
        </svg>
      ),
    },
  ];
  return (
    <>
      <Head>
        <title>
          About Us - TruckDispatch - Freight Transportation Services | Connect
          with Verified Carriers and Shippers
        </title>
        <meta
          name="description"
          content="Discover our story and mission at TruckDispatch, where we are dedicated to connecting freight carriers and truck owners with shippers to provide efficient road freight transportation solutions. Learn about our commitment to streamlining the road freight industry and delivering top-quality service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.about_us}>
        <section className={styles.hero_section}>
          <h1>
            Hi There! <br /> {"We’re"} TruckDispatch
          </h1>
        </section>
        <section className={styles.company_profile}>
          <div className={styles.company_profile__content}>
            <h2>Our History</h2>
            <p>
              Truck dispatch was established in 2023 by <b>Eze Chisom</b>,
              driven by his profound upbringing in the freight industry and his
              keen observation of existing limitations within the logistics
              sector.
            </p>
            <p>
              Recognizing the imperative need for solutions, he embarked on a
              mission to optimize the industry by leveraging his extensive
              family network of experienced transporters, which collectively
              spans over 40 years of freight expertise.
            </p>
            <p>
              Harnessing his business acumen, he set out to alleviate the
              challenges plaguing the logistics sector, offering innovative and
              efficient solutions to meet the evolving demands of the industry.
            </p>
          </div>
          <div className={styles.company_profile__content}>
            <h2>Our Mission</h2>
            <p>
              At TruckDispatch, our mission is to revolutionize the freight
              industry by enhancing operational efficiency and addressing
              security concerns.
              <br />
              Through the utilization of cutting-edge technology and innovative
              solutions, we aim to optimize the supply chain ecosystem, ensuring
              seamless, secure, and timely delivery of goods. By providing a
              platform that prioritizes efficiency and reliability, we empower
              businesses to thrive and prosper in {"today's"} dynamic
              marketplace.
            </p>
            <p>
              With a relentless commitment to excellence, we are dedicated to
              shaping the future of logistics and enabling seamless connections
              between shippers and transporters.
            </p>
          </div>
        </section>
        <section className={styles.customer_insights}>
          <h2>
            But Why <br /> TruckDispatch <br /> you ask?
          </h2>
          <UiList data={whyTruckDispatch} />
        </section>
        <section className={styles.customer_insights}>
          <div className={`${styles.align} ${styles.hidden_in_large}`}>
            <h2>
              Our Core <br /> Values
            </h2>
            <Image src={RoundedTruckImage} alt="Truckdispatch" />
          </div>
          <UiList data={whyTruckDispatch} />
          <div className={styles.hidden_in_mobile}>
            <div className={styles.align}>
              <h2>
                Our Core <br /> Values
              </h2>
              <Image src={RoundedTruckImage} alt="Truckdispatch" />
            </div>
          </div>
        </section>
        <ContactUs />
      </div>
    </>
  );
}

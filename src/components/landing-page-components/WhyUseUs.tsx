import styles from "./WhyUseUs.module.scss";
import RoundedTruckImage from "../../assets/rounded-truck-img.svg";
import Image from "next/image";
import UiButton from "../ui/UiButton";
import UiList, { Data } from "../ui/UiList";

export default function WhyUseUs() {
  const clipboardIcon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.3503 2H9.65025C8.61025 2 7.76025 2.84 7.76025 3.88V4.82C7.76025 5.86 8.60025 6.7 9.64025 6.7H14.3503C15.3903 6.7 16.2303 5.86 16.2303 4.82V3.88C16.2403 2.84 15.3903 2 14.3503 2Z"
        fill="#4326C4"
      />
      <path
        d="M17.24 4.81998C17.24 6.40998 15.94 7.70998 14.35 7.70998H9.65004C8.06004 7.70998 6.76004 6.40998 6.76004 4.81998C6.76004 4.25998 6.16004 3.90998 5.66004 4.16998C4.25004 4.91998 3.29004 6.40998 3.29004 8.11998V17.53C3.29004 19.99 5.30004 22 7.76004 22H16.24C18.7 22 20.71 19.99 20.71 17.53V8.11998C20.71 6.40998 19.75 4.91998 18.34 4.16998C17.84 3.90998 17.24 4.25998 17.24 4.81998ZM15.34 12.73L11.34 16.73C11.19 16.88 11 16.95 10.81 16.95C10.62 16.95 10.43 16.88 10.28 16.73L8.78004 15.23C8.49004 14.94 8.49004 14.46 8.78004 14.17C9.07004 13.88 9.55004 13.88 9.84004 14.17L10.81 15.14L14.28 11.67C14.57 11.38 15.05 11.38 15.34 11.67C15.63 11.96 15.63 12.44 15.34 12.73Z"
        fill="#4326C4"
      />
    </svg>
  );

  const peopleBenefits: Data[] = [
    {
      title: "Market Expertise",
      subtitle:
        "Our organization comprises of leaders in the transport business with over 40 years experience.",
      icon: clipboardIcon,
    },
    {
      title: "Personal Contact",
      subtitle:
        "Customer support and various means of communication available to take care of your professional needs.",
      icon: clipboardIcon,
    },
    {
      title: "Operational Excellence",
      subtitle: "Long-term partnerships with vetted professional transporters.",
      icon: clipboardIcon,
    },
  ];

  return (
    <section className={styles.why_use_us}>
      <div className={styles.hero_section}>
        <Image
          src={RoundedTruckImage}
          title="Truckdispatch gettruckdispatch"
          alt="Truckdispatch gettruckdispatch"
        />
        <h4>
          Logistics is a {"people's"} business. We are convinced the best value
          is created by personal touch.
        </h4>
        <a
          title="join truckdispatch"
          href="https://dashboard.gettruckdispatch.com/auth/join"
        >
          <UiButton>GET STARTED</UiButton>
        </a>
      </div>
      <UiList data={peopleBenefits} />
    </section>
  );
}

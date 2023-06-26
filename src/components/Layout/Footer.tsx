import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.scss';
import dynamic from "next/dynamic";

const UiButton = dynamic(() => import("../ui/UiButton"));
const UiIcon = dynamic(() => import("../ui/UiIcon"));

export default function Footer() {
  const helpList = [
    {
      title: 'Terms & Conditions',
      link: '/terms-and-conditions',
      isExternal: false,
    },
    {
      title: 'Privacy Policy',
      link: '/privacy-policy',
      isExternal: false,
    },
  ];
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_cta}>
          <h3>Let’s Transform your Road Freight Transport Experience</h3>
          <a href="https://dashboard.gettruckdispatch.com/auth/join">
            <UiButton>
              Get Started
            </UiButton>
          </a>
        </div>
        <footer>
          <div className={styles.logo_container}>
            <Link href="/">
              <h3>TruckDispatch</h3>
            </Link>
            <p>
              Driving Efficiency, Connecting the Supply Chain
            </p>
            <div className={styles.social_links}>
              <a href="https://www.linkedin.com/company/truckdispatch/" target="_blank"><UiIcon icon="LinkedinLogo" size="24"/></a>
              <a href="https://www.instagram.com/gettruckdispatch/" target="_blank"><UiIcon icon="InstagramLogo" size="24"/></a>
              {/* <a href="https://www.instagram.com/gettruckdispatch/" target="_blank"><UiIcon icon="TwitterLogo" size="24"/></a> */}
            </div>
          </div>
          <div className={styles.list_container}>
            <ul>
              <div className={styles.list_title}>Policies</div>
              {helpList.map((child, childIndex) => (
                <li key={childIndex}>
                  {child.isExternal ? (
                    <a href={child.link} target="_blank">
                      {child.title}
                    </a>
                  ) : (
                    <Link href={child.link}>{child.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </footer>
        <p className={styles.copyright}>
          COPYRIGHT © {year}. TRUCKDISPATCH. ALL RIGHTS RESERVED
        </p>

      </div>
    </div>)
}
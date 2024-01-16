import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { Icon } from "phosphor-react";
import { Icons } from "../ui/UiIcon";

const UiButton = dynamic(() => import("../ui/UiButton"));
const UiIcon = dynamic(() => import("../ui/UiIcon"));

export default function Footer() {
  const helpList = [
    {
      title: "Terms & Conditions",
      link: "/terms-and-conditions",
      isExternal: false,
    },
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
      isExternal: false,
    },
  ];
  const companyLinkList = [
    {
      title: "About",
      link: "/about",
      isExternal: false,
    },
    {
      title: "Blog",
      link: "/blog",
      isExternal: false,
    },
    {
      title: "FAQs",
      link: "/faqs",
      isExternal: false,
    },
    {
      title: "Contact",
      link: "/contact",
      isExternal: false,
    },
  ];

  const socialLinks = [
    {
      link: "https://www.instagram.com/gettruckdispatch/",
      title: "Instagram",
      logo: "InstagramLogo",
    },
    {
      link: "https://www.facebook.com/gettruckdispatch/",
      title: "Facebook",
      logo: "FacebookLogo",
    },
    {
      link: "https://www.linkedin.com/company/truckdispatch/",
      title: "Linkedin",
      logo: "LinkedinLogo",
    },
    {
      link: "https://www.youtube.com/@truckdispatch942/videos",
      title: "Youtube",
      logo: "YoutubeLogo",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_cta}>
          <h3>Let’s Transform your Road Freight Transport Experience</h3>
          <a href="https://dashboard.gettruckdispatch.com/auth/join">
            <UiButton>Get Started</UiButton>
          </a>
        </div>
        <footer>
          <div className={styles.logo_container}>
            <Link title="truckdispatch" href="/">
              <h3>TruckDispatch</h3>
            </Link>
            <p>Driving Efficiency, Connecting the Supply Chain</p>
            <div className={styles.social_links}>
              {socialLinks.map((sociallink) => (
                <a href={sociallink.link} target="_blank">
                  <UiIcon icon={sociallink.logo as Icons} size="24" />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.list_container}>
            <div>
              <h4 className={styles.list_title}>Company</h4>
              <ul>
                {companyLinkList.map((child, childIndex) => (
                  <li key={childIndex}>
                    {child.isExternal ? (
                      <a href={child.link} target="_blank">
                        {child.title}
                      </a>
                    ) : (
                      <Link title={child.title} href={child.link}>
                        {child.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={styles.list_title}>Policies</h4>
              <ul>
                {helpList.map((child, childIndex) => (
                  <li key={childIndex}>
                    {child.isExternal ? (
                      <a href={child.link} target="_blank">
                        {child.title}
                      </a>
                    ) : (
                      <Link title={child.title} href={child.link}>
                        {child.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
        <p className={styles.copyright}>
          COPYRIGHT © {year}. TRUCKDISPATCH. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}

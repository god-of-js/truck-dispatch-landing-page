import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/full-logo.svg";

import { Icons } from "../ui/UiIcon";

import styles from "./Footer.module.scss";

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
  ];
  const contactLinkList = [
    {
      title: "Contact form",
      link: "/contact",
      isExternal: false,
    },
    {
      title: "E-Mail",
      link: "mailto:support@gettruckdispatch.com",
      isExternal: true,
    },
    {
      title: "+2348033298274",
      link: "tel:+2348033298274",
      isExternal: true,
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
              <Image
                src={logo}
                alt="truck dispatch logo"
                title="truck dispatch logo"
              />
            </Link>
            <p>Driving Efficiency, Connecting the Supply Chain</p>
            <div className={styles.social_links}>
              {socialLinks.map((socialLink, index) => (
                <a key={index} href={socialLink.link} target="_blank">
                  <UiIcon icon={socialLink.logo as Icons} size="24" />
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
            <div>
              <h4 className={styles.list_title}>Contact Us</h4>
              <ul>
                {contactLinkList.map((child, childIndex) => (
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

import dynamic from "next/dynamic";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./TopNav.module.scss";
import logo from "../../assets/full-logo.svg";

import { useRouter } from "next/router";

const UiButton = dynamic(() => import("../ui/UiButton"));
const UiModal = dynamic(() => import("../ui/UiModal"));

export default function TopNav() {
  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const routes = [
    {
      name: "Home",
      link: "/",
      external: false,
    },
    {
      name: "About Us",
      link: "/about",
      external: false,
    },
    {
      name: "Shippers",
      link: "/shippers",
      external: false,
    },
    {
      name: "Transporters",
      link: "/transporters",
      external: false,
    },
    {
      name: "Blog",
      link: "/blog",
      external: true,
    },
    {
      name: "FAQs",
      link: "/faqs",
      external: false,
    },
  ];
  return (
    <nav className={styles.top_nav}>
      <div className={styles.top_nav_inner}>
        <Link href="/">
          <Image src={logo} alt="truck dispatch logo" />
        </Link>
        <ul className={styles.hide_in_mobile}>
          {routes.map((route, index) => (
            <li
              key={index}
              className={router.pathname === route.link ? styles.active : ""}
            >
              <Link href={route.link}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.hide_in_large}>
          <UiButton
            variant="neutral"
            ariaLabel="Toggle mobile menu"
            onClick={() => setIsSidebarVisible(true)}
          >
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/menu">
                <g id="menu">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H19C19.4142 0.25 19.75 0.585786 19.75 1C19.75 1.41421 19.4142 1.75 19 1.75H1C0.585786 1.75 0.25 1.41421 0.25 1Z"
                  />
                  <path
                    id="Vector (Stroke)_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.25 6C0.25 5.58579 0.585786 5.25 1 5.25H19C19.4142 5.25 19.75 5.58579 19.75 6C19.75 6.41421 19.4142 6.75 19 6.75H1C0.585786 6.75 0.25 6.41421 0.25 6Z"
                  />
                  <path
                    id="Vector (Stroke)_3"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.25 11C0.25 10.5858 0.585786 10.25 1 10.25H19C19.4142 10.25 19.75 10.5858 19.75 11C19.75 11.4142 19.4142 11.75 19 11.75H1C0.585786 11.75 0.25 11.4142 0.25 11Z"
                  />
                </g>
              </g>
            </svg>
          </UiButton>
        </div>
        <div className={`${styles.action_btns} ${styles.hide_in_mobile}`}>
          <a href="https://dashboard.gettruckdispatch.com/auth/login">
            <UiButton variant="neutral" textCasing="capitalize">
              Log In
            </UiButton>
          </a>
          <a href="https://dashboard.gettruckdispatch.com/auth/join">
            <UiButton variant="secondary" textCasing="capitalize">
              <b>Get Started</b> for free!
            </UiButton>
          </a>
        </div>
      </div>
      <div className={styles.hide_in_large}>
        <UiModal
          position="right"
          isVisible={isSidebarVisible}
          onClose={() => setIsSidebarVisible(false)}
        >
          <ul>
            {routes.map((route, index) => (
              <li
                key={index}
                className={router.pathname === route.link ? styles.active : ""}
                onClick={() => setIsSidebarVisible(false)}
              >
                <Link href={route.link}>{route.name}</Link>
              </li>
            ))}
            <li>
              <a href="https://dashboard.gettruckdispatch.com/auth/login">
                Log In
              </a>
            </li>
            <li>
              <a href="https://dashboard.gettruckdispatch.com/auth/join">
                Get Started
              </a>
            </li>
          </ul>
        </UiModal>
      </div>
    </nav>
  );
}

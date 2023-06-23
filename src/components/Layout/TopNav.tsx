import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TopNav.module.scss'
import logo from '../../assets/logo (1).svg'

import UiButton from '../ui/UiButton';

export default function TopNav() {
  return (
    <nav className={styles.top_nav}>
      <div className={styles.top_nav_inner}>
        <Link href="/" className={styles.logo_container}>
          <Image src={logo} alt='truck dispatch logo'/>
          <span>Truck <br /> Dispatch</span>
        </Link>
        <div className={styles.nav_links}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </div>
        <div className={styles.actions_container}>
          <a href="https://dashboard.gettruckdispatch.com/auth/join/agent" className={styles.get_started}>
            <UiButton>
              Get Started
            </UiButton>
          </a>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/TopNav.module.scss'

import UiButton from '../ui/UiButton';

export default function TopNav() {
  return (
    <nav className={styles.top_nav}>
      <div className={styles.top_nav_inner}>
        <Link href="/">
          <Image src="/truck-dispatch-logo-with-text.svg" alt="Truckdispatch logo" width="250" height="250" />
        </Link>
        <div className={styles.actions_container}>
          <a href="https://dashboard.gettruckdispatch.com/auth/join/agent" className={styles.get_started}>
            <UiButton size="s" textCasing="capitalize" isSquare>
              Get Started
            </UiButton>
          </a>
          <a href="https://dashboard.gettruckdispatch.com/auth/join/agent">
            <UiButton
              size="s"
              textCasing="capitalize"
              isSquare
              variant="secondary"
            >
              Login
            </UiButton>
          </a>
        </div>
      </div>
    </nav>
  );
}

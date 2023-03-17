import React from 'react';
import Link from 'next/link';
import Image from 'next/link';
import styles from '@/styles/TopNav.module.scss'

import UiButton from '../ui/UiButton';
import TDLogo from '../../../assets/img/truck-dispatch-logo-with-text.svg';

export default function TopNav() {
  return (
    <nav className={styles.top_nav}>
      <div className="top_nav_inner">
        <Link href="/">
          <img src="../../assets/truck-dispatch-logo-with-text.svg" alt="Truckdispatch logo" width="250" height="250" />
        </Link>
        <div className="actions_container">
          <a href="https://www.gettruckdispatch.com/auth/join/agent">
            <UiButton size="s" textCasing="capitalize" isSquare>
              Get Started
            </UiButton>
          </a>
          <a href="https://www.gettruckdispatch.com/auth/join/agent">
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

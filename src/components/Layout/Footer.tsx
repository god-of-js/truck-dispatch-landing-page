import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.scss';
import UiButton from "../ui/UiButton";
import twitter from '../../assets/twitter (2).svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/ingstagram.svg';
import facebook from '../../assets/facebook (2).svg'

export default function Footer() {
    const lists = [
        {
            title: 'Company',
            children: [
                {
                    title: 'About',
                    link: '',
                    isExternal: false,
                },
                {
                  title: 'Contact',
                  link: '',
                  isExternal: false,
              },
              {
                title: 'Services',
                link: '',
                isExternal: false,
            },
            ],
        },
        {
            title: 'Help',
            children: [
                {
                    title: 'Customer Support',
                    link: '',
                    isExternal: false,
                },
                {
                    title: 'Terms & Conditions',
                    link: '/terms-and-conditions',
                    isExternal: false,
                },
                {
                  title: 'Privacy Policy',
                  link: '',
                  isExternal: false,
              },
            ],
        },
        {
            title: 'Resources',
            children: [
                {
                    title: 'Press Kitl ',
                    link: '',
                    isExternal: true,
                },
                {
                  title: 'How to-Blog',
                  link: '',
                  isExternal: false,
                },
                {
                  title: 'Youtube Playlist',
                  link: '',
                  isExternal: false,
                },
            ],
        },
    ];
    const year = new Date().getFullYear();
    return (
		<footer className={styles.footer}>
        <div className={styles.footer_inner}>
					
			    <div className={styles.footer_cta}>
            <h3>Let’s Transform your Road Freight Transport Experience</h3>
						<a href="https://dashboard.gettruckdispatch.com/auth/join/agent">
                  <UiButton>
                    Get Started
                  </UiButton>
                </a>
					</div>
          <div className={styles.logo_links_container}>
            <div className={styles.logo_container}>
                <Link href="/">
                  <h3>TruckDispatch</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
                </p>
                <div className={styles.social_links}>
                  <a href=""><Image src={twitter} alt="twitter logo"/></a>
                  <a href=""><Image src={facebook} alt="facebook logo"/></a>
                  <a href=""><Image src={instagram} alt="instagram logo"/></a>
                  <a href=""><Image src={github} alt="github logo"/></a>
                </div>
            </div>
            <div className={styles.list_container}>
                {lists.map((item, index) => (
                    <ul key={index}>
                        <div className={styles.list_title}>{item.title}</div>
                        {item.children.map((child, childIndex) => (
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
                ))}
            </div>
          </div>
          <p className={styles.copyright}>
            COPYRIGHT © {year}. TRUCKDISPATCH. ALL RIGHTS RESERVED
          </p>
					
        </div>
    </footer>)
}
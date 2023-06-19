import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Footer.module.scss';
import UiButton from "../ui/UiButton";

export default function Footer() {
    const lists = [
        {
            title: 'TruckDispatch',
            children: [
                {
                    title: 'Frequently Asked Questions',
                    link: '/faqs',
                    isExternal: false,
                },
            ],
        },
        {
            title: 'Legal',
            children: [
                {
                    title: 'Privacy Policy',
                    link: '/privacy-policy',
                    isExternal: false,
                },
                {
                    title: 'Terms and Conditions',
                    link: '/terms-and-conditions',
                    isExternal: false,
                },
            ],
        },
        {
            title: 'Contact',
            children: [
                {
                    title: 'support@gettruckdispatch.com',
                    link: 'mailto:support@gettruckdispatch.com',
                    isExternal: true,
                },
            ],
        },
    ];

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
					
            <div className={styles.logo_container}>
                <Link href="/">
                    <Image src="/truck-dispatch-logo-with-text.svg" alt="Truckdispatch logo" width="250" height="250" />
                </Link>
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
    </footer>)
}
import ContactUs from "@/components/landing-page-components/ContactUs";
import Head from "next/head";
import styles from './blog.module.scss'
export default function BlogPage() {
    return (
        <>
            <Head>
                <title>Blog - TruckDispatch - Freight Transportation Services | Connect with Verified Carriers and Shippers</title>
                <meta name="description" content="Explore the latest industry insights, news, and tips on our TruckDispatch blog. Stay informed about trends in the transportation and logistics sector." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <header>
                    <h1>Latest news and tips <br /> from TruckDispatch</h1>
                </header>

                <div className={styles.posts}>
                    <div className={styles.empty_content}>
                        <div className={styles.icon_container}>
                            <div className={styles.icon_container__inner}>

                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <g id="vuesax/bold/document-copy">
                                        <g id="document-copy">
                                            <path id="Vector" d="M13.5 11.15H11.33C9.55 11.15 8.1 9.71 8.1 7.92V5.75C8.1 5.34 7.77 5 7.35 5H4.18C1.87 5 0 6.5 0 9.18V15.82C0 18.5 1.87 20 4.18 20H10.07C12.38 20 14.25 18.5 14.25 15.82V11.9C14.25 11.48 13.91 11.15 13.5 11.15Z" />
                                            <path id="Vector_2" d="M15.8198 0H13.8498H12.7598H9.92977C7.66977 0 5.83977 1.44 5.75977 4.01C5.81977 4.01 5.86977 4 5.92977 4H8.75977H9.84977H11.8198C14.1298 4 15.9998 5.5 15.9998 8.18V10.15V12.86V14.83C15.9998 14.89 15.9898 14.94 15.9898 14.99C18.2198 14.92 19.9998 13.44 19.9998 10.83V8.86V6.15V4.18C19.9998 1.5 18.1298 0 15.8198 0Z" />
                                            <path id="Vector_3" d="M9.98014 5.14999C9.67014 4.83999 9.14014 5.04999 9.14014 5.47999V8.1C9.14014 9.2 10.0701 10.1 11.2101 10.1C11.9201 10.11 12.9101 10.11 13.7601 10.11C14.1901 10.11 14.4101 9.61 14.1101 9.31C13.0201 8.22 11.0801 6.26999 9.98014 5.14999Z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div>

                            <h2>No blog content yet!!</h2>
                            <p>Keep your eyes on this space for educational content on the trucking industry and updates on Truckdispatch.</p>
                        </div>
                    </div>
                </div>

                <ContactUs />
            </div>

        </>
    )
}
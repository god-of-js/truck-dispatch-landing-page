import ContactUs from "@/components/landing-page-components/ContactUs";
import styles from './blog.module.scss'
export default function BlogPage() {
    return (
        <div className={styles.main}>
            <header>
                <h1>Latest news and tips <br /> from TruckDispatch</h1>
            </header>

            <div className={styles.posts}>
                <div className={styles.empty_content}>
                    <div className={styles.icon_container}>
                        <div className={styles.icon_container__inner}>
                            {/* <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/linear/document-text">
                                    <g id="document-text">
                                        <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M3.15533 3.15533C2.2398 4.07086 1.75 5.57397 1.75 8V14C1.75 16.426 2.2398 17.9291 3.15533 18.8447C4.07086 19.7602 5.57397 20.25 8 20.25H14C16.426 20.25 17.9291 19.7602 18.8447 18.8447C19.7602 17.9291 20.25 16.426 20.25 14V9C20.25 8.58579 20.5858 8.25 21 8.25C21.4142 8.25 21.75 8.58579 21.75 9V14C21.75 16.574 21.2398 18.5709 19.9053 19.9053C18.5709 21.2398 16.574 21.75 14 21.75H8C5.42603 21.75 3.42914 21.2398 2.09467 19.9053C0.760201 18.5709 0.25 16.574 0.25 14V8C0.25 5.42603 0.760201 3.42914 2.09467 2.09467C3.42914 0.760201 5.42603 0.25 8 0.25H13C13.4142 0.25 13.75 0.585786 13.75 1C13.75 1.41421 13.4142 1.75 13 1.75H8C5.57397 1.75 4.07086 2.2398 3.15533 3.15533Z" />
                                        <path id="Vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M12.713 0.307112C12.9932 0.191027 13.3158 0.255193 13.5303 0.469692L21.5303 8.46969C21.7448 8.68419 21.809 9.00678 21.6929 9.28703C21.5768 9.56729 21.3033 9.75002 21 9.75002H17C15.4585 9.75002 14.1921 9.50277 13.3447 8.65535C12.4972 7.80793 12.25 6.54157 12.25 5.00002V1.00002C12.25 0.696675 12.4327 0.423198 12.713 0.307112ZM13.75 2.81068V5.00002C13.75 6.45847 14.0028 7.19211 14.4053 7.59469C14.8079 7.99727 15.5415 8.25002 17 8.25002H19.1893L13.75 2.81068Z" />
                                        <path id="Vector (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd" d="M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H12C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" />
                                        <path id="Vector (Stroke)_4" fill-rule="evenodd" clip-rule="evenodd" d="M5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z" />
                                    </g>
                                </g>
                            </svg> */}

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
    )
}
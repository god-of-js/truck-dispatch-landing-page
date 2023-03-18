import dynamic from "next/dynamic";
import styles from '@/styles/FAQs.module.scss';
const FAQList = dynamic(() => import('@/components/faqs/FAQList'));

export default function FAQs() {
    return (
        <main className={styles.faqs}>
            <div className={styles.inner}>
                <h3>Frequently Asked Questions</h3>
                <FAQList />
            </div>
            <div className={styles.contact_us}>
                <h3>{"CAN'T FIND WHAT YOU'RE LOOKING FOR?"}</h3>
                <p>
                    Contact our team via the chat box provided below and we would help resolve your questions or problems.
                </p>
            </div>

        </main>
    )
}
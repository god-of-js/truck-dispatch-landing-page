import UiButton from '../ui/UiButton';
import styles from './ContactUs.module.scss';

export default function ContactUs() {
    return <div className={styles.contact_us}>
        <div className={styles.content}>
            <h4>We are available 24/7
                for any of your enquires,
                get in touch with us today!</h4>
            <div className={styles.action_container}>
                <a href="mailto:support@gettruckdispatch.com" target="_blank">
                    <UiButton variant='white'>Contact Us</UiButton>
                </a>
                <UiButton> Get A Quote</UiButton>
            </div>
        </div>
    </div>
}
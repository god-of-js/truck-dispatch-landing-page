/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/policies.module.scss';

export default function PrivacyPolicy() {
    return (
        <main className={styles.policies}>
        <h2>Privacy Policy</h2>
        <p>
          Welcome to Truckdispatch, where we prioritize the protection and privacy of our users. 
          Below is our privacy policy that outlines how we collect, use, and protect your personal information:
        </p>
        <section>
          <h3>Information We Collect</h3>
          <p>
          We collect personal information, such as your name, contact information, and payment details, 
          when you use our services. We also collect information about your location, device, and usage of our platform.
          </p>
        </section>
        <section>
          <h3>Use of Information</h3>
          <p>
          We use your personal information to provide our services, such as matching shippers with carriers and processing payments.
           We may also use your information for marketing and communication purposes.
          </p>
        </section>
        <section>
          <h3>Sharing of Information</h3>
          <p>
          We share your personal information with third-party service providers, such as payment processors and insurance providers, 
          as necessary to provide our services. We may also share your information with law enforcement or regulatory agencies as required by law.
          </p>
        </section>
        <section>
          <h3>Security</h3>
          <p>
          We take reasonable measures to protect your personal information from unauthorized access or disclosure. 
          We use industry-standard security practices, such as encryption and firewalls, to safeguard your information.
          </p>
        </section>
        <section>
          <h3>Data Retention</h3>
          <p>
          We retain your personal information for as long as necessary to provide our services and fulfill 
          legal or regulatory obligations. We may also retain anonymized data for analytical or research purposes.
          </p>
        </section>
        <section>
          <h3>Your Rights</h3>
          <p>
          You have the right to access, correct, or delete your personal information. You may also request that we restrict or 
          stop processing your information. To exercise these rights, please contact us.
          </p>
        </section>
        <section>
          <h3>Children's Privacy</h3>
          <p>
          Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children, and if we become aware that we have done so, we will promptly delete the information.
          </p>
        </section>
        <section>
          <h3>Changes to Policy</h3>
          <p>
          We may update this privacy policy from time to time. We will notify you of any material changes and obtain your consent if required by law.
          </p>
        </section>
        <section>
          <h3>Contact Us</h3>
          <p>
          If you have any questions or concerns about our privacy policy or how we handle your personal information, please contact us.
          </p>
        </section>
        <section>
          <p>
          Thank you for using Truckdispatch. We are committed to protecting your privacy and will continue to update our policies and practices to ensure the security of your information.
          </p>
        </section>
        </main>
    )
}
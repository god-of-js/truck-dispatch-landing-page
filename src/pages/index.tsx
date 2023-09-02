
import Head from 'next/head';
import styles from './index.module.scss'
import Shipper1 from '../assets/shipper-1.jpeg'
import Shipper2 from '../assets/shipper-2.jpeg'
import Shipper3 from '../assets/shipper-3.jpeg'
import Shipper4 from '../assets/shipper-4.jpeg'
import Shipper5 from '../assets/shipper-5.jpeg'
import Transporter1 from '../assets/transporter-1.jpeg'
import Transporter2 from '../assets/transporter-2.jpeg'
import Transporter3 from '../assets/transporter-3.jpeg'
import Transporter4 from '../assets/transporter-4.jpeg'
import Transporter5 from '../assets/transporter-5.jpeg'
import HeroSection from '@/components/landing-page-components/HeroSection';
import ProductDemo from '@/components/landing-page-components/ProductDemo';
import UserTypes from '@/components/landing-page-components/UserTypes';

export default function Home() {
  const shipperAvatars = [
    Shipper3,
    Shipper2,
    Shipper5,
    Shipper4,
    Shipper1,
  ];

  const transporterAvatars = [
    Transporter1,
    Transporter2,
    Transporter3,
    Transporter4,
    Transporter5
  ]

  const peopleBenefits = [
    {
      title: 'Market Expertise',
      paragraph: 'Our organization comprises of leaders in the transport business with over 40 years experience.'
    },
    {
      title: 'Personal Contact',
      paragraph: 'Customer support and various means of communication available to take care of your professional needs.'
    },
    {
      title: 'Operational Excellence',
      paragraph: 'Long-term partnerships with vetted professional transporters.'
    },
  ]

  const clipboardTick = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="clipboard-tick">
      <g id="vuesax/bold/clipboard-tick">
        <g id="clipboard-tick_2">
          <path id="Vector" d="M14.35 2H9.65001C8.61001 2 7.76001 2.84 7.76001 3.88V4.82C7.76001 5.86 8.60001 6.7 9.64001 6.7H14.35C15.39 6.7 16.23 5.86 16.23 4.82V3.88C16.24 2.84 15.39 2 14.35 2Z" fill="#4326C4" />
          <path id="Vector_2" d="M17.24 4.81998C17.24 6.40998 15.94 7.70998 14.35 7.70998H9.65004C8.06004 7.70998 6.76004 6.40998 6.76004 4.81998C6.76004 4.25998 6.16004 3.90998 5.66004 4.16998C4.25004 4.91998 3.29004 6.40998 3.29004 8.11998V17.53C3.29004 19.99 5.30004 22 7.76004 22H16.24C18.7 22 20.71 19.99 20.71 17.53V8.11998C20.71 6.40998 19.75 4.91998 18.34 4.16998C17.84 3.90998 17.24 4.25998 17.24 4.81998ZM15.34 12.73L11.34 16.73C11.19 16.88 11 16.95 10.81 16.95C10.62 16.95 10.43 16.88 10.28 16.73L8.78004 15.23C8.49004 14.94 8.49004 14.46 8.78004 14.17C9.07004 13.88 9.55004 13.88 9.84004 14.17L10.81 15.14L14.28 11.67C14.57 11.38 15.05 11.38 15.34 11.67C15.63 11.96 15.63 12.44 15.34 12.73Z" fill="#4326C4" />
        </g>
      </g>
    </g>
  </svg>

  const chatIcon = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="message-text">
      <g id="vuesax/bold/message-text">
        <g id="message-text_2">
          <path id="Vector" d="M11.8334 1.3335H5.16671C3.32671 1.3335 1.83337 2.82016 1.83337 4.6535V8.64016V9.30683C1.83337 11.1402 3.32671 12.6268 5.16671 12.6268H6.16671C6.34671 12.6268 6.58671 12.7468 6.70004 12.8935L7.70004 14.2202C8.14004 14.8068 8.86004 14.8068 9.30004 14.2202L10.3 12.8935C10.4267 12.7268 10.6267 12.6268 10.8334 12.6268H11.8334C13.6734 12.6268 15.1667 11.1402 15.1667 9.30683V4.6535C15.1667 2.82016 13.6734 1.3335 11.8334 1.3335ZM9.16671 9.16683H5.16671C4.89337 9.16683 4.66671 8.94016 4.66671 8.66683C4.66671 8.3935 4.89337 8.16683 5.16671 8.16683H9.16671C9.44004 8.16683 9.66671 8.3935 9.66671 8.66683C9.66671 8.94016 9.44004 9.16683 9.16671 9.16683ZM11.8334 5.8335H5.16671C4.89337 5.8335 4.66671 5.60683 4.66671 5.3335C4.66671 5.06016 4.89337 4.8335 5.16671 4.8335H11.8334C12.1067 4.8335 12.3334 5.06016 12.3334 5.3335C12.3334 5.60683 12.1067 5.8335 11.8334 5.8335Z" fill="white" />
        </g>
      </g>
    </g>
  </svg>

  const callIcon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="call-add">
      <g id="vuesax/bold/call-add">
        <g id="call-add_2">
          <path id="Vector" d="M13.6667 3.50016H12.5V2.3335C12.5 2.06016 12.2734 1.8335 12 1.8335C11.7267 1.8335 11.5 2.06016 11.5 2.3335V3.50016H10.3334C10.06 3.50016 9.83337 3.72683 9.83337 4.00016C9.83337 4.2735 10.06 4.50016 10.3334 4.50016H11.5V5.66683C11.5 5.94016 11.7267 6.16683 12 6.16683C12.2734 6.16683 12.5 5.94016 12.5 5.66683V4.50016H13.6667C13.94 4.50016 14.1667 4.2735 14.1667 4.00016C14.1667 3.72683 13.94 3.50016 13.6667 3.50016Z" fill="white" />
          <path id="Vector_2" d="M7.36671 9.96683L6.13337 11.2002C5.87337 11.4602 5.46004 11.4602 5.19337 11.2068C5.12004 11.1335 5.04671 11.0668 4.97337 10.9935C4.28671 10.3002 3.66671 9.5735 3.11337 8.8135C2.56671 8.0535 2.12671 7.2935 1.80671 6.54016C1.49337 5.78016 1.33337 5.0535 1.33337 4.36016C1.33337 3.90683 1.41337 3.4735 1.57337 3.0735C1.73337 2.66683 1.98671 2.2935 2.34004 1.96016C2.76671 1.54016 3.23337 1.3335 3.72671 1.3335C3.91337 1.3335 4.10004 1.3735 4.26671 1.4535C4.44004 1.5335 4.59337 1.6535 4.71337 1.82683L6.26004 4.00683C6.38004 4.1735 6.46671 4.32683 6.52671 4.4735C6.58671 4.6135 6.62004 4.7535 6.62004 4.88016C6.62004 5.04016 6.57337 5.20016 6.48004 5.3535C6.39337 5.50683 6.26671 5.66683 6.10671 5.82683L5.60004 6.3535C5.52671 6.42683 5.49337 6.5135 5.49337 6.62016C5.49337 6.6735 5.50004 6.72016 5.51337 6.7735C5.53337 6.82683 5.55337 6.86683 5.56671 6.90683C5.68671 7.12683 5.89337 7.4135 6.18671 7.76016C6.48671 8.10683 6.80671 8.46016 7.15337 8.8135C7.22004 8.88016 7.29337 8.94683 7.36004 9.0135C7.62671 9.2735 7.63337 9.70016 7.36671 9.96683Z" fill="white" />
          <path id="Vector_3" d="M14.6467 12.2204C14.6467 12.407 14.6134 12.6004 14.5467 12.787C14.5267 12.8404 14.5067 12.8937 14.48 12.947C14.3667 13.187 14.22 13.4137 14.0267 13.627C13.7 13.987 13.34 14.247 12.9334 14.4137C12.9267 14.4137 12.92 14.4204 12.9134 14.4204C12.52 14.5804 12.0934 14.667 11.6334 14.667C10.9534 14.667 10.2267 14.507 9.46002 14.1804C8.69336 13.8537 7.92669 13.4137 7.16669 12.8604C6.90669 12.667 6.64669 12.4737 6.40002 12.267L8.58002 10.087C8.76669 10.227 8.93336 10.3337 9.07336 10.407C9.10669 10.4204 9.14669 10.4404 9.19336 10.4604C9.24669 10.4804 9.30002 10.487 9.36002 10.487C9.47336 10.487 9.56002 10.447 9.63336 10.3737L10.14 9.87369C10.3067 9.70702 10.4667 9.58035 10.62 9.50035C10.7734 9.40702 10.9267 9.36035 11.0934 9.36035C11.22 9.36035 11.3534 9.38702 11.5 9.44702C11.6467 9.50702 11.8 9.59369 11.9667 9.70702L14.1734 11.2737C14.3467 11.3937 14.4667 11.5337 14.54 11.7004C14.6067 11.867 14.6467 12.0337 14.6467 12.2204Z" fill="white" />
        </g>
      </g>
    </g>
  </svg>



  return (
    <>
      <Head>
        <title>TruckDispatch - Freight Transportation Services | Connect with Verified Carriers and Shippers</title>
        <meta name="description" content="TruckDispatch connects freight carriers and truck owners with shippers in need of transportation. Whether you're shipping goods across town or across the country, we can help you find the right truck to get the job done. Contact us today to learn more about our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeroSection
          title="Transform your <br /> Road freight & Cargo Delivery experience"
          subtitle="With vetted transporters, goods security, insurance, we promise a swift, reliable, and sustainable road freight transport."
          btnActionText='Get Started'
          btnActionUrl="/"
        />
        <ProductDemo />
        <UserTypes />
      </main>
    </>
  )
}

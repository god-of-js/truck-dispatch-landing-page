import Image from 'next/image';
import styles from './UserTypes.module.scss';
import Van from '../../assets/van.jpeg'
import Shipper1 from '../../assets/shipper-1.jpeg'
import Shipper2 from '../../assets/shipper-2.jpeg'
import Shipper3 from '../../assets/shipper-3.jpeg'
import Shipper4 from '../../assets/shipper-4.jpeg'
import Shipper5 from '../../assets/shipper-5.jpeg'
import Transporter1 from '../../assets/transporter-1.jpeg'
import Transporter2 from '../../assets/transporter-2.jpeg'
import Transporter3 from '../../assets/transporter-3.jpeg'
import Transporter4 from '../../assets/transporter-4.jpeg'
import Transporter5 from '../../assets/transporter-5.jpeg'
import UserTypeDetails, { UserType } from './UserTypeDetails';

export default function UserTypes() {
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

    const singularUserTypes: UserType[] = [
        {
            label: 'Shippers/Agents',
            description: 'Shippers/Agents are individuals who directly or indirectly have  cargo in need of Transport. We’ve created revolutionary ways to manage your cargo delivery.',
            actionLink: '',
            avatars: shipperAvatars,
            avatarContainerDirection: 'right'
        },
        {
            label: 'Transporters/Carriers',
            description: 'These are professional drivers or Truck owners who help move cargo for those that need cargo transport. With truckdispatch, Interaction with agents/shippers and companies have never been easier.',
            actionLink: '',
            avatars: transporterAvatars,
            avatarContainerDirection: 'left'
        }
    ];

    return (
        <section className={styles.user_types_section}>
            <div className={styles.user_types_banner}>
                <Image src={Van} alt="TruckDispatch Van" />
                <div className={styles.user_types_banner__content}>
                    <h2>Transport solutions for
                        Businesses & Individuals to <span className={styles.purple_text}>Solve</span> any cargo transport problems.</h2>
                    <p>Whether you’re an individual or a company, we have solutions available for you.
                        See the category that best fits you.</p>
                </div>
            </div>

            <div className={styles.double_grid}>
                {singularUserTypes.map((userType) => <div key={userType.label} className={styles.gray_bg}><UserTypeDetails userType={userType} /></div>)}
            </div>
        </section>
    )
}
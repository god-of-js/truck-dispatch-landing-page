import Image, { StaticImageData } from "next/image"
import UiButton from "../ui/UiButton";
import UiIcon from "../ui/UiIcon";
import styles from './UserTypeDetails.module.scss';

export interface UserType {
    label: string,
    description: string,
    actionLink?: string
    avatars?: StaticImageData[]
    avatarContainerDirection?: 'left' | 'right';
}

interface Props {
    userType: UserType
}
export default function UserTypeDetails({ userType }: Props) {
    const withAvatarStyling = `${styles.with_avatar} ${styles[`aligned_to_${userType.avatarContainerDirection}`]}`;

    return <div className={`${styles.user_type_details} ${userType.avatars ? withAvatarStyling : styles.without_avatar}`}>
        {userType.avatars && <div className={`${styles.avatars_container} ${styles[`align_${userType.avatarContainerDirection}`]}`}>
            <div className={styles.avatars_container__inner}>
                {userType.avatars.map((avatar, index) => (<div key={index} className={styles.avatar}>
                    <Image src={avatar} alt="Truckdispatch Transporters" />
                </div>))}
            </div>
        </div>}
        <div className={styles.content}>
            <h3>{userType.label}</h3>
            <p>{userType.description}</p>
            <div className={styles.action_container}>
                <UiButton variant="primary-text">LEARN MORE <UiIcon icon="ArrowRight" /> </UiButton>
            </div>
        </div>
    </div>
}
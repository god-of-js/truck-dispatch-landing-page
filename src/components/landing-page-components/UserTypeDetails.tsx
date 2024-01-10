import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import styles from "./UserTypeDetails.module.scss";

const UiButton = dynamic(() => import("../ui/UiButton"));
const UiIcon = dynamic(() => import("../ui/UiIcon"));

export interface UserType {
  label: string;
  description: string;
  actionLink?: string;
  avatars?: StaticImageData[];
  avatarContainerDirection?: "left" | "right";
}

interface Props {
  userType: UserType;
}
export default function UserTypeDetails({ userType }: Props) {
  const withAvatarStyling = `${styles.with_avatar} ${
    styles[`aligned_to_${userType.avatarContainerDirection}`]
  }`;

  return (
    <div
      className={`${styles.user_type_details} ${
        userType.avatars ? withAvatarStyling : styles.without_avatar
      }`}
    >
      {userType.avatars && (
        <div
          className={`${styles.avatars_container} ${
            styles[`align_${userType.avatarContainerDirection}`]
          }`}
        >
          <div className={styles.avatars_container__inner}>
            {userType.avatars.map((avatar, index) => (
              <div key={index} className={styles.avatar}>
                <Image
                  src={avatar}
                  alt="Truckdispatch gettruckdispatch Transporters"
                  width={82}
                  height={82}
                  sizes="(min-width: 580px) 82px, (min-width: 420px) 64px, 59px"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles.content}>
        <h3>{userType.label}</h3>
        <p>{userType.description}</p>
        <div className={styles.action_container}>
          <UiButton variant="primary-text">
            LEARN MORE <UiIcon icon="ArrowRight" />{" "}
          </UiButton>
        </div>
      </div>
    </div>
  );
}

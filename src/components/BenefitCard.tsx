import Image, { StaticImageData } from "next/image";
import styles from './BenefitCard.module.scss';

interface Benefit {
    title: string;
    subtitle: string;
    img: StaticImageData
}
interface Props {
    benefit: Benefit
}
export default function BenefitCard({ benefit }: Props) {
    return <div className={styles.benefit_card}>
        <div className={styles.hero_container}>
            <Image src={benefit.img} alt="Truckdispatch benefit" />
        </div>
        <div className={styles.content}>
            <h3>{benefit.title}</h3>
            <p>{benefit.subtitle}</p>
        </div>
    </div>
}
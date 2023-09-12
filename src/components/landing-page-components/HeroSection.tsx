import UiButton from "../ui/UiButton";
import styles from './HeroSection.module.scss';

interface Props {
    title: string;
    subtitle: string;
    btnActionText: string;
    btnActionUrl: string;
    isActionExternal?: boolean
}
export default function HeroSection({ title, subtitle, btnActionText, btnActionUrl }: Props) {
    return (
        <section className={styles.hero_section}>
            <h1 dangerouslySetInnerHTML={{__html: title}} />
            <p>{subtitle}</p>
            <UiButton>{btnActionText}</UiButton>
        </section>
    )
}
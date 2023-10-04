import UiButton from "../ui/UiButton";
import styles from './HeroSection.module.scss';

interface Props {
    title: string;
    subtitle: string;
    btnActionText: string;
    btnUrl: string;
    isBtnUrlActive?:boolean;
    isActionExternal?: boolean
}
export default function HeroSection({ title, subtitle, btnActionText, btnUrl, isBtnUrlActive }: Props) {
    return (
        <section className={styles.hero_section}>
            <h1 dangerouslySetInnerHTML={{__html: title}} />
            <p>{subtitle}</p>
            {isBtnUrlActive?
              <a href={`${btnUrl}`}>
                 <UiButton>{btnActionText}</UiButton>
              </a>
            :
            <UiButton>{btnActionText}</UiButton>
            }
        </section>
    )
}
import { useState } from 'react';
import styles from '@/styles/UiList.module.scss';

interface Data {
  title: string;
  subtitle: string;
  boldSubtitleStarter?: string;
}
interface Props {
  data: Data[];
}
export default function ListComponent({ data }: Props) {
  const [active, setActive] = useState(data[0].title);
  const activeColor = 'rgb(102, 112, 133)'
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={styles.ui_list} onClick={() => setActive(item.title)}>
          <div className={styles.indicator}>
            <div className={styles.indicator_inner}>
              <div className={styles.line} style={item.title === active ? { borderTop: `1px solid ${activeColor}`} : {}} />
              <div className={styles.square} style={item.title === active? {background: 'white'} : {}} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.heading}>{item.title}</div>
            {item.title === active && (
              <div className={styles.subtitle}>
                <b>{item.boldSubtitleStarter}</b> {item.subtitle}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

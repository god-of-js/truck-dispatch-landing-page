import { useState } from 'react';
import styles from './UiList.module.scss';

export interface Data {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  boldSubtitleStarter?: string;
}
interface Props {
  data: Data[];
}
export default function ListComponent({ data }: Props) {
  return (
    <ul className={styles.ui_list}>
      {data.map((item, index) => (
        <li key={index}>
          <div className={styles.icon_container}>{item.icon}</div>
          <div className={styles.content_container}>
            <h5>{item.title}</h5>
            <p>{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

import React from 'react';
import styles from './UiButton.module.scss';

const textTransformations = ['uppercase', 'lowercase', 'capitalize'];
interface Props {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?:
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'primary-outlined'
  | 'secondary-outlined'
  | 'primary-text'
  | 'dark'
  | 'dark-outlined'
  | 'icon'
  | 'danger';
  size?: Sizes;
  type?: 'submit' | 'button';
  textCasing?: 'uppercase' | 'lowercase' | 'capitalize';
  isSquare?: boolean;
  /** This prop decides if we want the button to fit the content or be full width */
  isFullWidth?: boolean;
  onClick?: () => void;
}

type Sizes = 'large' | 'md' | 's' | 'text';

export default function UiButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
  type = 'submit',
  size = 'md',
}: Props) {
  return (
    <button
      className={`${styles.ui_button} ${styles[variant || 'primary']} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? <span>Loading...</span> : children}
    </button>
  );
}

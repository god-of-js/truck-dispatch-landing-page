import React from 'react';
import styles from '@/styles/UiButton.module.scss';

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

type Sizes = 'large' | 'md' | 's';

export default function UiButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
  type = 'submit',
  textCasing = 'uppercase',
  size = 'md',
  isFullWidth = false,
}: Props) {
  function generateStyleBasedOnprops(): Record<string, string> {
    const styledObj = getSize();

    styledObj.opacity = disabled || loading ? '0.6' : '1';
    styledObj.textTransform = textTransformations.includes(textCasing) ? textCasing : 'uppercase';

    if (isFullWidth) styledObj.width = '100%';
    return styledObj;
  }

  function getSize() {
    const sizeFiller = (padding: number, height: number): Record<string, string> => ({
      padding: ` 16px ${padding}px`,
      height: `${height}px`
    })

    if (size === 's') {
      return sizeFiller(16, 36)
    }

    if (size === 'large') {
      return sizeFiller(16, 52)
    }

    return sizeFiller(46, 46)

  }

  return (
    <button
      className={`${styles.ui_button} ${styles[variant || 'primary']}`}
      style={{...generateStyleBasedOnprops()}}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? <span>Loading...</span> : children}
    </button>
  );
}

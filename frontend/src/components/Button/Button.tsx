import * as React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

interface IProps {
  intent?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  size?: 'large' | 'small' | 'full';
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  margin?: boolean;
  className?: string;
}

const Button: React.FC<IProps> = ({
  className,
  children,
  disabled = false,
  intent,
  loading = false,
  onClick,
  type = 'button',
  margin = true,
  size,
}) => (
  <button
    className={cn(
      styles.button,
      {
        [styles.primary]: intent === 'primary',
        [styles.success]: intent === 'success',
        [styles.warning]: intent === 'warning',
        [styles.danger]: intent === 'danger',
        [styles.noMargin]: !margin,
        [styles.loading]: loading,
        [styles.large]: size === 'large',
        [styles.full]: size === 'full',
      },
      className,
    )}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;

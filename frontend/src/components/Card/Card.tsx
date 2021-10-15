import * as React from 'react';
import cn from 'classnames';
import styles from './Card.module.css';

interface IProps {
  intent?: 'primary' | 'secondary' | 'none' | 'white';
  className?: string;
  elevation?: 1 | 2;
  noMargin?: boolean;
}

const Card: React.FC<IProps> = ({
  children,
  intent = 'none',
  className,
  elevation,
  noMargin,
}) => (
  <div
    className={cn(
      styles.container,
      {
        [styles.primary]: intent === 'primary',
        [styles.secondary]: intent === 'secondary',
        [styles.white]: intent === 'white',
        [styles['elevation-1']]: elevation === 1,
        [styles['elevation-2']]: elevation === 2,
        [styles['no-margin']]: noMargin,
      },
      className,
    )}
  >
    {children}
  </div>
);

export default Card;

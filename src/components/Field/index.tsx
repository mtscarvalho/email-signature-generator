import { ReactNode } from 'react';
import classes from './style.module.css';

type Props = {
  fullWidth?: boolean;
  children: ReactNode;
};

export function Field({ fullWidth, children }: Props) {
  return <div className={`${classes.field}  ${fullWidth ? classes.fullWidth : ''}`}>{children}</div>;
}

import { ReactNode } from 'react';
import classes from './style.module.css';

type Props = {
  htmlFor: string;
  children: ReactNode;
};

export function Label({ htmlFor, children }: Props) {
  return (
    <>
      <label className={classes.label} htmlFor={htmlFor}>
        {children}
      </label>
    </>
  );
}

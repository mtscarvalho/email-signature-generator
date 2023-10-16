import { ReactNode } from 'react';
import classes from './style.module.css';

type Props = {
  children: ReactNode;
};

export function Form({ children }: Props) {
  return (
    <>
      <form className={classes.form}>{children}</form>
    </>
  );
}

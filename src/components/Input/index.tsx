import { ChangeEvent, InputHTMLAttributes, FC } from 'react';

import classes from './style.module.css';

type InputProps = {
  name: string;
  value: string;
  type: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ name, value, ...props }: InputProps): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <input className={classes.input} id={name} name={name} value={value} {...props} />
    </div>
  );
}

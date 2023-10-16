import { ReactNode } from 'react';
import classes from './style.module.css';

type Props = {
  children: ReactNode;
};

export function Preview({ children }: Props) {
  return (
    <>
      <div className={classes.preview}>
        <div className={classes.topbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={classes.header}>
          <p>Para: Seu destinatário</p>
          <p>Assunto: Minha assinatura ❤️</p>
        </div>
        <div className={classes.body}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <p>—</p>
        </div>
        <div className={classes.signature}>{children}</div>
      </div>
    </>
  );
}

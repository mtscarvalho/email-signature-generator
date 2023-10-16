import classes from './style.module.css';

import { TUserData } from '../App';

type Props = {
  data: TUserData;
};

export function Signature({ data }: Props) {
  const { fname, lname, role, department, email, cell, whatsapp, phone, extension } = data;

  return (
    // prettier-ignore
    <div className={classes.signature}>
      <p>{!fname && !lname ? 'Nome' : `${fname} ${lname}`}</p>
      <p>{role} {role && department && '|'} {department}</p>
      <p><a href={`mailto:${email}`}>{!email ? 'nome@jogajunto.co' : email}</a></p>
      <p><a href="https://jogajunto.co/">jogajunto.co</a></p>
    </div>
  );
}

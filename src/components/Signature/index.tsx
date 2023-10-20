import classes from './style.module.css';

import { Name } from './components/Name';
import { Email } from './components/Email';
import { JobTitle } from './components/JobTitle';
import { Cell } from './components/Cell';
import { Website } from './components/Website';
import { Logo } from './components/Logo';
import { VCard } from './components/VCard';

import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
  vCard: string;
};

export function Signature({ data, vCard }: Props) {
  return (
    <table className={classes.signature}>
      <tbody>
        <tr>
          <td
            style={{
              paddingLeft: '1em',
            }}
          >
            <Name data={data} />
            <JobTitle data={data} />
            <Email data={data} />
            <Cell data={data} />
            <Website data={data} />
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: '.5em 0 .5em 1em',
            }}
          >
            <VCard url={vCard} />
          </td>
        </tr>
        <tr>
          <td
            style={{
              paddingLeft: '1em',
            }}
          >
            <Logo data={data} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

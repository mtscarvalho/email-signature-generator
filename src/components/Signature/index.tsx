import classes from './style.module.css';

import { Name } from './components/Name';
import { Email } from './components/Email';
import { JobTitle } from './components/JobTitle';
import { Cell } from './components/Cell';
import { Website } from './components/Website';
import { Logo } from './components/Logo';
import { Social } from './components/Social';
import { VCard } from './components/VCard';

import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
  vCard: string;
};

const textStyles = {
  text: {
    backgroundColor: 'none',
    color: '#000',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '1em',
    lineHeight: '1.7em',
  },
  link: {
    backgroundColor: 'none',
    color: '#000',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '1em',
    lineHeight: '1.7em',
    textDecoration: 'none',
  },
};

export function Signature({ data, vCard }: Props) {
  return (
    <table className={classes.signature}>
      <tbody>
        <tr>
          <td style={{ paddingLeft: '1em' }}>
            <Name data={data} style={textStyles} />
            <JobTitle data={data} style={textStyles} />
            <Email data={data} style={textStyles} />
            <Cell data={data} style={textStyles} />
            <Website data={data} style={textStyles} />
          </td>
        </tr>
        <tr>
          <td style={{ padding: '.5em 0 .5em 1em' }}>
            <VCard url={vCard} style={textStyles} />
          </td>
        </tr>
        <tr>
          <td>
            <Logo data={data} style={textStyles} />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft: '.5em' }}>
            <Social data={data} style={textStyles} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

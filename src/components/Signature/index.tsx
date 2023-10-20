import classes from './style.module.css';

import { Name } from './Name';
import { Email } from './Email';
import { JobTitle } from './JobTitle';
import { Cell } from './Cell';
import { Site } from './Site';

import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
};

export function Signature({ data }: Props) {
  return (
    <table className={classes.signature}>
      <tbody>
        <tr>
          <td>
            <Name data={data} />
            <JobTitle data={data} />
            <Email data={data} />
            <Cell data={data} />
            <Site data={data} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

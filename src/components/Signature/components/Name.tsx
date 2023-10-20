import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
};

export function Name({ data }: Props) {
  const { fname, lname } = data;

  const name = fname || lname ? `${fname} ${lname}` : 'Nome';

  return <p>{name}</p>;
}

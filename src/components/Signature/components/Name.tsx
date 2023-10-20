import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
  style: {
    text: React.CSSProperties;
    link: React.CSSProperties;
  };
};

export function Name({ data, style }: Props) {
  const { fname, lname } = data;
  const name = fname || lname ? `${fname} ${lname}` : 'Nome';

  return <p style={style.text}>{name}</p>;
}

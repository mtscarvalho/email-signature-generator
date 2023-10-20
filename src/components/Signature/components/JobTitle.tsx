import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
  style: {
    text: React.CSSProperties;
    link: React.CSSProperties;
  };
};

export function JobTitle({ data, style }: Props) {
  const { role, department } = data;

  if (!role && !department) {
    return;
  }

  return (
    <p style={style.text}>
      {role} {role && department && '|'} {department}
    </p>
  );
}

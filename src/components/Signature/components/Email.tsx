import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
  style: {
    text: React.CSSProperties;
    link: React.CSSProperties;
  };
};

export function Email({ data, style }: Props) {
  const email = data.email || 'nome@jogajunto.com.br';

  return (
    <p style={style.text}>
      <a style={style.link} href={`mailto:${email}`}>
        {email}
      </a>
    </p>
  );
}

import { TUserData } from 'src/lib/data';
import logo from 'src/assets/jogajunto.png';

type Props = {
  data: TUserData;
  style: {
    text: React.CSSProperties;
    link: React.CSSProperties;
  };
};

export function Logo({ data, style }: Props) {
  const { website: site } = data;

  return (
    <p style={style.text}>
      <a style={style.link} href={site}>
        <img src={logo} alt="Logo" width={180} />
      </a>
    </p>
  );
}

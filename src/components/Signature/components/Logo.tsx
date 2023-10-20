import { TUserData } from 'src/lib/data';
import logo from 'src/assets/jogajunto.png';

type Props = {
  data: TUserData;
};

export function Logo({ data }: Props) {
  const { website: site } = data;

  return (
    <p>
      <a href={`https://${site}`}>
        <img src={logo} alt="Logo" width={180} />
      </a>
    </p>
  );
}

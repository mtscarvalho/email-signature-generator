import { TUserData } from 'src/lib/data';
import { extractDomainFromUrl } from 'src/lib/utils';

type Props = {
  data: TUserData;
  style: {
    text: React.CSSProperties;
    link: React.CSSProperties;
  };
};

export function Website({ data, style }: Props) {
  const { website } = data;

  return (
    <p style={style.text}>
      <a style={style.link} href={website}>
        {extractDomainFromUrl(website)}
      </a>
    </p>
  );
}

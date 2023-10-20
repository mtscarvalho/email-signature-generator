import { TUserData } from 'src/lib/data';
import { extractDomainFromUrl } from 'src/lib/utils';

type Props = {
  data: TUserData;
};

export function Website({ data }: Props) {
  const { website } = data;

  return (
    <p>
      <a href={website}>{extractDomainFromUrl(website)}</a>
    </p>
  );
}

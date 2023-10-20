import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
};

export function Site({ data }: Props) {
  const { site } = data;

  return (
    <p>
      <a href={`https://${site}`}>{site}</a>
    </p>
  );
}

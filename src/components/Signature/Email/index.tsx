import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
};

export function Email({ data }: Props) {
  const email = data.email || 'nome@jogajunto.com.br';

  return (
    <p>
      <a href={`mailto:${email}`}>{email}</a>
    </p>
  );
}

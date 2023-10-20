import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
};

export function JobTitle({ data }: Props) {
  const { role, department } = data;

  if (!role && !department) {
    return;
  }

  return (
    <>
      <p>
        {role} {role && department && '|'} {department}
      </p>
    </>
  );
}

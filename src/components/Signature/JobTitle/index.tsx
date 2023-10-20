import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
};

export function JobTitle({ data }: Props) {
  const { role, department } = data;

  return (
    <>
      {role || department ? (
        <p>
          {role} {role && department && '|'} {department}
        </p>
      ) : null}
    </>
  );
}

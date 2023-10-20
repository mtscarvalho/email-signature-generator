import { removePhoneMask } from 'src/lib/utils';
import { TUserData } from 'src/lib/data';

type Props = {
  data: TUserData;
};

export function Cell({ data }: Props) {
  const { cell, whatsapp } = data;

  return (
    <>
      {cell || whatsapp ? (
        <p>
          {cell ? <a href={`tel:+${removePhoneMask(cell)}`}>{cell}</a> : null}
          {cell && whatsapp ? ' | ' : null}
          {whatsapp ? <a href={`https://wa.me/${removePhoneMask(whatsapp)}`}>WhatsApp</a> : null}
        </p>
      ) : null}
    </>
  );
}

import { TUserData } from 'src/lib/data';
import { removePhoneMask } from 'src/lib/utils';

type Props = {
  data: TUserData;
};

function formatPhoneNumber(phone: string) {
  return <a href={`tel:+${removePhoneMask(phone)}`}>{phone}</a>;
}

function formatWhatsAppLink(phone: string) {
  return <a href={`https://wa.me/${removePhoneMask(phone)}`}>WhatsApp</a>;
}

export function Cell({ data }: Props) {
  const { cell, whatsapp } = data;

  if (!cell && !whatsapp) {
    return;
  }

  return (
    <p>
      {cell && formatPhoneNumber(cell)}
      {cell && whatsapp && ' | '}
      {whatsapp && formatWhatsAppLink(whatsapp)}
    </p>
  );
}

export default Cell;

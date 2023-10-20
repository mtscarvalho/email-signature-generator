import { TUserData } from 'src/lib/data.js';
import { removePhoneMask } from 'src/lib/utils.js';

const useVCard = (data: TUserData) => {
  const { fname, lname, company, role, department, email, cell, website } = data;

  const source = 'https://dry-bush-14e1.vcard.workers.dev/?';
  const values = {
    fname: `fn=${encodeURI(fname)}`,
    lname: `&ln=${encodeURI(lname)}`,
    company: `&org=${encodeURI(company)}`,
    title: role && department ? `&t=${encodeURI(`${role} | ${department}`)}` : role ? `&t=${encodeURI(role)}` : department ? `&t=${encodeURI(department)}` : '',
    email: `&e=${email}`,
    tel: `&tel=${removePhoneMask(cell)}`,
    website: `&u=${website}`,
  };
  const vCardLink = `${source}${Object.values(values).join('')}`;

  return {
    vCardLink,
  };
};

export default useVCard;

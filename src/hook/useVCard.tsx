import { TUserData } from 'src/lib/data.js';
import { removePhoneMask } from 'src/lib/utils.js';

const useVCard = (data: TUserData) => {
  const source = 'https://dry-bush-14e1.vcard.workers.dev/?';

  const values = {
    fname: data.fname,
    lname: data.lname,
    company: data.company,
    title: data.role && data.department ? `${data.role} | ${data.department}` : data.role ? data.role : data.department ? data.department : '',
    email: data.email,
    tel: removePhoneMask(data.cell),
    website: data.website,
  };

  const query = {
    fname: `fn=${values.fname}`,
    lname: `&ln=${values.lname}`,
    company: `&org=${values.company}`,
    title: `&t=${values.title}`,
    email: `&e=${values.email}`,
    tel: `&tel=${values.tel}`,
    website: `&u=${values.website}`,
  };

  const vCardLink = `${source}${Object.values(query).join('')}`;

  return vCardLink;
};

export default useVCard;

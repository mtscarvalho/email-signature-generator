export type TUserData = {
  fname: string;
  lname: string;
  company: string;
  role: string;
  department: string;
  email: string;
  cell: string;
  whatsapp: string;
  website: string;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    shorts: string;
    threads: string;
    tiktok: string;
    x: string;
    youtube: string;
  };
};

export const initialUserData: TUserData = {
  fname: '',
  lname: '',
  company: 'Jogajunto',
  role: '',
  department: '',
  email: '',
  cell: '',
  whatsapp: '',
  website: 'https://jogajunto.co/',
  social: {
    facebook: 'https://www.facebook.com/agenciajogajunto/',
    instagram: 'https://www.instagram.com/agenciajogajunto/',
    linkedin: 'https://www.linkedin.com/company/jogajunto/',
    shorts: 'https://www.youtube.com/@agenciajogajunto/shorts',
    threads: 'https://www.threads.net/@agenciajogajunto',
    tiktok: 'https://www.tiktok.com/@agenciajogajunto',
    x: 'https://twitter.com/ajogajunto',
    youtube: 'https://www.youtube.com/@agenciajogajunto',
  },
};

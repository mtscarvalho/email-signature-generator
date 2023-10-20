import { TUserData } from 'src/lib/data';

import facebookIcon from 'src/assets/social/facebook.png';
import instagramIcon from 'src/assets/social/instagram.png';
import linkedinIcon from 'src/assets/social/linkedin.png';
import shortsIcon from 'src/assets/social/shorts.png';
import threadsIcon from 'src/assets/social/threads.png';
import tiktokIcon from 'src/assets/social/tiktok.png';
import xIcon from 'src/assets/social/x.png';
import youtubeIcon from 'src/assets/social/youtube.png';

type Props = {
  data: TUserData;
  style: {
    text: React.CSSProperties;
    link: React.CSSProperties;
  };
};

const socialMediaIcons = [
  { name: 'Facebook', icon: facebookIcon },
  { name: 'Instagram', icon: instagramIcon },
  { name: 'LinkedIn', icon: linkedinIcon },
  { name: 'Shorts', icon: shortsIcon },
  { name: 'Threads', icon: threadsIcon },
  { name: 'TikTok', icon: tiktokIcon },
  { name: 'X', icon: xIcon },
  { name: 'YouTube', icon: youtubeIcon },
];

export function Social({ data, style }: Props) {
  const { social } = data;

  return (
    <table>
      <tbody>
        <tr>
          {socialMediaIcons.map((item, index) => (
            <td key={index}>
              <p style={style.text}>
                <a style={style.link} href={social[item.name.toLowerCase() as keyof typeof social]} target="_blank" title={item.name}>
                  <img src={item.icon} alt={`${item.name} Logo`} width={32} />
                </a>
              </p>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

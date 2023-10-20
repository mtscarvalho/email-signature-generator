type Props = {
  url: string;
  style: {
    text: React.CSSProperties;
    link: React.CSSProperties;
  };
};

export function VCard({ url, style }: Props) {
  return (
    <p style={style.text}>
      <a style={style.text} href={url}>
        Salvar contato
      </a>
    </p>
  );
}

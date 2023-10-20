type Props = {
  url: string;
};

export function VCard({ url }: Props) {
  return (
    <p>
      <a href={url}>Salvar contato</a>
    </p>
  );
}

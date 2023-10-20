export function setPhoneMask(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
}

export function removePhoneMask(value: string) {
  return '+55' + value.replace(/\D/g, '');
}

export function extractDomainFromUrl(url: string) {
  const domain = url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');
  return domain;
}

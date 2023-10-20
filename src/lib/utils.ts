export function setPhoneMask(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
}

export function removePhoneMask(value: string) {
  return value?.replace(/\D/g, '').replace(/^0/, '55');
}

export function getWhatsAppHref(phone: string, message: string) {
  const number = phone.replace(/\D/g, "");

  if (number.length < 10) {
    return null;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

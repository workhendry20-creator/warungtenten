/**
 * Menghasilkan tautan langsung WhatsApp yang aman dengan sanitasi nomor telepon dan encoding parameter pesan.
 * @param phone Nomor telepon WhatsApp (e.g. "6287882927779" atau "+62 878-8292-7779")
 * @param message Teks pesan otomatis yang akan dikirimkan
 * @returns Format URL aman https://wa.me/{cleanPhone}?text={encodedText}
 */
export const getWhatsAppUrl = (phone: string, message: string): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};

export default getWhatsAppUrl;

// Single source of truth for contact details. Taken from the club's Google Maps listing and Instagram posts;
// have the owner confirm everything (especially the WhatsApp number) before launch.
export const business = {
  name: 'The One Fitness Club',
  area: 'Tilak Nagar, Mumbai',
  instagramHandle: 'theonefitnessclub28',
  instagramUrl: 'https://www.instagram.com/theonefitnessclub28/',
  whatsappNumber: '917045214113', // digits only, with country code
  phone: '+917045214113',
  phoneDisplay: '070452 14113',
  altPhone: '+918779586466',
  altPhoneDisplay: '87795 86466',
  address: 'B, Ravi Kiran Housing Society, Ravi Kiran, 7-A, Rd Number 12, Chembur West, Tilak Nagar, Chembur, Mumbai, Maharashtra 400089',
  hours: '5:30 am – 11 pm, every day',
  openMinute: 330, // 5:30 am
  closeMinute: 1380, // 11 pm
  lat: 19.0699268,
  lng: 72.8986675,
  mapsUrl: 'https://www.google.com/maps/place/The+One+Fitness+Club/@19.0699268,72.8986675,17z',
  studioName: 'Pythos Studio',
  studioUrl: 'https://github.com/PythosX'
}
export const whatsappReady = /^\d{10,15}$/.test(business.whatsappNumber)
export const waLink = (text: string) => `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`

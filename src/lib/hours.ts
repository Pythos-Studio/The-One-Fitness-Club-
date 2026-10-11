import { business } from '../config/business'
// Open/closed status in Indian Standard Time.
export function openStatus() {
  const ist = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const m = ist.getHours() * 60 + ist.getMinutes()
  const open = m >= business.openMinute && m < business.closeMinute
  return { open, text: open ? 'Open now · until 11 pm' : 'Closed now · opens 5:30 am' }
}

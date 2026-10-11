// price: null => shows "Contact us for current plans". Never publish unconfirmed prices.
export interface Plan { id: string; name: string; duration: string; price: number | null; includes: string[]; terms: string }
export const plans: Plan[] = [
  { id: 'monthly', name: 'Monthly', duration: '1 month', price: null, includes: ['Gym floor access', 'Equipment access'], terms: 'Details confirmed by the club.' },
  { id: 'quarterly', name: 'Quarterly', duration: '3 months', price: null, includes: ['Gym floor access', 'Equipment access'], terms: 'Details confirmed by the club.' },
  { id: 'annual', name: 'Annual', duration: '12 months', price: null, includes: ['Gym floor access', 'Equipment access'], terms: 'Details confirmed by the club.' },
  { id: 'pt', name: 'Personal Training add-on', duration: 'Ask the team', price: null, includes: ['Individual guidance'], terms: 'Subject to availability. Confirm with the club.' }
]

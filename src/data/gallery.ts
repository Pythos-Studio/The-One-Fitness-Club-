// All photos live in /public/images. Swap or add files here; labels are shown on the site.
export interface Shot { id: string; label: string; alt: string; src: string; cls?: string }

export const facilities: Shot[] = [
  { id: 'strength', label: 'Strength floor', alt: 'Member training with a weight plate', src: '/images/strength.webp', cls: 'row-span-2 md:col-span-2' },
  { id: 'machines', label: 'Resistance machines', alt: 'Blue resistance machines in sunlight', src: '/images/machines.webp', cls: 'row-span-2 md:col-span-2' },
  { id: 'cardio', label: 'Cardio zone', alt: 'Cross trainers under purple light', src: '/images/cardio.webp', cls: 'row-span-2 md:col-span-2' },
  { id: 'treadmill', label: 'Treadmills', alt: 'Trainer guiding a member on a treadmill', src: '/images/treadmill.webp', cls: 'md:col-span-3' },
  { id: 'reception', label: 'Premium+ reception', alt: 'The One Fitness Club Premium+ signage', src: '/images/reception.webp', cls: 'md:col-span-3' }
]
export const community: Shot[] = [
  { id: 'team', label: 'The team', alt: 'The One Fitness Club team in red polos', src: '/images/team.webp' },
  { id: 'trainer', label: 'On the gym floor', alt: 'Trainer with arms crossed', src: '/images/trainer.webp' },
  { id: 'member2', label: 'Members at work', alt: 'Member doing dumbbell curls', src: '/images/member2.webp' },
  { id: 'trio', label: 'Trainers', alt: 'Three trainers in club t-shirts', src: '/images/trio.webp' },
  { id: 'back', label: 'Cable training', alt: 'Member at a cable machine', src: '/images/ig-back.webp' }
]
export const social: Shot[] = [
  { id: 'i1', label: 'What to eat before and after a workout', alt: 'Nutrition post', src: '/images/nutrition.webp' },
  { id: 'i2', label: 'Fitness myths', alt: 'Stop believing fitness myths post', src: '/images/myths.webp' },
  { id: 'i3', label: 'Cable day', alt: 'Member at a cable machine', src: '/images/ig-cable.webp' },
  { id: 'i4', label: 'Holi at the club', alt: 'Holi celebration at the gym', src: '/images/holi.webp' },
  { id: 'i5', label: 'Core challenge', alt: 'Core challenge workout', src: '/images/ig-core.webp' },
  { id: 'i6', label: 'Back day', alt: 'Back training', src: '/images/ig-back.webp' }
]

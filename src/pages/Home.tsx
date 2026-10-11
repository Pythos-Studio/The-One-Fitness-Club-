import { useState } from 'react'
import Preloader from '../components/Preloader'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Facilities from '../components/Facilities'
import Programs from '../components/Programs'
import TrainingJourney from '../components/TrainingJourney'
import TrainersCommunity from '../components/TrainersCommunity'
import Membership from '../components/Membership'
import FitnessInsights from '../components/FitnessInsights'
import InstagramGallery from '../components/InstagramGallery'
import InquiryForm from '../components/InquiryForm'
import Location from '../components/Location'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  const [plan, setPlan] = useState('')
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero /><About /><Facilities /><Programs /><TrainingJourney /><TrainersCommunity />
        <Membership selected={plan} onSelect={setPlan} />
        <FitnessInsights /><InstagramGallery />
        <InquiryForm plan={plan} onPlan={setPlan} />
        <Location /><FinalCTA />
      </main>
      <Footer />
    </>
  )
}

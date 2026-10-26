import React from 'react'
import AboutHero from '../components/about/AboutHero'
import CompanyOverview from '../components/about/CompanyOverview'
import OurJourney from '../components/about/OurJourney'
import VisionMission from '../components/about/VisionMission'
import OurCoreValues from '../components/about/OurCoreValues'
import CompanyInformation from '../components/about/CompanyInformation'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <CompanyOverview/>
      <OurJourney/>
      <VisionMission/>
      <OurCoreValues/>
      <CompanyInformation/>
    </div>
  )
}

export default About

import React from 'react'
import Hero from '../components/home/Hero'
import CompanyHighlights from '../components/home/CompanyHighlights'
import AboutCompany from '../components/home/AboutCompany'
import ProductCategories from '../components/home/ProductCategories'
import ProfessionalServices from '../components/home/ProfessionalServices'
import WhyChooseUs from '../components/home/WhyChooseUs'
import IndustriesApplications from '../components/home/IndustriesApplications'
import EnquiryCTA from '../components/home/EnquiryCTA'


const Home = () => {
  return (
    <div>
      <Hero/>
      <CompanyHighlights/>
      <AboutCompany/>
      <ProductCategories/>
      <ProfessionalServices/>
      <WhyChooseUs/>
      <IndustriesApplications/>
      <EnquiryCTA/>
    </div>
  )
}

export default Home

import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactInformation from '../components/contact/ContactInformation'
import EnquiryForm from '../components/contact/EnquiryForm'
import ContactMap from '../components/contact/ContactMap'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <ContactInformation/>
      <EnquiryForm/>
      <ContactMap/>
    </div>
  )
}

export default Contact

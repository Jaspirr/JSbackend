import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import Breadcrumb from '../sections/BreadcrumbSection'

const CategoriesView: React.FC = () => {

  return (
    <>
        <MainMenuSection />
        <Breadcrumb currentPage="Categories"/>
        <FooterSection />
    </>
  )
}

export default CategoriesView
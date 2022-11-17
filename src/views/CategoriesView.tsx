import React from 'react'
import FooterSection from '../sections/FooterSection'
import { MainMenuSection } from '../sections/MainMenuSection'
import Breadcrumb from '../sections/BreadcrumbSection'

const CategoriesView = () => {
  window.top.document.title = 'Categories | Fixxo.'

  return (
    <>
        <MainMenuSection />
        <Breadcrumb currentPage="Categories"/>
        <FooterSection />
    </>
  )
}

export default CategoriesView
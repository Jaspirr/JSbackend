import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import { MainMenuSection } from '../sections/MainMenuSection'
import TopSaleSection from '../sections/TopSaleSection'
import ProductGridSection from '../sections/ProductGridSection'
import { GoodInfo } from '../sections/GoodInfo'
import { FeaturedProductsContext } from '../contexts/contexts'
import { SaleContext } from '../contexts/contexts'
import InspoSection from '../sections/InspoSection'
import GridLeft from '../sections/GridLeft'
import GridRight from '../sections/GridRight'



const HomeView = () => {
    window.top.document.title = 'Fixxo.'
    const products = useContext(FeaturedProductsContext)
    const sale = useContext(SaleContext)

    
    
    return (
        <>
            <MainMenuSection />
            <TopSaleSection />
            <ProductGridSection title="Featured Products" items={products}/>
            <InspoSection />
            <GridLeft items={sale}/>
            <GridRight items={sale}/>
            <GoodInfo />
            <FooterSection />
        </>
    )
}

export default HomeView
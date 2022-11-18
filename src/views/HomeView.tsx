import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import TopSaleSection from '../sections/TopSaleSection'
import ProductGridSection from '../sections/ProductGridSection'
import { GoodInfo } from '../sections/Goodinfo'
import { FeaturedProductsContext } from '../contexts/contexts'
import { SaleContext } from '../contexts/contexts'
import InspoSection from '../sections/InspoSection'
import GridLeft from '../sections/GridLeft'
import GridRight from '../sections/GridRight'
import { Product } from '../models/Products'


const HomeView: React.FC = () => {
    const products = useContext(FeaturedProductsContext)
    const sale = useContext(SaleContext)

    
    return (
        <>
            <MainMenuSection />
            <TopSaleSection />
            <ProductGridSection title="Featured Products" items={products} articleNumber={''}/>
            <InspoSection />
            <GridLeft items={sale}/>
            <GridRight items={sale} product={undefined}/>
            <GoodInfo />
            <FooterSection />
        </>
    )
}

export default HomeView
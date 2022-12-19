import React, { useEffect, useState } from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import NotFoundView from './views/NotFoundView';
import { FeaturedProductsContext, ProductContext, SaleContext } from './contexts/contexts';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { ProductProvider } from './contexts/ProductContext';

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [sale, setSale] = useState([])
   
  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedProducts = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedProducts()

    const fetchSaleData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setSale(await result.json())
    }
    fetchSaleData()

  }, [setProducts, setFeatured, setSale])

  
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <ProductProvider>
          <ProductContext.Provider value={products}>
            <FeaturedProductsContext.Provider value={featured}>
              <SaleContext.Provider value={sale}>
                <Routes>
                  <Route path="/" element={<HomeView />} />
                  <Route path="/categories" element={<CategoriesView />} />
                  <Route path="/products" element={<ProductsView />} />
                  <Route path="/products/:name" element={<ProductDetailsView />} />
                  <Route path="/contacts" element={<ContactsView />} />
                  <Route path="/search" element={<SearchView />} />
                  <Route path="/compare" element={<CompareView />} />
                  <Route path="/wishlist" element={<WishListView />} />
                  <Route path="/shoppingcart" element={<ShoppingCartView />} />
                  <Route path="*" element={<NotFoundView />} />
                </Routes>
              </SaleContext.Provider>
            </FeaturedProductsContext.Provider>
          </ProductContext.Provider>
        </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;

// import { Todo } from './models/todoModel';

// const App: React.FC = () => {
//   const [todo, setTodo] = useState<string>('')
//   const [todos, setTodos] = useState<Todo[]>([])
  
//   setTodos((oldTodos) => [...oldTodos, {}])

//   return (
//     <div className="d-flex justify-content-center mt-3">

//     </div>
//   );
// }
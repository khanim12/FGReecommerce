import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Product from "./pages/Product";
import LoginPage from "./pages/LoginPage";
import Dealer from "./pages/Dealer";
import NotFoundPage from "./pages/NotFoundPage";
import AuthProvider from "./Context/AuthProvider";
import ProductsProvider from "./Context/ProductsProvider";
import ContactPageFgr from "./pages/ContactPageFgr";
import MyCart from "./pages/MyCart";
import HeaderTop from "./components/header/HeaderTop";
import HeaderFooter from "./components/header/HeaderFooter";
import ProductOperation from "./Context/ProductOperation";
import HeaderSlice from "./components/header/HeaderSlice";
import ListProvider from "./Context/ListProvider";
import CheckCarts from "./pages/CheckCarts";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import SpecialsPage from "./pages/SpecialsPage";
import QuickOrderPage from "./pages/QuickOrderPage";
import SearchPage from "./pages/SearchPage";
import CartProvider from "./Context/MyCartProvider";
import { FilterProvider } from "./Context/FilterContext";
import FavoritesProvider from "./Context/FavoritesProvider";
import Favorites from "./pages/Favorites";
import QuickProvider from "./Context/QuickProvider";
import { AddressProvider } from "./Context/AddressProvider";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <ProductOperation>
          <ListProvider>
            <FilterProvider>
              <CartProvider>
                <FavoritesProvider>
                  <QuickProvider>
                    <AddressProvider>
                      <BrowserRouter>
                        <HeaderTop />
                        <HeaderSlice />
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/product" element={<Product />} />
                          <Route path="/login" element={<LoginPage />} />
                          <Route path="/dealer" element={<Dealer />} />
                          <Route path="/contact" element={<ContactPageFgr />} />
                          <Route path="/mycart" element={<MyCart />} />
                          <Route
                            path="/order"
                            element={<OrderTrackingPage />}
                          />
                          <Route path="/specials" element={<SpecialsPage />} />
                          <Route path="/quick" element={<QuickOrderPage />} />
                          <Route path="/favorite" element={<Favorites />} />
                          <Route path="/checkCart" element={<CheckCarts />} />
                          <Route path="/search" element={<SearchPage />} />
                          <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                        <HeaderFooter />
                      </BrowserRouter>
                    </AddressProvider>
                  </QuickProvider>
                </FavoritesProvider>
              </CartProvider>
            </FilterProvider>
          </ListProvider>
        </ProductOperation>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;

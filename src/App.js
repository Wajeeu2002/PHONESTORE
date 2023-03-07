import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Details from "./component/details";
import ProductList from "./component/productList";
import Nav from "./component/Navbar";
import Error from "./component/Error";
import Cart from "./component/cart";

import { ProductProvider } from "./component/context";
import Modal from "./component/Model";

export default function App() {
  return (
    <React.Fragment>
      <ProductProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<ProductList />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<Error />}></Route>
            <Route path="/details" element={<Details />}></Route>
          </Routes>
          <Modal />
        </BrowserRouter>
      </ProductProvider>
    </React.Fragment>
  );
}

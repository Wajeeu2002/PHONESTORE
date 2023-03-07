import { createContext, useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

export const cartContext = createContext();

export function ProductProvider({ children }) {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState(detailProduct);
  const [modalOpen, setModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [modalProducts, setModalProducts] = useState(detailProduct);
  const [subTotal, setSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    addTotals();
  }, [cart]);

  useEffect(() => {
    Data();
  }, []);

  function Data() {
    let tempProduct = [];
    storeProducts.forEach((element) => {
      let singleItem = { ...element };
      tempProduct = [...tempProduct, singleItem];
    });
    setData(tempProduct);
  }

  function getItems(id) {
    let product = data.find((item) => item.id === id);
    return product;
  }
  function handleDetails(id) {
    const items = data.find((item) => {
      return item.id === id;
    });

    setDetails(items);
  }

  function addToCart(id) {
    let product = [...data];
    let index = product.indexOf(getItems(id));
    let outPut = product[index];
    outPut.inCart = true;
    outPut.count = 1;
    const price = outPut.price;
    outPut.total = price;

    setCart([...cart, outPut]);
  }

  function openModal(id) {
    const product = getItems(id);
    setModalOpen(true);
    setModalProducts(product);
  }
  function closeModal() {
    setModalOpen(false);
  }

  function increment(id) {
    let tempCart = [...cart];
    let index = tempCart.indexOf(getItems(id));
    let product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;
    setCart([...tempCart]);
    addTotals();
  }
  function decrement(id) {
    let tempCart = [...cart];
    let index = tempCart.indexOf(getItems(id));
    let product = tempCart[index];
    product.count = product.count - 1;
    product.total = product.price * product.count;

    if (product.count === 0) {
      removeItems(id);
    } else {
      product.total = product.price * product.count;
      setCart([...tempCart]);
      addTotals();
    }
  }
  function removeItems(id) {
    let tempProduct = [...data];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProduct.indexOf(getItems(id));
    let removedProduct = tempProduct[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setCart([...tempCart]);
    setData([...tempProduct]);
    addTotals();
  }
  function clearCart() {
    setCart([]);
    Data();
    addTotals();
  }
  function addTotals() {
    let subTotals = 0;
    cart.map((item) => {
      return (subTotals += item.total);
    });
    const tempTax = subTotals * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const totals = subTotals + tax;

    setSubTotal(subTotals);
    setCartTax(tax);
    setCartTotal(totals);
  }
  return (
    <cartContext.Provider
      value={{
        data,
        details,
        cart,
        setDetails,
        addToCart,
        handleDetails,
        openModal,
        closeModal,
        modalProducts,
        modalOpen,
        increment,
        decrement,
        removeItems,
        subTotal,
        cartTax,
        cartTotal,
        clearCart
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

import Title from "./title";
import CartColumns from "./column";
import EmptyCart from "./emptycart";
import CartList from "./cartList";
import CartTotal from "./cartTotal";
import { useContext } from "react";
import { cartContext } from "./context";

export default function Cart(props) {
  const { cart, subTotal, cartTax, cartTotal, clearCart } = useContext(
    cartContext
  );

  return (
    <>
      {cart.length > 0 ? (
        <div>
          <Title name="your" Title="cart" />
          <CartColumns />
          <CartList value={cart} />
          <CartTotal
            
            subTotal={subTotal}
            cartTax={cartTax}
            cartTotal={cartTotal}
            clearCart={clearCart}
          />
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

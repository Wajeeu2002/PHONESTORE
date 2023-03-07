import { cartContext } from "./context";
import Product from "./product";
import Title from "./title";
import { useContext } from "react";

export default function ProductList() {
  const { data } = useContext(cartContext);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="OUR" Title="PRODUCT" />
        </div>

        <div className="row">
          {data.map((value) => {
            return (
              <Product
                img={value.img}
                title={value.title}
                price={value.price}
                inCart={value.inCart}
                id={value.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

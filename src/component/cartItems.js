import { useContext } from "react";
import { cartContext } from "./context";

export default function CartItems({ items }) {
  const { increment, decrement, removeItems } = useContext(cartContext);
  const { img, id, price, title, total, count } = items;

  return (
    <div className="row my-2 text-capitalize text-center fw-bold">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          className="img-fluid"
          style={{ width: "5em", height: "5em" }}
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none ">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none ">price:</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="cart-icon" onClick={() => removeItems(id)}>
          <i className="fas fa-trash "></i>
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}

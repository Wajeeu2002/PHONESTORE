import PaypalExpressBtn from "./paypal";
import { Link } from "react-router-dom";

export default function CartTotal(props) {
  const { subTotal, cartTax, cartTotal, clearCart } = props;
  return (
    <div className="container">
      <div className="row ">
        <div className="col-10 col-sm-8 text-capitalize  carttotal">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              onClick={() => clearCart()}
            >
              Clear cart
            </button>
          </Link>
          <h5>
            <span className="text-title">subtotal :</span>
            <strong>${subTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tax :</span>
            <strong>${cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">cartTotal:</span>
            <strong>${cartTotal}</strong>
          </h5>

          <PaypalExpressBtn total={cartTotal} clearCart={clearCart} />
        </div>
      </div>
    </div>
  );
}

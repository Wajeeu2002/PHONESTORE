import { useContext } from "react";
import { cartContext } from "./context";
import { Link } from "react-router-dom";
export default function Details() {
  const { details, addToCart, openModal } = useContext(cartContext);
  const { id, title, img, price, company, info, inCart } = details;

  return (
    <div className="row">
      <div className="col-10 mx-auto col-md-6">
        <img src={img} className="img-fluid" alt="product" />
      </div>
      <div className="col-10 mx-auto col-md-6 my-3 fw-bold ">
        <h1>Model:{title}</h1>
        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
          made by:<span className="text-uppercase">{company}</span>
        </h4>
        <h4 className="text-blue fw-bold">price:${price}</h4>
        <p className="text-capitalize my-3 fw-bold">some info about product:</p>
        <p className="text-muted fs-3 lead">{info}</p>
        <Link to="/">
          <button className="mx-3 fw-bold fs-5 details-btn">
            Back To product
          </button>
        </Link>

        <button
          className="fw-bold fs-5 add-btn"
          disabled={inCart ? true : false}
          onClick={() => {
            addToCart(id);
            openModal(id);
          }}
        >
          {inCart ? "inCart" : "Add to cart"}{" "}
        </button>
      </div>
    </div>
  );
}

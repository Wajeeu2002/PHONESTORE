import { useContext } from "react";
import { cartContext } from "./context";
import { Link } from "react-router-dom";

export default function Modal(params) {
  const { closeModal, modalProducts, modalOpen } = useContext(cartContext);
  const { img, title, price } = modalProducts;

  return (
    <div>
      {modalOpen ? (
        <div className="main-container">
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize  modal-component">
                <h5>Item added to cart</h5>
                <img src={img} className="img-fluid" alt="product" />
                <h5>{title}</h5>
                <h5 className="text-muted">Price: ${price}</h5>
                <Link to="/">
                  <button
                    onClick={() => closeModal()}
                    className="mx-3 my-3 fw-bold fs-5 details-btn"
                  >
                    Continue Shopping
                  </button>
                </Link>
                <Link to="/cart">
                  <button
                    onClick={() => closeModal()}
                    className="mx-3 my-3 fw-bold fs-5 add-btn"
                  >
                    Go to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

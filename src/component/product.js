import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./context";

export default function Product(props) {
  const { title, img, price, inCart, id } = props;
  const { handleDetails, addToCart, openModal } = useContext(cartContext);
  return (
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container py-5">
          <Link to="/details">
            <img
              src={img}
              className="card-img-top imgs"
              alt=""
              onClick={() => handleDetails(id)}
            />
          </Link>
          <button
            className="cart-btn "
            disabled={inCart ? true : false}
            onClick={() => {
              addToCart(id);
              openModal(id);
             
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0 " disabled>
                {" "}
                inCart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        <div className="card-footer">
          <p className="mb-0 fw-bold">{title}</p>
          <h5 className="text-blue fst-italic mb-0">${price}</h5>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark  ">
        <Link to="/">
          <img
            className="landphone"
            src="https://raw.githubusercontent.com/Wajeeu2002/setup-filese-react-phone-e-commerce-project/eb7d4b37b3d98bc0c78a0192d2d2ebc660a5061a/logo.svg"
            alt=""
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link text-light ">
              product
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto cart">
          <button className="btns ">
            <i className="fa-sharp fa-solid fa-cart-plus "></i>
            My cart
          </button>
        </Link>
      </nav>
    </>
  );
}

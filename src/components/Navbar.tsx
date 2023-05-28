import { useAppSelector } from "../app/hooks.ts";
import { CartIcon } from "../icons.tsx";
import { selectTotalQuantity } from "../slices/cart.tsx";

const Navbar = () => {
  const quantity = useAppSelector((s) => selectTotalQuantity(s.cart));

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>redux toolkit</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{quantity}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

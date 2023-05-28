import { useGetCartItemsQuery } from "../api/api";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectTotalPrice } from "../slices/cart";
import { openModal } from "../slices/modal";
import CartItem from "./CartItem";

export default function CartContainer() {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess, isError, error } =
    useGetCartItemsQuery(null);
  const content = isLoading ? (
    <div>Loading...</div>
  ) : isSuccess && data ? (
    data.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.img}
      />
    ))
  ) : isError && error ? (
    <div>{error.toString()}</div>
  ) : null;

  const total = useAppSelector((s) => selectTotalPrice(s.cart));
  return (
    <section className="cart">
      <h2>Your shopping cart</h2>
      {content}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
}

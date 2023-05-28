import { useAppDispatch, useAppSelector } from "./app/hooks";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Model";
import Navbar from "./components/Navbar";
import { calculateTotals, getCartItems } from "./slices/cart";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const { cartItems, isLoading } = useAppSelector((state) => state.cart);
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading... (takes 1 second)</h1>
      </div>
    );
  }

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;

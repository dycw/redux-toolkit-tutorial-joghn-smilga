import { useAppDispatch, useAppSelector } from "./app/hooks";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;

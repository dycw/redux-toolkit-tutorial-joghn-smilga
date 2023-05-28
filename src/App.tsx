import { useAppSelector } from "./app/hooks";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;

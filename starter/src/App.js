import CartContainer from "./components/cartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const {cartItems} = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;

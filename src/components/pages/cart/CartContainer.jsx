import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { Cart } from "./Cart";
import Swal from "sweetalert2";

export const CartContainer = () => {
  const { cart, clearCart, removeItemByID, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  const limpiarCarrito = () => {
    Swal.fire({
      title: "¿Vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, vaciarlo.",
      denyButtonText: "No, cancelar.",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vacío", "", "success");
      }
    });
  };

  return (
    <Cart
      total={total}
      cart={cart}
      limpiarCarrito={limpiarCarrito}
      removeItemByID={removeItemByID}
    ></Cart>
  );
};

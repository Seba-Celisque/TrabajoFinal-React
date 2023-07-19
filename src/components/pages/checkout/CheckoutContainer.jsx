import { db } from "../../../firebaseConfig";
import { Checkout } from "./Checkout";
import "./Checkout.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";

export const CheckoutContainer = () => {
  const { cart, getTotalAmount, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalAmount();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      emailConfirm: "",
      phone: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Debe ingresar al menos 3 letras")
        .required("Campo requerido"),
      email: Yup.string()
        .email("El email ingresado no es válido")
        .required("Campo requerido"),
      emailConfirm: Yup.string()
        .email("El email ingresado no es válido")
        .required("Campo requerido"),
      phone: Yup.string()
        .min(10, "El teléfono ingresado no es válido.")
        .required("Campo requerido"),
    }),
  });

  return (
    <div className="mainContainer">
      {orderId ? (
        <div
          className="compraOk"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "350px" }}
            src="https://res.cloudinary.com/dfxmnqvwl/image/upload/v1689738642/logoapp.png"
          ></img>
          <h4>
            Su compra se realizo con exito !
            <br />
            <br />
            Comprobante: {orderId}
          </h4>
        </div>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

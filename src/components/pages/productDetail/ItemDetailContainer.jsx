import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext/CartContext";
import Swal from "sweetalert2";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { ClipLoader } from "react-spinners";

const spinner = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);

    getDoc(refDoc)
      .then((res) => {
        setProductSelected({
          ...res.data(),
          id: res.id,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return productSelected.id ? (
    <ItemDetail
      productSelected={productSelected}
      cantidad={cantidad}
      addToCart={addToCart}
      onAdd={onAdd}
    />
  ) : (
    <div className="contenido">
      <ClipLoader color="#333636" cssOverride={spinner} speedMultiplier="0.8" />
    </div>
  );
};

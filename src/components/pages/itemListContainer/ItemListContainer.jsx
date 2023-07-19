import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ClipLoader } from "react-spinners";

const spinner = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (!categoryId) {
      consulta = itemCollection;
    } else {
      consulta = query(itemCollection, where("category", "==", categoryId));
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <div className="contenido">
          <ClipLoader
            color="#333636"
            cssOverride={spinner}
            speedMultiplier="0.8"
          />
        </div>
      )}
    </div>
  );
};

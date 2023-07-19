import { ItemCount } from "../../common/ItemCount/ItemCount";

export const ItemDetail = ({ productSelected, onAdd, cantidad }) => {
  return (
    <div className="mainContainer">
      <div className="containerItemDetail">
        <div className="itemDivLeft">
          <img
            src={productSelected.img}
            alt="Imagen del producto"
            style={{ width: "100%", margin: "0 auto", borderRadius: "8px" }}
          />
        </div>

        <div className="itemDivRight">
          <h3>{productSelected.title}</h3>
          <hr />

          <p>{productSelected.shortDescription}</p>
          <br />

          <div className="counter">
            {productSelected.stock > 0 ? (
              <ItemCount
                stock={productSelected.stock}
                initial={cantidad}
                onAdd={onAdd}
              />
            ) : (
              <h3>Sin Stock</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

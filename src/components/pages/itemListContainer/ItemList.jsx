import { CardProduct } from "../../common/CardProduct/CardProduct";
import { MainImage } from "../../common/MainImage/MainImage";

export const ItemList = ({ items }) => {
  return (
    <div className="contenido">
      <div className="saludo">
        <MainImage />
        <h1>A Puro Pedal</h1>
      </div>
      <div className="zoneCatalogo">
        <h2> ANIMATE A RODAR ! </h2>
        <div className="cardsContainer">
          {items.map((elemento) => {
            return <CardProduct key={elemento.id} elemento={elemento} />;
          })}
        </div>
      </div>
    </div>
  );
};

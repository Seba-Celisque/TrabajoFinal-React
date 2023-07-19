import { Button } from "@mui/material";
import { useCount } from "../../hooks/useCount/UseCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  const [isAdd, setIsAdd] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="buttonControl"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {!isAdd && (
          <>
            <Button
              onClick={decrement}
              size="small"
              variant="contained"
              style={{ margin: "5px" }}
            >
              -
            </Button>
            <span style={{ padding: "20px", color: "text.primary" }}>
              {count}
            </span>
            <Button
              onClick={increment}
              size="small"
              variant="contained"
              style={{ margin: "5px" }}
            >
              +
            </Button>
          </>
        )}
      </div>

      <br />

      {isAdd ? (
        <div className="buttonAddCart">
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              navigate("/Carrito");
            }}
            style={{ margin: "0", width: "200px" }}
          >
            Ir al Carrito
          </Button>
        </div>
      ) : (
        <div className="buttonAddCart">
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              onAdd(count);
              setIsAdd(true);
            }}
            style={{ margin: "0", width: "200px" }}
          >
            Agregar al Carrito
          </Button>
        </div>
      )}
    </>
  );
};

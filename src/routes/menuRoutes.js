import { FirebaseAuth } from "../components/pages/FirebaseAuth/FirebaseAuth";
import { CartContainer } from "../components/pages/cart/CartContainer";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/pages/productDetail/ItemDetailContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryId",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/DetalleDelProducto/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/Carrito",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "firebase-auth",
    path: "/firebase-auth",
    Element: FirebaseAuth,
  },
];

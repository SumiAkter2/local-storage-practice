import { useEffect, useState } from "react";
import {
  addToLS,
  getStoredCart,
  removedFromLs,
} from "../../utilities/localStorage";
import CartItem from "./CartItem";
import "./Home.css";
import HomeDecorCard from "./HomeDecorCard";

const HomeDecor = () => {
  const [homeDecorProducts, setHomeDecorProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("homeDecor.json")
      .then((res) => res.json())
      .then((data) => setHomeDecorProducts(data));
  }, []);

  // load cart from localstorage:
  useEffect(() => {
    console.log("call data from local-storage", homeDecorProducts.length);
    if (homeDecorProducts.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart);
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const homeDecorProduct = homeDecorProducts.find(
          (homeDecorProduct) => homeDecorProduct.id === id
        );
        if (homeDecorProduct) {
          savedCart.push(homeDecorProduct);
        }
      }
      console.log("save cart:", savedCart);
      setCart(savedCart);
    }
    // const storedCart = getStoredCart();
  }, [homeDecorProducts]);

  const handleAddToCart = (homeDecorProduct) => {
    const cartItem = [...cart, homeDecorProduct];
    setCart(cartItem);
    addToLS(homeDecorProduct.id);
    // console.log(cartItem);
  };
  // remove cart
  const handleRemovecart = (id) => {
    const remainingCart = cart.filter(
      (homeDecorProduct) => homeDecorProduct.id !== id
    );
    console.log(id);
    setCart(remainingCart);
    removedFromLs(id);
  };
  return (
    <div>
      <br />
      <h1>Keep Your Home Beautifyll By Our HomeDecor Products </h1>
      <h2>Cart Item: {cart.length}</h2>

      <CartItem cart={cart} handleRemovecart={handleRemovecart} />
      {/* Home decor Products */}
      <div className="HomeDecor-grid">
        {homeDecorProducts.map((homeDecorProduct) => (
          <HomeDecorCard
            homeDecorProduct={homeDecorProduct}
            key={homeDecorProduct.id}
            handleAddToCart={handleAddToCart}
          ></HomeDecorCard>
        ))}
      </div>
    </div>
  );
};

export default HomeDecor;

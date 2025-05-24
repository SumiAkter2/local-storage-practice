import { useEffect, useState } from "react";
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

  const handleAddToCart = (homeDecorProduct) => {
    const cartItem = [...cart, homeDecorProduct];
    setCart(cartItem);
    console.log(cartItem);
  };
  return (
    <div>
      <br />
      <h1>Keep Your Home Beautifyll By Our HomeDecor Products </h1>
      <h2>Cart Item: {cart.length}</h2>
      {/* {cart.map((cartProduct, index) => (
        <CartItem cartProduct={cartProduct} key={index + 1}></CartItem>
      ))} */}

      {/* <CartItem cart={cart} /> */}
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

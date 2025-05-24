const HomeDecorCard = ({ homeDecorProduct, handleAddToCart }) => {
  return (
    <div className="HomeDecor-card">
      <img src={homeDecorProduct.img} alt="HomeDecor-img" />
      <h4>{homeDecorProduct.name}</h4>
      <h5>Price: ${homeDecorProduct.price}</h5>
      <h2>Id: {homeDecorProduct.id}</h2>

      <button onClick={() => handleAddToCart(homeDecorProduct)}>
        Add to cart
      </button>
    </div>
  );
};

export default HomeDecorCard;

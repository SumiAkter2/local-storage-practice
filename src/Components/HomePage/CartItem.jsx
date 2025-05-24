const CartItem = ({ cart, handleRemovecart }) => {
  return (
    <div>
      <h1>Id:{cart.length}</h1>
      <div className="HomeDecor-grid">
        {cart.map((homeDecorProduct) => (
          <div key={homeDecorProduct.id}>
            <h1>id:{homeDecorProduct.id}</h1>
            <button onClick={() => handleRemovecart(homeDecorProduct.id)}>
              Remove{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;

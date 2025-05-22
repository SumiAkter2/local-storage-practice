const HomeDecorCard = ({ HomeDecor }) => {
  return (
    <div className="HomeDecor-card">
      <img src={HomeDecor.img} alt="HomeDecor-img" />
      <h4>{HomeDecor.name}</h4>
      <h5>Price: ${HomeDecor.price}</h5>
      <h2>Id: {HomeDecor.id}</h2>

      <button>Add to cart</button>
    </div>
  );
};

export default HomeDecorCard;

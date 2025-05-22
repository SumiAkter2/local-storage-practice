import { useEffect, useState } from "react";
import "./Home.css";
import HomeDecorCard from "./HomeDecorCard";

const HomeDecor = () => {
  const [HomeDecors, setHomeDecors] = useState([]);
  useEffect(() => {
    fetch("homeDecor.json")
      .then((res) => res.json())
      .then((data) => setHomeDecors(data));
  }, []);

  return (
    <div>
      <h1>Keep Your Home Beautifyll By Our HomeDecor Products </h1>
      {/* <h1>{HomeDecors.length}</h1> */}
      <div className="HomeDecor-grid">
        {HomeDecors.map((HomeDecor) => (
          <HomeDecorCard
            HomeDecor={HomeDecor}
            key={HomeDecor.id}
          ></HomeDecorCard>
        ))}
      </div>
    </div>
  );
};

export default HomeDecor;

import { useLoaderData } from "react-router-dom";
import Hotel from "../Hotel/Hotel";

const Hotels = () => {
  const hotels = useLoaderData();

  return (
    <div className="grid grid-cols-3">
      {
       hotels.length > 12 
      ? hotels.slice(0, 12).map((hotel) => <Hotel key={hotel.id} hotel={hotel} />)
      : hotels.map((hotel) => <Hotel key={hotel.id} hotel={hotel} />)
}
    </div>
      
  );
};

export default Hotels;

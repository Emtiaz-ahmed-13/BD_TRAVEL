import { Search } from "lucide-react";


import { useLoaderData } from "react-router-dom";
import Card from "../components/Card/Card";
import NavButton from "../components/NavButton/NavButton";


export default function LandingPage() {


  const fetchData = useLoaderData();






  return (
    <div className="text-center justify-center space-y-4">
      <NavButton />

      <div className="carousel relative w-full">
        {/* Your carousel code here */}
      </div>
      <div className="search-container">
        <input type="text" id="search-input" placeholder="Search..." />
        <button id="search-button"><Search></Search></button>
      </div>



      

      <h1 className="text-3xl font-bold text-center my-4">Top Hotels</h1>
      <div className="grid grid-cols-3">
        {fetchData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-center my-4">Top Deals</h1>
      <div className="grid grid-cols-3">
        {fetchData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

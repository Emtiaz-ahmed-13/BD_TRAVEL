
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

function Restaurants() {

  const [data, setData] = useState([]);


  useEffect(() => {

    // Once you have fetched the data, set it using setData
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint-here');// you django model is hare...
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Top Hotels</h1>
      <div className="grid grid-cols-3">
        {data.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;

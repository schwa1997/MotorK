"use client";

import data from "../../data/data.json";
import CarDetailCard from "../../components/ItemCard/CarDetailCard";

export default function CarDetail({ params }: { params: { id: number } }) {
  const selectedCar = data.find((car) => car.id === parseInt(params.id)) || {
    id: 0,
    make: "",
    model: "",
    price: 0,
    description: "",
    features: "",
    mileage: 0,
  };

  return (
    <div className="pt-20 h-screen">
      {Object.keys(selectedCar).length > 0 ? (
        <CarDetailCard
          id={selectedCar.id}
          make={selectedCar.make}
          model={selectedCar.model}
          price={selectedCar.price}
          description={selectedCar.description}
          features={selectedCar.features}
          mileage={selectedCar.mileage}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

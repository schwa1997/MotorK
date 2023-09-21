"use client";

import data from "../../data/data.json";
import CarDetailCard from "../../components/Card/CarDetailCard";

export default function CarDetail({ params }: { params: { id: string } }) {
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
    <div className="pt-20 px-5 min-h-[calc(100vh-12rem)]">
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

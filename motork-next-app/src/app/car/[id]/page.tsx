"use client";

import { useEffect, useState } from "react";
import data from "../../data/data.json";
import CarDetailCard from "../../components/Card/CarDetailCard";
import LoadingComponent from "@/app/components/Loading";
import ErrorModal from "@/app/components/InfoModal";

export default function CarDetail({ params }: { params: { id: string } }) {
  const [selectedCar, setSelectedCar] = useState(
    null !== null ? null : {
      id: 0,
      make: "",
      model: "",
      price: 0,
      description: "",
      features: "",
      mileage: 0,
    }
  );
  
  const [loading, setLoading] = useState(true);
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    // fetch data Asynchronously
    const fetchData = async () => {
      try {
        const car = data.find((car) => car.id === parseInt(params.id));
        if (car) {
          setSelectedCar(car);
        } else {
          setFailure(true)
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);
  return (
    <div className="pt-20 grid px-5 min-h-[calc(100vh-12rem)]">
      {loading ? (
        //if not loading, show loading icon
        <div className="place-self-center">
          <LoadingComponent />
        </div>
      ) : selectedCar ? (
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
        <p>Car not found</p>
      )}
      {failure && (
        <ErrorModal
          header={"NO INFORMATION FOUND"}
          body={"There is no information found under this id. Please check the website link or car id"}
        />
      )}
    </div>
  );
}

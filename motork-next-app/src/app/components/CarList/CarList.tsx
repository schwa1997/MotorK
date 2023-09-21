"use client";

import { ArrowDownward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CarCard from "../Card/CarListCard";
import useStore from "../../store";

type CarType = {
  id: number;
  make: string;
  model: string;
  price: number;
  description: string;
  features: string;
  mileage: number;
};
interface CarListProps {
  number: number;
}
const CarList: React.FC<CarListProps> = ({ number }) => {
  const { carData, searchText } = useStore();
  const [group, setGroup] = useState(Math.ceil(carData.length / 6) - 1);
  const [cars, setCars] = useState(carData.slice(0, number));
  const theme = createTheme({
    palette: {
      primary: red,
    },
  });
  const handleLoadMore = () => {
    const newData = carData.slice(cars.length, cars.length + 6);
    setGroup(group - 1);
    setCars((prevCars:CarType[]) => prevCars.concat(newData));
  };
  useEffect(() => {
    setCars(carData.slice(0, number));
    setGroup(Math.ceil(carData.length / 6) - 1)
  }, [searchText, carData]);

  return (
    <ThemeProvider theme={theme}>
      <div className="Z-50 py-6 h-fit min-h-[calc(100vh-12rem)]">
        <div className="flex flex-wrap justify-center md:gap-6 gap-0">
          {cars.map((item: any) => (
            <CarCard
              key={item.id}
              id={item.id}
              make={item.make}
              model={item.model}
              price={item.price}
            ></CarCard>
          ))}
        </div>
        <div className="flex justify-center">
          {group > 0 && (
            <Button
              color="primary"
              variant="contained"
              onClick={handleLoadMore}
              endIcon={<ArrowDownward />}
              className=" text-black hover:bg-red-400 w-fit px-12"
            >
              Load More
            </Button>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};
export default CarList;

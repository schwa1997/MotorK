'use client'

import data from "./data/data.json";
import SearchBar from "./components/SearchBar/SearchBar";
import { Typography } from "@mui/material";
import CarList from "./components/CarList/CarList";
import useStore from "./store"; // 引入 Zustand store

export default function Home() {
  const { carData, setCarData } = useStore();
  return (
    // The body of the main page composed of two sections
    <div className="Z-50 pt-20 h-fit min-h-[calc(100vh-12rem)]">
      <div className="text-center rounded-xl px-10 flex flex-col pb-2 border-b-2">
        <Typography variant="h5" className="font-bold">
          CAR LIST {carData.length}
        </Typography>
        <div className="md:place-self-end place-self-center ">
          <SearchBar />
        </div>
      </div>
      <div className="justify-center">
        <CarList number={6} />
      </div>
    </div>
  );
}

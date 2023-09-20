"use client";

import { useEffect, useState } from "react";
import data from "./data/data.json";
import SearchIcon from "@mui/icons-material/Search";
import ToggleButton from "@mui/material/ToggleButton";
import CarCard from "./components/ItemCard/CarCard";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import { Button, Input } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

export default function Home() {
  const [cars, setCars] = useState(data.slice(0, 6)); 
  const [group, setGroup] = useState(Math.ceil(data.length / 6) - 1); 
  const [search, setSearch] = useState(false);
  const [searchOption, setSearchOption] = useState("0"); 
  const [selectedCars, setSelectedCars] = useState([]);
  const handleClose = () => setSearch(!search);

  const handleLoadMore = () => {
    const newData = data.slice(cars.length, cars.length + 6);
    setGroup(group - 1);
    setCars((prevCars) => prevCars.concat(newData));
  };


  const handleSearchByMake = (e) => {
    // Filter cars based on the searchValue
    const filteredCars = cars.filter((car) =>
      searchOption === "0"
        ? car.make.toLowerCase().includes(e.toLowerCase())
        : car.model.toLowerCase().includes(e.toLowerCase())
    );
    setSearch(true);
    setSelectedCars(filteredCars);
  };

  return (
    <div className="top-20 container pt-20 ">
      <div className="fixed z-50 flex flex-col right-20">
        <ToggleButton
          value="check"
          selected={search}
          onChange={() => {
            setSearch(!search);
          }}
        >
          <SearchIcon />
        </ToggleButton>
        <Modal
          className="fixed top-20 mx-auto p-6 h-fit border w-96 shadow-lg rounded-md bg-red-600 text-white"
          open={search}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="text-white">
            <FormControl component="fieldset">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={searchOption} // Set the default value
                name="radio-buttons-group"
                onChange={(e) => setSearchOption(e.target.value)} // Update searchOption
              >
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="Search by Make"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Search by Model"
                />
              </RadioGroup>
            </FormControl>
            <Input
              onChange={(e) => handleSearchByMake(e.target.value)}
              placeholder={
                searchOption === "0" ? "Search by Make" : "Search by Model"
              }
            />
          </div>
        </Modal>
        {group > 0 && (
          <Button
            variant="contained"
            onClick={handleLoadMore}
            endIcon={<ArrowDownward />}
            className="w-20 h-20 text-black"
          >
            Load More 
          </Button>
        )}
      </div>
      <div className="w-full">
        <div className="flex flex-wrap">
          {search
            ? selectedCars.map((item) => (
                <CarCard
                  key={item.id}
                  id={item.id}
                  make={item.make}
                  model={item.model}
                  price={item.price}
                ></CarCard>
              ))
            : cars.map((item) => (
                <CarCard
                  key={item.id}
                  id={item.id}
                  make={item.make}
                  model={item.model}
                  price={item.price}
                ></CarCard>
              ))}
        </div>
      </div>
    </div>
  );
}

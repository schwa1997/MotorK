"use client";

import { useState } from "react";
import data from "./data/data.json";
import SearchIcon from "@mui/icons-material/Search";
import ToggleButton from "@mui/material/ToggleButton";
import CarCard from "./components/Card/CarListCard";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import { Button, Input, Typography } from "@mui/material";
import { ArrowDownward, Close } from "@mui/icons-material";

export default function Home() {
  const [cars, setCars] = useState(data.slice(0, 6));
  const [group, setGroup] = useState(Math.ceil(data.length / 6) - 1);
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOption, setSearchOption] = useState("0");
  const [searchedCars, setSearchedCars] = useState<
    {
      id: number;
      make: string;
      model: string;
      price: number;
      description: string;
      features: string;
      mileage: number;
    }[]
  >([]);

  const [selectedCars, setSelectedCars] = useState<
    {
      id: number;
      make: string;
      model: string;
      price: number;
      description: string;
      features: string;
      mileage: number;
    }[]
  >([]);
  const [selectGroup, setSelectGroup] = useState(
    Math.ceil(selectedCars.length / 6) - 1
  );
  const handleSearchToggle = () => {
    setSearch(!search);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLoadMore = () => {
    const newData = data.slice(cars.length, cars.length + 6);
    setGroup(group - 1);
    setCars((prevCars) => prevCars.concat(newData));
  };
  const handleSelectLoadMore = () => {
    const newData = searchedCars.slice(cars.length, cars.length + 6);
    setSelectGroup(selectGroup - 1);
    setSelectedCars((prevCars) => prevCars.concat(newData));
  };

  const handleSearchByMake = (e: any) => {
    // Filter cars based on the searchValue
    const filteredCars = data.filter((car) =>
      searchOption === "0"
        ? car.make.toLowerCase().includes(e.toLowerCase())
        : car.model.toLowerCase().includes(e.toLowerCase())
    );
    setSearch(true);
    setSearchedCars(filteredCars);
    setSelectedCars(filteredCars.slice(0, 6));
    setSelectGroup(Math.ceil(filteredCars.length / 6) - 1);
  };

  return (
    // The body of the main page composed of two sections
    <div className="Z-50 pt-20 h-fit min-h-[calc(100vh-12rem)]">
      {/* The header of this section including heading and tool bar(search icon and load more button) */}
      <div className="text-center rounded-xl px-10 flex flex-col pb-2 border-b-2">
        <Typography variant="h5" className="font-bold">
          CAR LIST
        </Typography>
        <div className="md:place-self-end place-self-center flex flex-row md:h-10 h-6 gap-2">
          {!search ? (
            <ToggleButton
              className="hover:bg-red-400"
              value="check"
              selected={search}
              onClick={handleOpen}
            >
              <SearchIcon />
            </ToggleButton>
          ) : (
            <ToggleButton
              className="hover:bg-red-400"
              value="check"
              selected={search}
              onClick={handleSearchToggle}
            >
              <Close />
            </ToggleButton>
          )}
          <Modal
            className="fixed z-50 top-40 mx-auto p-6 h-fit border w-96 shadow-lg rounded-md bg-gradient-to-r from-red-500  to-white text-white"
            open={open}
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
                className="text-white"
                onChange={(e) => handleSearchByMake(e.target.value)}
                placeholder={
                  searchOption === "0" ? "Search by Make" : "Search by Model"
                }
              />
            </div>
          </Modal>
          {search
            ? selectGroup > 0 && (
                <Button
                  color="error"
                  variant="contained"
                  onClick={handleSelectLoadMore}
                  endIcon={<ArrowDownward />}
                  className=" text-black hover:bg-red-400"
                >
                  Load More
                </Button>
              )
            : group > 0 && (
                <Button
                  color="error"
                  variant="contained"
                  onClick={handleLoadMore}
                  endIcon={<ArrowDownward />}
                  className=" text-black hover:bg-red-400"
                >
                  Load More
                </Button>
              )}
        </div>
      </div>
      {/* car lists page rendering the data and show the first 6 cars and will show more after clicking the loadmore button */}
      <div className="flex flex-wrap justify-center md:gap-6 gap-0">
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
  );
}

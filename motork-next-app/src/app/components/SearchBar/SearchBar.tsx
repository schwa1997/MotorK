"use client";

import { Close, Search } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
  ToggleButton,
} from "@mui/material";
import React from "react";
import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useStore from "../../store";
import data from "../../data/data.json";

type CarCardProps = {
  id: number;
  make: string;
  model: string;
  price: number;
  description: string;
  features: string;
  mileage: number;
};

export default function SearchBar() {
  const { carData, setCarData } = useStore();
  const { search, setSearch } = useStore();
  const { searchOption, setSearchOption } = useStore();
  const { searchText, setSearchText } = useStore();
  const handleSearchToggle = () => {
    setSearch(!search);
  };
  const handleSearchChange = (e: string) => {
    setSearchText(e);
    console.log(e);
    if (search) {
      const filteredCars = data.filter((car: CarCardProps) =>
        searchOption === "0"
          ? car.make.toLowerCase().includes(e.toLowerCase())
          : car.model.toLowerCase().includes(e.toLowerCase())
      );
      setCarData(filteredCars);
      console.log(carData, filteredCars);
    } else {
      setCarData(data);
    }
  };
  const handleSearchOption = (e: string) => {
    setSearchOption(e);
  };

  const handleSearch = (
    searchText: string,
    searchOption: string,
    search: boolean
  ) => {
    console.log(searchText, searchOption, search);
  };

  const theme = createTheme({
    palette: {
      primary: red,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="h-fit">
        {search && (
          <>
            <Input
              color="primary"
              sx={{
                textAlign: "center",
              }}
              className="text-black pl-2 h-fit"
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={
                searchOption === "0" ? "Search by Make" : "Search by Model"
              }
            />
            <FormControl component="fieldset" className="md:px-0 px-12">
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={searchOption} // Set the default value
                name="radio-buttons-group"
                onChange={(e) => handleSearchOption(e.target.value)} // Update searchOption
              >
                <FormControlLabel
                  value="0"
                  control={<Radio color="primary" />}
                  label="Search by Make"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio color="primary" />}
                  label="Search by Model"
                />
              </RadioGroup>
            </FormControl>
          </>
        )}
        <ToggleButton
          color="primary"
          className="hover:bgF-red-400"
          value="check"
          selected={search}
          onClick={handleSearchToggle}
        >
          {!search ? (
            <Search />
          ) : (
            <>
              <Close />
            </>
          )}
        </ToggleButton>
      </div>
    </ThemeProvider>
  );
}

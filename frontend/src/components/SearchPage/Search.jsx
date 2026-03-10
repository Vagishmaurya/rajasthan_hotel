import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useState, useEffect } from "react";
import { hotels } from "../../data/rajasthanData";

export const Search = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [filters, setFilters] = useState({
    city: "",
    priceRange: 30000,
    stars: 0,
    sortBy: "default",
  });

  useEffect(() => {
    // Check if a city was passed from homepage search
    const params = new URLSearchParams(window.location.search);
    const cityParam = params.get("city");
    const savedSearch = localStorage.getItem("searchData");

    if (cityParam) {
      setFilters((prev) => ({ ...prev, city: cityParam }));
    } else if (savedSearch) {
      const parsed = JSON.parse(savedSearch);
      if (parsed.city) {
        setFilters((prev) => ({ ...prev, city: parsed.city }));
      }
    }
  }, []);

  useEffect(() => {
    let result = [...hotels];

    if (filters.city) {
      result = result.filter((h) => h.city === filters.city);
    }

    result = result.filter((h) => h.pricePerNight <= filters.priceRange);

    if (filters.stars > 0) {
      result = result.filter((h) => h.stars >= filters.stars);
    }

    if (filters.sortBy === "priceLow") {
      result.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (filters.sortBy === "priceHigh") {
      result.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (filters.sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredHotels(result);
  }, [filters]);

  const handleFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <>
      <Header />
      <SearchBox filters={filters} onFilter={handleFilter} />
      <Bottom data={filteredHotels} filters={filters} onFilter={handleFilter} />
    </>
  );
};

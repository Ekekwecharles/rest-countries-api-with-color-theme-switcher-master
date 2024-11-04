import React, { createContext, useContext, useState } from "react";

type SearchFilterContextType = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  closeFilterOptions: () => void;
  openFilterOptions: () => void;
  filterOptionsOpen: boolean;
  toggleFilterOptions: () => void;
};

const SearchFilterContext = createContext<SearchFilterContextType | undefined>(
  undefined
);

type searchFilterProps = {
  children: React.ReactNode;
};

function SearchFilterProvider({ children }: searchFilterProps) {
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [filterOptionsOpen, setFilterOptionsOpen] = useState(false);

  function closeFilterOptions() {
    setFilterOptionsOpen(false);
  }

  function openFilterOptions() {
    setFilterOptionsOpen(true);
  }

  function toggleFilterOptions() {
    setFilterOptionsOpen((value) => !value);
    
  }

  return (
    <SearchFilterContext.Provider
      value={{
        filter,
        setFilter,
        search,
        setSearch,
        closeFilterOptions,
        openFilterOptions,
        toggleFilterOptions,
        filterOptionsOpen,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
}

function useSearchFilter() {
  const context = useContext(SearchFilterContext);
  if (context === undefined)
    throw new Error("Context used outside its provider");
  return context;
}

export { SearchFilterProvider, useSearchFilter };

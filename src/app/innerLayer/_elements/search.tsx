"use client";

import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";
import DropdownList from "./dropdownList";

export default function SearchBar() {
  // const [searchOption, setSearchOption] = useState(1);
  const [isSearchOptionsOpen, setSearchOptionsOpen] = useState(false);

  return (
    <div className="flex border rounded-xl py-1.5 w-fullh-full bg-secondary-no-hover">
      <button onClick={() => setSearchOptionsOpen(!isSearchOptionsOpen)}>
        <div className="mr-2 pr-2 pl-3 flex gap-1 bg-secondary items-center border-r">
          {isSearchOptionsOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </button>

      <div className="grow">
        <input className="w-full" style={{ outline: "none" }} />
      </div>

      <button className="cursor-pointer bg-secondary border-l pr-3 pl-2">
        <Search className="w-4 h-4" />
      </button>

      {isSearchOptionsOpen && (
        <DropdownList
          onClose={() => {
            setSearchOptionsOpen(false);
          }}
          list={[].map(({ id, label }) => ({
            id,
            label,
            onClick: () => {
              /*setSearchOption(id)*/
            },
          }))}
        />
      )}
    </div>
  );
}

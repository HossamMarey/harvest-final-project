import React, { useState } from "react";
import { Button } from "../ui/button";
import { FiSearch } from "react-icons/fi";
import SelectLocation from "./SelectLocation";
import SelectDate from "./SelectDate";
import SelectGuests from "./SelectGuests";
const hotelType = [
  {
    id: 1,
    name: "Rooms",
  },
  {
    id: 2,
    name: "Flats",
  },
  {
    id: 3,
    name: "Hostels",
  },
  {
    id: 4,
    name: "Villas",
  },
];

const Divider = () => (
  <span className="hidden lg:inline-block w-0.5 h-8 bg-foreground/10 rounded-full mx-4">
    {" "}
  </span>
);

const MainSearch = () => {
  const [activeType, setActiveType] = useState(hotelType[0].id);

  return (
    <div className="text-background       pb-32 pt-12">
      <div className="flex items-start gap-6 px-6 mb-8">
        <strong className="text-6xl"> FIND </strong>
        <div className="flex items-start gap-4">
          {hotelType.map((type) => (
            <div
              className={` text-lg cursor-pointer hover:opacity-80 transition-all duration-300  `}
              key={type.id}
              onClick={() => setActiveType(type.id)}
            >
              {type.name}

              {type.id === activeType && (
                <span className="w-10 h-0.5 rounded-full bg-background   block"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-background rounded-lg lg:rounded-full p-2 text-foreground flex items-center lg:ps-8 flex-col lg:flex-row   ">
        <div className="flex  lg:items-center lg:flex-1 flex-col lg:flex-row w-full gap-4 lg:gap-0 ">
          <SelectLocation />
          <Divider />
          <SelectDate title="Check in" />
          <Divider />
          <SelectDate title="Check out" />
          <Divider />
          <SelectGuests />
        </div>
        <Button className="lg:w-16 h-14 lg:h-16 rounded-full flex items-center justify-center w-full">
          <span className="text-xl me-4 lg:hidden"> Search </span>
          <FiSearch size={24} />
        </Button>
      </div>
    </div>
  );
};

export default MainSearch;

import React from "react";
import { Input } from "../ui/input";

const SelectGuests = () => {
  return (
    <div className="py-2">
      <h5 className="text-base font-medium"> Guests </h5>
      <Input
        placeholder="Add Guests"
        className="border-none ps-0 !py-1 !h-auto leading-tight  shadow-none w-36  "
      />
    </div>
  );
};

export default SelectGuests;

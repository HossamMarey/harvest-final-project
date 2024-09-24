import React from "react";
import { Input } from "../ui/input";

const SelectLocation = () => {
  return (
    <div className="py-2 w-full lg:w-auto  ">
      <h5 className="text-base font-medium"> Location </h5>
      <Input
        placeholder="Which city do you prefer?"
        className="border-none ps-0 !py-1 !h-auto leading-tight  shadow-none min-w-56"
      />
    </div>
  );
};

export default SelectLocation;

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

import { format } from "date-fns";

const SelectDate = ({ title }) => {
  const [date, setDate] = useState();

  return (
    <div className="py-2">
      <h5 className="text-base font-medium"> {title} </h5>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-36 justify-start text-left font-normal shadow-none border-none p-0 !h-auto ",
              !date && "text-muted-foreground"
            )}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectDate;

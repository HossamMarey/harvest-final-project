import { Skeleton } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useGetHotelRoomTypesQuery } from "@/services/apis/hotels";
import { SEARCH_PARAMS } from "@/services/constant";
import React, { useMemo, useState } from "react";

import { LuFilter } from "react-icons/lu";
import FiltersDrawer from "./FiltersDrawer";
import { useClientSearchParams } from "@/services/hooks";

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

const CategoriesFilters = () => {
  const { data, error, isLoading } = useGetHotelRoomTypesQuery();

  const [searchParams, setSearchParams] = useClientSearchParams();

  const roomTypes = useMemo(() => {
    if (!data?.data?.length) return [];
    return ["All", ...data.data];
  }, [data?.data]);

  const activeType = useMemo(() => {
    return searchParams.get(SEARCH_PARAMS.roomType) || "All";
  }, [searchParams]);
  const handleSetType = (type) => {
    setSearchParams({ roomType: type });
  };

  if (isLoading)
    return (
      <div className="container">
        <Skeleton />
      </div>
    );

  if (error) return <div> {error?.message} </div>;

  if (!data?.data?.length)
    return (
      <div className="container">
        <p className="py-16 opacity-50">No Filters</p>
      </div>
    );

  return (
    <div className="container">
      <div className="flex items-center justify-center lg:justify-between gap-4">
        <div className="flex items-start gap-4">
          {roomTypes.map((type) => (
            <div
              className={` text-lg cursor-pointer hover:opacity-80 transition-all duration-300   min-w-11`}
              key={type}
              onClick={() => handleSetType(type)}
            >
              {type}

              {type === activeType && (
                <span className="w-10 h-0.5 rounded-full bg-foreground/70   block"></span>
              )}
            </div>
          ))}
        </div>

        <FiltersDrawer>
          <Button
            variant="outline"
            className="shadow-none border-foreground/20"
          >
            <LuFilter />
            Filters{" "}
          </Button>
        </FiltersDrawer>
      </div>
    </div>
  );
};

export default CategoriesFilters;

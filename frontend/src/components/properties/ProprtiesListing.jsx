import React from "react";
import HotelCard from "./HotelCard";
import { useGetProfileQuery } from "@/services/apis/auth";

const ProprtiesListing = ({
  title,
  showMapButton = false,
  showReviews = false,
}) => {
  return (
    <div className="container  my-4 py-8">
      <div className="mb-16">
        <h2 className="max-w-[300px]  text-3xl font-bold"> {title} </h2>

        <span className="w-36 h-[3px] rounded-full bg-foreground block mt-6">
          {" "}
        </span>
      </div>

      <div className="grid  gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <HotelCard key={index} showReviews={showReviews} />
          ))}
      </div>
    </div>
  );
};

export default ProprtiesListing;

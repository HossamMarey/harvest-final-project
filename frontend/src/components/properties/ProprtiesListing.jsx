import React from "react";

const ProprtiesListing = ({
  title,
  showMapButton = false,
  showReviews = false,
}) => {
  return (
    <div className="container bg-red-500/20 my-4 py-8">
      <div className="mb-16">
        <h2 className="max-w-[300px]  text-3xl font-bold"> {title} </h2>

        <span className="w-36 h-[3px] rounded-full bg-foreground block mt-6">
          {" "}
        </span>
      </div>

      <div>cards hotels</div>
    </div>
  );
};

export default ProprtiesListing;

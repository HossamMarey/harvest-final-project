import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainReviews } from "../shared";

const HotelCard = ({ showReviews = false, data, showPrice = false }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <Link
      to={"/hotels/" + data?._id}
      className="rounded-lg bg-card shadow  hover:opacity-80 transition-all duration-300 "
    >
      <div className="relative  ">
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {showReviews ? (
            <div className=" ">
              <MainReviews rate={data?.avgRating} className="text-background" />
            </div>
          ) : (
            <span></span>
          )}

          <Button
            className="  bg-transparent px-2 py-3"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsFavourite(!isFavourite);
            }}
          >
            {" "}
            {!isFavourite ? (
              <FaRegHeart size={18} />
            ) : (
              <FaHeart size={18} />
            )}{" "}
          </Button>
        </div>
        <img
          src={data?.imgUrls?.[0]}
          alt={data?.name || ""}
          className="rounded-t-lg aspect-square object-cover w-full"
        />

        {showPrice ? (
          <div className="w-full h-16  absolute bottom-0 left-0 p-3 font-bold flex items-end bg-gradient-to-t from-black/50 to-black/0 text-white text-lg">
            {" "}
            ${data?.price}
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-background absolute bottom-2 left-3">
            {" "}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold truncate" title={data?.name}>
          {data?.name}
        </h3>
        <p className="text-sm truncate" title={data?.summary}>
          {" "}
          {data?.summary}
        </p>
      </div>
    </Link>
  );
};

export default HotelCard;

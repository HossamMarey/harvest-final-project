import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainReviews } from "../shared";

const HotelCard = ({ showReviews = false }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <Link
      to="/hotels/id"
      className="rounded-lg bg-card shadow  hover:opacity-80 transition-all duration-300 "
    >
      <div className="relative  ">
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {showReviews ? (
            <div className=" ">
              <MainReviews rate={2.5} className="text-background" />
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
          src="https://images.unsplash.com/photo-1726853522009-8dc4c4e306a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hotel data"
          className="rounded-t-lg aspect-square object-cover w-full"
        />
        <div className="w-16 h-16 rounded-full bg-background absolute bottom-2 left-3">
          {" "}
        </div>
      </div>
      <div className="p-4">
        <h3
          className="text-xl font-bold truncate"
          title=" hotel title hotel titlehotel titlehotel titlehotel titlehotel
          titlehotel titl ehotel titlehotel titlehotel titlehotel title"
        >
          {" "}
          hotel title hotel titlehotel titlehotel titlehotel titlehotel
          titlehotel titl ehotel titlehotel titlehotel titlehotel title{" "}
        </h3>
        <p className="text-sm truncate" title="hotel desription">
          {" "}
          hotel desription
        </p>
      </div>
    </Link>
  );
};

export default HotelCard;

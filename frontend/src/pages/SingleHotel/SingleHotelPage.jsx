import { MainSingleHotel } from "@/components/properties";
import React from "react";
import { useParams } from "react-router-dom";

const SingleHotelPage = () => {
  const hotelId = useParams().id;

  if (!hotelId) return null;

  return <MainSingleHotel id={hotelId} />;
};

export default SingleHotelPage;

import React from "react";
import SingleHotelImages from "./SingleHotelImages";
import SingleHotelDetails from "./SingleHotelDetails";

const MainSingleHotel = () => {
  return (
    <>
      <section>
        {" "}
        <SingleHotelImages />{" "}
      </section>
      <section>
        <SingleHotelDetails />
      </section>
      <section> Amenities </section>
      <section> Reviews </section>
    </>
  );
};

export default MainSingleHotel;

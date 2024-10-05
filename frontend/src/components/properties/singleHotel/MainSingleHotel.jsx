import React from "react";
import SingleHotelImages from "./SingleHotelImages";
import SingleHotelDetails from "./SingleHotelDetails";
import { useGetHotelByIdQuery } from "@/services/apis/hotels";
import Skeleton from "react-loading-skeleton";

const MainSingleHotel = ({ id }) => {
  const { data, error, isLoading } = useGetHotelByIdQuery({ id });

  console.log("data 00000000", data);

  if (isLoading)
    return (
      <div className="container">
        <div className="grid grid-cols-1 gap-6">
          {Array(9)
            .fill("")
            .map((_, index) => (
              <Skeleton className="h-64" key={index} />
            ))}
        </div>
      </div>
    );

  if (error) return <div> {error?.message} </div>;

  if (!data?.data) return <div> No Data </div>;

  return (
    <>
      <section>
        <SingleHotelImages images={data?.data?.imgUrls} />{" "}
      </section>
      <section>
        <SingleHotelDetails hotel={data?.data} />
      </section>
      <section> Amenities </section>
      <section> Reviews </section>
    </>
  );
};

export default MainSingleHotel;

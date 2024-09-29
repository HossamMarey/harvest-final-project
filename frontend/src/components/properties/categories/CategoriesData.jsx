import { Skeleton } from "@/components/shared";
import { useGetHotelsQuery } from "@/services/apis/hotels";
import React, { useEffect, useState } from "react";
import HotelCard from "../HotelCard";
import { useInView } from "react-intersection-observer";

const CategoriesData = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useGetHotelsQuery({ page });
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  console.log("CATEG , ", { data, isLoading, error, refetch });

  console.log("SSSS", inView);

  useEffect(() => {
    if ((inView, data?.data?.length, !isLoading)) {
      setPage((p) => p + 1);
    }
  }, [inView]);

  if (isLoading)
    return (
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(9)
            .fill("")
            .map((_, index) => (
              <Skeleton className="h-64" key={index} />
            ))}
        </div>
      </div>
    );

  if (error) return <div> {error?.message} </div>;

  if (!data?.data?.length)
    return (
      <div className="container">
        <p className="py-16 opacity-50">No Hotels founded</p>
      </div>
    );

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data?.map((item) => (
          <HotelCard key={item._id} data={item} showPrice />
        ))}
      </div>
      <div ref={ref}> </div>
    </div>
  );
};

export default CategoriesData;

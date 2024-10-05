import { Skeleton } from "@/components/shared";
import {
  useGetHotelsInfiniteQuery,
  useGetHotelsQuery,
} from "@/services/apis/hotels";
import React, { useEffect, useMemo, useState } from "react";
import HotelCard from "../HotelCard";
import { useInView } from "react-intersection-observer";

const CategoriesData = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch, fetchNextPage, isFetching } =
    useGetHotelsInfiniteQuery();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  console.log("CATEG , ", {
    data: data?.pages,
    isLoading,
    error,
    refetch,
  });

  console.log("SSSS", inView);

  useEffect(() => {
    if ((inView, data?.data?.length, !isLoading && !isFetching)) {
      fetchNextPage();
    }
  }, [inView]);

  const fullData = useMemo(() => {
    if (!data?.pages?.length) return [];

    return data?.pages?.reduce((acc, curr) => {
      return [...acc, ...curr.data];
    }, []);
  }, [data]);

  console.log("FULL DATA ", fullData);

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

  if (!fullData?.length)
    return (
      <div className="container">
        <p className="py-16 opacity-50">No Hotels founded</p>
      </div>
    );

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fullData?.map((item) => (
          <HotelCard key={item._id} data={item} showPrice />
        ))}
      </div>

      {isFetching && <Skeleton className="h-64" />}
      {!isFetching && !isLoading && <div ref={ref}> </div>}
    </div>
  );
};

export default CategoriesData;

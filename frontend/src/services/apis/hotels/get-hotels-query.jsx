import clientApi from "@/services/clientApi";
import { SEARCH_PARAMS } from "@/services/constant";
import { useClientSearchParams } from "@/services/hooks";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const getHotels = async ({
  perPage = 9,
  roomType = "",
  minPrice,
  maxPrice,
  capacity,
  bedrooms,
  bathrooms,
  page = 1,
}) => {
  let paramsStr = "";

  if (roomType) paramsStr += `&roomType=${roomType}`;
  if (minPrice) paramsStr += `&minPrice=${minPrice}`;
  if (maxPrice) paramsStr += `&maxPrice=${maxPrice}`;
  if (capacity) paramsStr += `&capacity=${capacity}`;
  if (bedrooms) paramsStr += `&bedrooms=${bedrooms}`;
  if (bathrooms) paramsStr += `&bathrooms=${bathrooms}`;
  if (page) paramsStr += `&page=${page}`;

  console.log("PARAMS ", {
    perPage,
    roomType,
    minPrice,
    maxPrice,
    capacity,
    bedrooms,
    bathrooms,
  });

  const res = await clientApi.get(`/hotels?perPage=${perPage}${paramsStr}`);
  return res?.data;
};

export const GET_HOTELS_QUERY_KEY = "/hotels";

export const useGetHotelsQuery = ({ page = 1 }) => {
  const [searchParams] = useClientSearchParams();

  const roomType = useMemo(() => {
    const t = searchParams.get(SEARCH_PARAMS.roomType) || "All";
    if (t === "All") return "";
    return t;
  }, [searchParams]);

  const minPrice = useMemo(() => {
    return searchParams.get(SEARCH_PARAMS.minPrice) || "";
  }, [searchParams]);

  const maxPrice = useMemo(() => {
    return searchParams.get(SEARCH_PARAMS.maxPrice) || "";
  }, [searchParams]);

  const bathrooms = useMemo(() => {
    return searchParams.get(SEARCH_PARAMS.bathrooms) || "";
  }, [searchParams]);

  const bedrooms = useMemo(() => {
    return searchParams.get(SEARCH_PARAMS.bedrooms) || "";
  }, [searchParams]);

  const capacity = useMemo(() => {
    return searchParams.get(SEARCH_PARAMS.capacity) || "";
  }, [searchParams]);

  return useQuery({
    queryKey: [
      GET_HOTELS_QUERY_KEY,
      roomType,
      minPrice,
      maxPrice,
      capacity,
      bedrooms,
      bathrooms,
      page,
    ],
    queryFn: () =>
      getHotels({
        roomType,
        minPrice,
        maxPrice,
        capacity,
        bedrooms,
        bathrooms,
        page,
      }),
  });
};

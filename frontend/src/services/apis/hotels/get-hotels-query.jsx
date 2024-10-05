import clientApi from "@/services/clientApi";
import { SEARCH_PARAMS } from "@/services/constant";
import { useClientSearchParams } from "@/services/hooks";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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

const useSearchParams = () => {
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

  return {
    roomType,
    minPrice,
    maxPrice,
    capacity,
    bedrooms,
    bathrooms,
  };
};

export const useGetHotelsQuery = ({ page = 1 }) => {
  const { roomType, minPrice, maxPrice, capacity, bedrooms, bathrooms } =
    useSearchParams();

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

export const GET_HOTELS_INFINITE_QUERY_KEY = "/infinite/hotels";
export const useGetHotelsInfiniteQuery = () => {
  const { roomType, minPrice, maxPrice, capacity, bedrooms, bathrooms } =
    useSearchParams();

  return useInfiniteQuery({
    queryKey: [
      GET_HOTELS_INFINITE_QUERY_KEY,
      roomType,
      minPrice,
      maxPrice,
      capacity,
      bedrooms,
      bathrooms,
    ],
    queryFn: ({ pageParam = 1 }) =>
      getHotels({
        page: pageParam,
        roomType,
        minPrice,
        maxPrice,
        capacity,
        bedrooms,
        bathrooms,
      }),
    getNextPageParam: (lastPage, allPages) => {
      console.log("lastPage 000000000000000", lastPage);
      const currentPage = lastPage?.pagination?.page;
      const total = lastPage?.pagination?.total || 0;
      const perPage = lastPage?.pagination?.perPage || 0;
      const last_page = Math.ceil(total / perPage);
      if (currentPage === last_page) return undefined;

      return currentPage + 1;
    },
  });
};

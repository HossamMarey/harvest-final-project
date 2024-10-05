import clientApi from "@/services/clientApi";
import { useQuery } from "@tanstack/react-query";

export const getHotel = async ({ id }) => {
  const res = await clientApi.get(`/hotels/${id}`);
  return res?.data;
};

export const GET_HOTEL_QUERY_KEY = "/hotel/:id";

export const useGetHotelByIdQuery = ({ id }) => {
  return useQuery({
    queryKey: [GET_HOTEL_QUERY_KEY, id],
    queryFn: () => getHotel({ id }),
  });
};

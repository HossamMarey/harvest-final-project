import clientApi from "@/services/clientApi";
import { useQuery } from "@tanstack/react-query";

export const getHotelRoomTypes = async () => {
  const res = await clientApi.get(`/hotels/room-types`);
  return res?.data;
};

export const GET_HOTEL_ROOM_TYPES_QUERY_KEY = "/hotels/room-types";

export const useGetHotelRoomTypesQuery = () => {
  return useQuery({
    queryKey: [GET_HOTEL_ROOM_TYPES_QUERY_KEY],
    queryFn: getHotelRoomTypes,
  });
};

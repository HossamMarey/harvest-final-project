import { getAuthCookie } from "@/lib";
import clientApi from "@/services/clientApi";
import { useQuery } from "@tanstack/react-query";

export const GET_PROFILE_QUERY_KEY = "/auth/me";

export const useGetProfileQuery = () => {
  return useQuery({
    queryKey: [GET_PROFILE_QUERY_KEY],
    queryFn: () => getProfile(),
  });
};

export const getProfile = async () => {
  const response = await clientApi.get("/auth/me");
  return response?.data;
};

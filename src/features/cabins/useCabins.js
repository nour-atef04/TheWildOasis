import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export default function useCabins() {
  const {
    isLoading,
    data: cabins,
    // error,
  } = useQuery({
    queryKey: ["cabins"], // for caching data
    queryFn: getCabins, // async fetch function
  });

  return { isLoading, cabins };
}

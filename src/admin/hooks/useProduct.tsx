import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../actions/get-product-by-id";

export const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductsById(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  /// mutacion de la data

  return {
    ...query,
  };
};

export default useProduct;

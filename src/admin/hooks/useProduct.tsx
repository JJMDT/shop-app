import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductsById } from "../actions/get-product-by-id";
import type { Product } from "@/interfaces/products.interface";
import { createUpdateProductAction } from "../actions/create-update-product.actions";

export const useProduct = (id: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductsById(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  /// mutacion de la data

  const mutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      // invalidar cache
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({
        queryKey: ["product", { id: product.id }],
      });

      //actualizar queryData
      queryClient.setQueryData(
        [
          "products",
          {
            id: product.id,
          },
        ],
        product,
      );
    },
  });

  return {
    ...query,
    mutation,
  };
};

export default useProduct;

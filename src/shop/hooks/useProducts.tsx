import { useQuery } from "@tanstack/react-query";
import getProductsAction from "../actions/getProductsAction";
import { useParams, useSearchParams } from "react-router";

const useProducts = () => {
  const { gender } = useParams();
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit") || 9;
  const page = searchParams.get("page") || 1;
  const sizes = searchParams.get("sizes") || undefined;

  console.log(gender, sizes);
  const offset = (Number(page) - 1) * Number(limit);

  return useQuery({
    queryKey: ["products", { offset, limit, sizes, gender }],
    queryFn: () =>
      getProductsAction({
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        sizes,
        gender,
      }),
    staleTime: 1000 * 60 * 5,
  });
};

export default useProducts;

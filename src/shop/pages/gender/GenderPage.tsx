import CustomPagination from "@/components/custom/CustomPagination";
// import { products } from "@/mocks/mocksData";
import CustomJumbotron from "@/shop/components/CustomJumbotron";
import ProductsGrid from "@/shop/components/ProductsGrid";
import useProducts from "@/shop/hooks/useProducts";
import { useParams } from "react-router";

const GenderPage = () => {
  const { data: products } = useProducts();

  const { gender } = useParams();
  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";

  return (
    <div>
      <CustomJumbotron title={genderLabel} />

      <ProductsGrid products={products?.products ?? []} />

      <CustomPagination totalPages={products?.pages ?? 0} />
    </div>
  );
};

export default GenderPage;

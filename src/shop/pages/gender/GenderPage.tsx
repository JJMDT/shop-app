import CustomPagination from "@/components/custom/CustomPagination";
import { products } from "@/mocks/mocksData";
import CustomJumbotron from "@/shop/components/CustomJumbotron";
import ProductsGrid from "@/shop/components/ProductsGrid";
import { useParams } from "react-router";

const GenderPage = () => {
  const { gender } = useParams();
  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";

  return (
    <div>
      <CustomJumbotron title={genderLabel} />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={5} />
    </div>
  );
};

export default GenderPage;

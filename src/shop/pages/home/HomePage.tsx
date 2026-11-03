import CustomPagination from "@/components/custom/CustomPagination";
import { products } from "@/mocks/mocksData";
import CustomJumbotron from "@/shop/components/CustomJumbotron";
import ProductsGrid from "@/shop/components/ProductsGrid";

const HomePage = () => {
  return (
    <div>
      <CustomJumbotron title="Estilo Tesla" />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={5} />
    </div>
  );
};

export default HomePage;

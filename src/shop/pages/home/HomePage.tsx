import CustomPagination from "@/components/custom/CustomPagination";
// import { products } from "@/mocks/mocksData";
import CustomJumbotron from "@/shop/components/CustomJumbotron";
import ProductsGrid from "@/shop/components/ProductsGrid";
import useProducts from "@/shop/hooks/useProducts";

const HomePage = () => {
  const { data: products } = useProducts();

  return (
    <div>
      <CustomJumbotron title="Estilo Tesla" />

      <ProductsGrid products={products?.products ?? []} />

      <CustomPagination totalPages={products?.pages ?? 0} />
    </div>
  );
};

export default HomePage;

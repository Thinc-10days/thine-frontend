import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../store/ProductSlice";
import { AppDispatch, RootState } from "../../store/store";
import { Center, Spinner, SimpleGrid, GridItem } from "@chakra-ui/react";
import { ProductCard } from "../../Components/ProductCard";

const ProductListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProduct()).then((data) => {
      console.log(data);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <SimpleGrid columns={3} gap={"20px"}>
      {products.map((product) => {
        return (
          <GridItem>
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              location={product.location}
              id={product._id}
            />
          </GridItem>
        );
      })}
    </SimpleGrid>
  );
};

export default ProductListPage;

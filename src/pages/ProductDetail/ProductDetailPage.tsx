import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { Grid, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { MenuCard } from "../../Components/MenuCard";
import { useEffect } from "react";
import { setSelectedProduct } from "../../store/ProductSlice";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(
    (state: RootState) => state.product.selectedProduct
  );

  useEffect(() => {
    if (!id) return;

    dispatch(setSelectedProduct(id));
  }, [dispatch, id]);

  if (!id) {
    return <h1> invalid serach </h1>;
  }

  if (!product) {
    return <h1> restaurant not found </h1>;
  }

  return (
    <Grid templateRows="2, 1fr">
      <SimpleGrid columns={2} gap={"30px"}>
        {product.food.map((food) => (
          <MenuCard
            name={food.name}
            description={food.description}
            price={food.price}
            id="food"
          />
        ))}
      </SimpleGrid>
    </Grid>
  );
};

export default ProductDetailPage;

/*
<Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
</Grid>
*/

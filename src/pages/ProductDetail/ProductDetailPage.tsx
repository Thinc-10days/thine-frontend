import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { MenuCard } from "../../Components/MenuCard";
import { useEffect } from "react";
import { setSelectedProduct } from "../../store/ProductSlice";

const ProductDetailPage: React.FC = () => {
  const { colorMode } = useColorMode();
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
    <Grid templateRows="repeat(2, 1fr)" gap={"30px"}>
      <GridItem
        rowSpan={1}
        backgroundImage={
          "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
        }
        borderRadius={"16px"}
        border={`1px solid ${colorMode == "dark" ? "white" : "black"}`}
        height={"full"}
        overflow="hidden"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading>{product.name}</Heading>
          <Text>{product.location}</Text>
        </Box>
      </GridItem>
      <GridItem rowSpan={1}>
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
      </GridItem>
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

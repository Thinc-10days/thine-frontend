import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { MenuCard } from "../../Components/MenuCard";
import { useEffect, useState } from "react";
import { setSelectedProduct } from "../../store/ProductSlice";
import { Food } from "../../types/product";
import { FoodModal } from "../../Components/FoodModal";

const ProductDetailPage: React.FC = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedFood, setSelectedFood] = useState<Food>();
  const cart = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state: RootState) => {
    return {
      product: state.product.selectedProduct,
      isLoading: state.product.isLoading,
    };
  });

  const handleSelectFood = (food: Food) => {
    setSelectedFood(food);
    onOpen();
  };

  useEffect(() => {
    if (isLoading || !id) return;

    dispatch(setSelectedProduct(id));
  }, [dispatch, id, isLoading]);

  if (!id) {
    return <h1> invalid serach </h1>;
  }

  if (!product) {
    return <h1> restaurant not found </h1>;
  }

  return (
    <>
      <Box gap={"30px"}>
        <Box
          height={"200px"}
          borderRadius="20px"
          backgroundImage={
            "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg"
          }
          backgroundSize="750px"
          border={`1px solid ${colorMode == "dark" ? "white" : "black"}`}
          display="flex"
          flexDirection="column"
          color="white"
        >
          <Box display="flex" justifyContent="flex-end" pr="30px">
            <Text pt="20px">{product.location}</Text>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Heading>{product.name}</Heading>
          </Box>
        </Box>
        {JSON.stringify(cart)}
        <Box mt="30px">
          <SimpleGrid columns={2} gap={"30px"}>
            {product.food.map((food) => (
              <Box onClick={() => handleSelectFood(food)}>
                <MenuCard
                  name={food.name}
                  description={food.description}
                  price={food.price}
                  id="food"
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box textAlign="right">
          <Button onClick={() => navigate("/picker/checkout")}>
            {" "}
            proceed to checkout{" "}
          </Button>
        </Box>
      </Box>
      <FoodModal food={selectedFood} onClose={onClose} isOpen={isOpen} />
    </>
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

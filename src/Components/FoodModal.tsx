import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  Text,
  Box,
  Input,
} from "@chakra-ui/react";
import { Food } from "../types/product";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Item, addToCard } from "../store/CartSlice";

interface Props {
  food: Food | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const FoodModal: React.FC<Props> = ({ food, isOpen, onClose }) => {
  const [amount, setAmount] = useState<number>(1);
  const [notes, setNotes] = useState<string>();
  const dispatch = useDispatch();
  if (!food) return;

  const handleIncrement = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (amount == 1) {
      alert("cannot do that");
      return;
    }
    setAmount((prev) => prev - 1);
  };

  const handleChangeNotes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotes(e.target.value);
  };

  const handleAddToCard = () => {
    const item: Item = {
      food: food,
      quantity: amount,
      notes: notes,
    };
    dispatch(addToCard(item));
    setAmount(1);
    setNotes("");
    onClose();
  };
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Box
          w="full"
          h="220px"
          bgImage="url(https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/the-vegetarian-butcher/nasvhille-hot-burger/1245x600_Nashville%20style%20Chicken%20Burger.jpg)"
          bgSize="500px"
          bgRepeat="no-repeat"
        >
          <ModalCloseButton />
        </Box>
        <ModalBody>
          <Box>
            <Text fontSize="25px" fontWeight={500}>
              {" "}
              {food.name}
            </Text>
            <Text fontSize="15px" color="gray.600">
              {" "}
              {food.description}
            </Text>
          </Box>
        </ModalBody>

        <Box mx="30px" mt="20px">
          <Input placeholder="additional notes" onChange={handleChangeNotes} />
        </Box>

        <Box
          w="full"
          display="flex"
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          mt="20px"
        >
          <Button onClick={handleDecrement}> - </Button>
          <Text fontWeight={500}> {amount} </Text>
          <Button onClick={handleIncrement}> + </Button>
        </Box>

        <Box textAlign="right" mb="20px" mt="10px" mr="10px">
          <Button onClick={handleAddToCard}>add to card</Button>
        </Box>
      </ModalContent>
    </Modal>
  );
};

// useState with add button

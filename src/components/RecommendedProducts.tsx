"use client";
import { Carousel } from "@mantine/carousel";
import { Button, Card, Flex, Group, Text, Image, Title } from "@mantine/core";

import useCart from "@/hooks/useCart";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: "Clothing" | "Accessories" | "Electronics";
  image: string;
};
const cartItems: CartItem[] = [
  {
    id: "item-1",
    name: "T-Shirt",
    price: 450, // THB
    quantity: 1,
    category: "Clothing",
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/sub/goods_455359_sub13_3x4.jpg?width=369",
  },
  {
    id: "item-2",
    name: "Hat",
    price: 250,
    quantity: 1,
    category: "Accessories",
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/470010/item/goods_31_470010_3x4.jpg?width=369",
  },
  {
    id: "item-3",
    name: "Hoodie",
    price: 950,
    quantity: 1,
    category: "Clothing",
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/475855/sub/goods_475855_sub13_3x4.jpg?width=369",
  },
  {
    id: "item-4",
    name: "Shoulder Bag",
    price: 650,
    quantity: 1,
    category: "Accessories",
    image:
      "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/483802/sub/thgoods_483802_sub13_3x4.jpg?width=369",
  },
  {
    id: "item-5",
    name: "Sun glasses",
    price: 530,
    quantity: 1,
    category: "Accessories",
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/476538/item/goods_09_476538_3x4.jpg?width=369",
  },
  {
    id: "item-6",
    name: "Shirt",
    price: 1350,
    quantity: 1,
    category: "Clothing",
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/480652/sub/goods_480652_sub13_3x4.jpg?width=369",
  },
  {
    id: "item-7",
    name: "Scarf",
    price: 340,
    quantity: 1,
    category: "Accessories",
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/478313/item/goods_08_478313_3x4.jpg?width=369",
  },
];

const RecommendedProducts = () => {
  const { addCartItem } = useCart();

  return (
    <Flex direction="column" gap={24}>
      <Title order={3}>Recommended Products</Title>
      <Carousel
        slideSize="20%"
        slideGap="md"
        emblaOptions={{ align: "center" }}
      >
        {cartItems.map((item) => (
          <Carousel.Slide key={item.id}>
            <Card padding={12} radius={16} withBorder>
              <Card.Section>
                <Image
                  src={item.image}
                  h={180}
                  miw={180}
                  maw="auto"
                  fit="cover"
                  alt={item.name}
                />
              </Card.Section>
              <Group justify="space-between" my={8}>
                <Text fw={500}>{item.name}</Text>
                <Text>{item.price}</Text>
              </Group>
              <Button
                color="dark"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => addCartItem(item)}
              >
                Quick Add
              </Button>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
};

export default RecommendedProducts;

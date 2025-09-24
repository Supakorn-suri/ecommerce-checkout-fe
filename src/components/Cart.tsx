"use client";
import {
  Flex,
  Group,
  Text,
  Image,
  Paper,
  NumberInput,
  Stack,
  Title,
  ActionIcon,
  Grid,
  ScrollArea,
} from "@mantine/core";
import { IconTrashX } from "@tabler/icons-react";

import useCart from "@/hooks/useCart";
import { CartItem } from "@/contexts";

const CustomerCart = () => {
  const { cartItems, removeCartItem, updateQuantity } = useCart();

  return (
    <Paper w="100%" py={16}>
      <Title order={2}>Your Cart</Title>
      <ScrollArea h={560} scrollbars="y" offsetScrollbars>
        {cartItems.map((item: CartItem) => (
          <Grid
            key={item.id}
            py={16}
            style={{ borderBottom: "1px solid #D1D1D1", paddingBottom: 24 }}
          >
            <Grid.Col span="content">
              <Image
                src={item.image}
                w={140}
                h={140}
                radius={16}
                fit="cover"
                alt={item.name}
              />
            </Grid.Col>
            <Grid.Col span="auto">
              <Stack gap={4}>
                <Group justify="space-between">
                  <Text fw={600} fz={18}>
                    {item.name}
                  </Text>
                  <Text fw={600} fz={18}>
                    ฿{item.price}
                  </Text>
                </Group>
                <Text>Category: {item.category}</Text>
                <Group>
                  <Text>Quantity: </Text>
                  <NumberInput
                    value={item.quantity}
                    maw={100}
                    min={1}
                    allowDecimal={false}
                    placeholder="Quantity"
                    onChange={(quantity: string | number) =>
                      updateQuantity(item.id, Number(quantity))
                    }
                  />
                </Group>
                <Flex justify="end">
                  <ActionIcon
                    variant="subtle"
                    color="red"
                    onClick={() => removeCartItem(item.id)}
                  >
                    <IconTrashX />
                  </ActionIcon>
                </Flex>
              </Stack>
            </Grid.Col>
          </Grid>
        ))}
      </ScrollArea>
    </Paper>
  );
};

export default CustomerCart;

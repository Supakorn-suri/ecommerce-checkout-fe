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
const CustomerCart = () => {
  return (
    <Paper w="100%" py={16}>
      <Title order={2}>Your Cart</Title>
      <ScrollArea h={560} scrollbars="y" offsetScrollbars>
        <Grid
          py={16}
          style={{ borderBottom: "1px solid #D1D1D1", paddingBottom: 24 }}
        >
          <Grid.Col span="content">
            <Image
              src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/sub/goods_455359_sub13_3x4.jpg?width=369"
              w={140}
              h={140}
              radius={16}
              fit="cover"
              alt="T-Shirt"
            />
          </Grid.Col>
          <Grid.Col span="auto">
            <Stack gap={4}>
              <Group justify="space-between">
                <Text fw={600} fz={18}>
                  T-Shirt
                </Text>
                <Text fw={600} fz={18}>
                  ฿450
                </Text>
              </Group>
              <Text>Category: Clothing</Text>
              <Group>
                <Text>Quantity: </Text>
                <NumberInput maw={140} placeholder="Quantity" />
              </Group>
              <Flex justify="end">
                <ActionIcon variant="subtle" color="red">
                  <IconTrashX />
                </ActionIcon>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
      </ScrollArea>
    </Paper>
  );
};

export default CustomerCart;

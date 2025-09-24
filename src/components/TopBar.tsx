import { Avatar, Flex, Group, Title, useMantineTheme } from "@mantine/core";
import { IconShoppingBag, IconShoppingCart } from "@tabler/icons-react";
import React from "react";

const TopBar = () => {
  const theme = useMantineTheme();
  return (
    <Flex
      style={{ borderBottom: `1px solid ${theme.other.borderColor}` }}
      px={16}
      pb={16}
      mb={16}
      justify="space-between"
      align="center"
    >
      <Group>
        <Avatar size={60} color="gray" radius="xl">
          <IconShoppingBag size={32} />
        </Avatar>
        <Title order={4}>Shopping Every Day</Title>
      </Group>
      <IconShoppingCart />
    </Flex>
  );
};

export default TopBar;

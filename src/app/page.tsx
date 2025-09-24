"use client";
import { Container, Flex, Box } from "@mantine/core";

import TopBar from "@/components/TopBar";
import RecommendedProducts from "@/components/RecommendedProducts";
import CustomerCart from "@/components/Cart";

export default function Home() {
  return (
    <Container size="xl" my={24}>
      <Flex direction="column" gap={16}>
        <TopBar />
        <Box>
          Content
          <CustomerCart />
          <Box>{/* Checkout */}</Box>
        </Box>
        <RecommendedProducts />
      </Flex>
    </Container>
  );
}

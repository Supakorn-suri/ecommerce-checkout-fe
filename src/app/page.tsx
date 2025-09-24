"use client";
import { Container, Flex, Grid } from "@mantine/core";

import TopBar from "@/components/TopBar";
import RecommendedProducts from "@/components/RecommendedProducts";
import CustomerCart from "@/components/Cart";
import OrderSummary from "@/components/OrderSummary";
import CartProvider from '@/contexts/CartContext';

export default function Home() {
  return (
    <CartProvider>
      <Container size="xl" my={24}>
        <Flex direction="column" gap={16}>
          <TopBar />

          <Grid>
            <Grid.Col span="auto">
              <CustomerCart />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <OrderSummary />
            </Grid.Col>
          </Grid>

          <RecommendedProducts />
        </Flex>
      </Container>
    </CartProvider>
  );
}

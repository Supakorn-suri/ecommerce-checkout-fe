"use client";
import { Container, Flex, Box } from "@mantine/core";

import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <Container size="xl" my={24}>
      <Flex direction="column" gap={16}>
        <TopBar />
        <Box>
          Content
          <Box>{/* Cart  */}</Box>
          <Box>{/* Checkout */}</Box>
        </Box>
        Footer
        {/* Recommended Products  */}
      </Flex>
    </Container>
  );
}

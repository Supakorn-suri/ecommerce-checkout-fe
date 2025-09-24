"use client";
import { Container, Flex, Box } from "@mantine/core";

export default function Home() {
  return (
    <Container size="xl" my={24}>
      <Flex direction="column" gap={16}>
        {/* TopBar */}
        Top Bar
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

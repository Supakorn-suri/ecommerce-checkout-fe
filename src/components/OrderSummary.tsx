"use client";
import {
  Button,
  Flex,
  Group,
  Text,
  Paper,
  Accordion,
  Divider,
  Stack,
  Title,
  Grid,
  ScrollArea,
  Tooltip,
} from "@mantine/core";
import {
  IconExclamationCircle,
  IconRosetteDiscount,
  IconTicket,
} from "@tabler/icons-react";

const OrderSummary = () => {
  return (
    <Paper w="100%" withBorder radius={16} p={16}>
      <Flex direction="column" justify="space-between" h="100%" gap={16}>
        <Stack gap={8}>
          <Title order={2}>Order Summary</Title>
          <Text fz={12} c="gray">
            * Free Shipping Worldwide.
          </Text>
          <Stack gap={4}>
            <Group justify="space-between">
              <Text fz={20} fw={600}>
                Subtotal
              </Text>
              <Text fz={20} fw={600}>
                ฿350
              </Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray">Discount (Discount 50 THB)</Text>
              <Text c="gray">-฿350</Text>
            </Group>
            <Group justify="space-between">
              <Text c="gray">Discount (15% Off on Clothing)</Text>
              <Text c="gray">-฿350</Text>
            </Group>
          </Stack>
        </Stack>

        <Flex direction="column">
          <Divider />
          <Accordion defaultValue="Campaigns">
            <Accordion.Item value="Campaigns">
              <Accordion.Control p={0}>
                <Group gap={4} align="center">
                  <Text fw={600}>Campaigns</Text>
                  <Tooltip
                    offset={6}
                    color="white"
                    label={
                      <Stack gap={4}>
                        <Grid>
                          <Grid.Col span="content">
                            <IconExclamationCircle color="orange" size={16} />
                          </Grid.Col>
                          <Grid.Col span="auto">
                            <Text fz={12} c="gray">
                              Only one discount per category (e.g. Fixed amount
                              or Percentage).
                            </Text>
                          </Grid.Col>
                        </Grid>
                        <Grid>
                          <Grid.Col span="content">
                            <IconExclamationCircle color="orange" size={16} />
                          </Grid.Col>
                          <Grid.Col span="auto">
                            <Text fz={12} c="gray">
                              Discounts are applied in the following order:
                              Coupon → On Top → Seasonal.
                            </Text>
                          </Grid.Col>
                        </Grid>
                      </Stack>
                    }
                  >
                    <IconExclamationCircle color="gray" size={16} />
                  </Tooltip>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <Flex direction="column">
                  <ScrollArea h={200} scrollbars="y" type="always">
                    <Stack gap={8}>
                      <Paper
                        withBorder
                        display="flex"
                        dir="column"
                        radius="md"
                        style={{ overflow: "hidden" }}
                      >
                        <Group
                          w="200px"
                          mih="60px"
                          p={8}
                          align="center"
                          style={{
                            backgroundColor: "#EBFFF4",
                          }}
                          gap={8}
                        >
                          <IconTicket color="#219538" />
                          <Text c="#219538" fw={700}>
                            Coupon
                          </Text>
                        </Group>
                        <Group px="sm" w="100%" justify="space-between">
                          <Text>Discount ฿50</Text>
                          <Button
                            size="compact-sm"
                            variant="light"
                            color="green"
                          >
                            use
                          </Button>
                        </Group>
                      </Paper>
                      <Paper
                        withBorder
                        display="flex"
                        dir="column"
                        radius="md"
                        style={{ overflow: "hidden" }}
                      >
                        <Group
                          w="200px"
                          mih="60px"
                          p={8}
                          align="center"
                          style={{
                            backgroundColor: "#EBFFF4",
                          }}
                          gap={8}
                        >
                          <IconTicket color="#219538" />
                          <Text c="#219538" fw={700}>
                            Coupon
                          </Text>
                        </Group>
                        <Group px="sm" w="100%" justify="space-between">
                          <Text>Discount ฿50</Text>
                          <Button
                            size="compact-sm"
                            variant="light"
                            color="green"
                          >
                            use
                          </Button>
                        </Group>
                      </Paper>
                      <Paper
                        withBorder
                        display="flex"
                        dir="column"
                        radius="md"
                        style={{ overflow: "hidden" }}
                      >
                        <Group
                          w="200px"
                          mih="60px"
                          p={8}
                          align="center"
                          style={{
                            backgroundColor: "#FFFBEB",
                          }}
                          gap={8}
                        >
                          <IconRosetteDiscount color="#FEBA00" />
                          <Text c="#FEBA00" fw={700}>
                            On Top
                          </Text>
                        </Group>
                        <Group px="sm" w="100%" justify="space-between">
                          <Text>Discount ฿50</Text>
                          <Button
                            size="compact-sm"
                            variant="light"
                            color="green"
                          >
                            use
                          </Button>
                        </Group>
                      </Paper>
                    </Stack>
                  </ScrollArea>
                </Flex>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Flex>
        <Stack>
          <Group justify="space-between">
            <Text fz={20} fw={600}>
              Total
            </Text>
            <Text fz={20} fw={600}>
              ฿50
            </Text>
          </Group>
          <Button radius={12} size="lg" fullWidth color="green">
            Check out
          </Button>
        </Stack>
      </Flex>
    </Paper>
  );
};

export default OrderSummary;

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
  useMantineTheme,
} from "@mantine/core";
import {
  IconExclamationCircle,
  IconRosetteDiscount,
  IconTicket,
} from "@tabler/icons-react";

import useCampaigns, { Campaign, CampaignType } from "@/hooks/useCampaigns";
import useCart from "@/hooks/useCart";

const OrderSummary = () => {
  const { other } = useMantineTheme();
  const { cartItems, clearCart } = useCart();
  const {
    campaigns,
    selectedCampaigns,
    handleSelectCampaign,
    subTotal,
    totalPrice,
    couponDiscount,
    onTopDiscount,
    handleClearCampaign,
  } = useCampaigns({ cartItems });

  const getCampaignStyleByType = (type: CampaignType) => {
    switch (type) {
      case "Coupon":
        return {
          icon: <IconTicket color={other.couponColor} />,
          iconColor: other.couponColor,
          bgColor: other.couponBgColor,
        };
      case "OnTop":
        return {
          icon: <IconRosetteDiscount color={other.onTopColor} />,
          iconColor: other.onTopColor,
          bgColor: other.onTopBgColor,
        };

      default:
        return {
          icon: <IconTicket color={other.couponColor} />,
          iconColor: other.couponColor,
          bgColor: other.couponBgColor,
        };
    }
  };

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
                ฿{subTotal.toFixed(2)}
              </Text>
            </Group>
            {/* Discount */}
            {selectedCampaigns.Coupon && (
              <Group justify="space-between">
                <Text c="gray">{selectedCampaigns.Coupon.discountText}</Text>
                <Text c="gray">-฿{couponDiscount.toFixed(2)}</Text>
              </Group>
            )}
            {selectedCampaigns.OnTop && (
              <Group justify="space-between">
                <Text c="gray">{selectedCampaigns.OnTop.discountText}</Text>
                <Text c="gray">-฿{onTopDiscount.toFixed(2)}</Text>
              </Group>
            )}
          </Stack>
        </Stack>

        {/* Select Campaign */}
        <Flex direction="column">
          <Divider />
          <Accordion defaultValue="Campaigns">
            <Accordion.Item value="Campaigns">
              <Accordion.Control>
                <Group gap={4} align="center">
                  <Text fw={600}>Campaigns</Text>
                  <Tooltip
                    offset={6}
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
                              Coupon → On Top
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
                  <ScrollArea
                    h={220}
                    scrollbars="y"
                    type="always"
                    scrollbarSize={7}
                  >
                    <Stack mb={8} gap={8}>
                      {campaigns.map((campaign: Campaign) => (
                        <Paper
                          key={campaign.id}
                          withBorder
                          display="flex"
                          dir="column"
                          radius={8}
                        >
                          <Group
                            w="200px"
                            mih="60px"
                            p={8}
                            align="center"
                            style={{
                              backgroundColor: getCampaignStyleByType(
                                campaign.type
                              ).bgColor,
                            }}
                            gap={8}
                          >
                            {getCampaignStyleByType(campaign.type).icon}
                            <Text
                              c={
                                getCampaignStyleByType(campaign.type).iconColor
                              }
                              fw={700}
                            >
                              {campaign.typeText}
                            </Text>
                          </Group>
                          <Group
                            py={8}
                            px={12}
                            w="100%"
                            justify="space-between"
                          >
                            <Text fz={14}>{campaign.discountText}</Text>
                            <Button
                              disabled={campaign.disabled}
                              radius={4}
                              size="compact-sm"
                              variant={
                                selectedCampaigns[campaign.type]?.id ===
                                campaign.id
                                  ? "subtle"
                                  : "light"
                              }
                              color={
                                selectedCampaigns[campaign.type]?.id ===
                                campaign.id
                                  ? "red"
                                  : "green"
                              }
                              onClick={() => handleSelectCampaign(campaign)}
                            >
                              {selectedCampaigns[campaign.type]?.id ===
                              campaign.id
                                ? "cancel"
                                : "use"}
                            </Button>
                          </Group>
                        </Paper>
                      ))}
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
              ฿{totalPrice.toFixed(2)}
            </Text>
          </Group>
          <Button
            radius={12}
            size="lg"
            fullWidth
            color="green"
            onClick={() => {
              handleClearCampaign();
              clearCart();
            }}
          >
            Checkout
          </Button>
        </Stack>
      </Flex>
    </Paper>
  );
};

export default OrderSummary;

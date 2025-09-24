import { useState, useMemo, useCallback } from "react";

import { CartItem } from "@/contexts";

interface UseCampaignsProps {
  cartItems: CartItem[];
}

export type CampaignType = "Coupon" | "OnTop";

export interface Campaign {
  id: string;
  type: CampaignType;
  typeText: string;
  discountText: string;
  calculateDiscount: (args: {
    subTotal: number;
    total: number;
    cartItems: CartItem[];
  }) => number;
  disabled: boolean;
}

export const campaigns: Campaign[] = [
  {
    id: "coupon-amount",
    type: "Coupon",
    typeText: "Coupon",
    discountText: "Discount ฿50",
    calculateDiscount: () => 50,
    disabled: false,
  },
  {
    id: "coupon-percentage",
    type: "Coupon",
    typeText: "Coupon",
    discountText: "Discount 10%",
    calculateDiscount: ({ subTotal }) => subTotal * 0.1,
    disabled: false,
  },
  {
    id: "ontop-clothing",
    type: "OnTop",
    typeText: "On Top",
    discountText: "15% Off on Clothing",
    calculateDiscount: ({ cartItems }) =>
      cartItems
        .filter((item) => item.category === "Clothing")
        .reduce((sum, item) => sum + item.price * item.quantity * 0.15, 0),
    disabled: false,
  },
  {
    id: "ontop-accessories",
    type: "OnTop",
    typeText: "On Top",
    discountText: "15% Off on Accessories",
    calculateDiscount: ({ cartItems }) =>
      cartItems
        .filter((item) => item.category === "Accessories")
        .reduce((sum, item) => sum + item.price * item.quantity * 0.15, 0),
    disabled: false,
  },
];

export default function useCampaigns({ cartItems }: UseCampaignsProps) {
  const [selectedCampaigns, setSelectedCampaigns] = useState<
    Partial<Record<CampaignType, Campaign>>
  >({});

  const handleSelectCampaign = (campaign: Campaign) => {
    setSelectedCampaigns((prev: Partial<Record<CampaignType, Campaign>>) => {
      const isAlreadySelected = prev[campaign.type]?.id === campaign.id;

      // unselect campaign
      if (isAlreadySelected) {
        const updated = { ...prev };
        delete updated[campaign.type];
        return updated;
      }

      return { ...prev, [campaign.type]: campaign };
    });
  };

  const handleClearCampaign = () => {
    setSelectedCampaigns({});
  };

  const subTotal = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const calculateDiscounts = useCallback(() => {
    const couponDiscount =
      selectedCampaigns.Coupon?.calculateDiscount({
        subTotal,
        total: subTotal,
        cartItems,
      }) ?? 0;

    const onTopDiscount =
      selectedCampaigns.OnTop?.calculateDiscount({
        subTotal,
        total: subTotal - couponDiscount,
        cartItems,
      }) ?? 0;

    return { couponDiscount, onTopDiscount };
  }, [selectedCampaigns, subTotal, cartItems]);

  const { couponDiscount, onTopDiscount } = calculateDiscounts();

  const totalDiscount = couponDiscount + onTopDiscount;
  const totalPrice = subTotal - totalDiscount;

  const isCampaignDisabled = useCallback(
    (campaign: Campaign): boolean => {
      if (cartItems.length === 0) return true;
      switch (campaign.type) {
        case "OnTop":
          switch (campaign.id) {
            case "ontop-clothing":
              return !cartItems.some((item) => item.category === "Clothing");
            case "ontop-accessories":
              return !cartItems.some((item) => item.category === "Accessories");
            default:
              return false;
          }

        default:
          return false;
      }
    },
    [cartItems, totalPrice]
  );

  const availableCampaigns = useMemo(() => {
    return campaigns.map((campaign) => ({
      ...campaign,
      disabled: isCampaignDisabled(campaign),
    }));
  }, [isCampaignDisabled]);

  return {
    campaigns: availableCampaigns,
    selectedCampaigns,
    handleSelectCampaign,
    subTotal,
    totalPrice,
    couponDiscount,
    onTopDiscount,
    totalDiscount,
    handleClearCampaign,
  };
}

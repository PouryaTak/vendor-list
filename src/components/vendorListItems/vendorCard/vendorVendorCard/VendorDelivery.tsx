import React from "react";
import { VendorCard_delivery } from "@/styles/components/VendorVendorCard.styled";
import { Flex } from "@/styles/utils/Flex.styled";
import { VendorDeliveryProps } from "@/types/props";

export default function VendorDelivery({ deliveryFee }: VendorDeliveryProps) {
  return (
    <Flex $gap="4px">
      <VendorCard_delivery>
        <span>پیک اسنپ‌فود:</span>
        <span>{deliveryFee}</span>
        <span>تومان</span>
      </VendorCard_delivery>
    </Flex>
  );
}

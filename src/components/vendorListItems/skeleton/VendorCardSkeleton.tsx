import React from "react";
import { VendorVendorCardSkeleton, BoxSkeleton, TextSkeleton } from "@/styles/components/CardSkeleton.style";
import { Flex } from "@/styles/utils/Flex.styled";

/**
 * Component for rendering a skeleton loading state for the vendor card.
 * Use it in conjunction with the VendorVendorCard component.
 * @returns {JSX.Element} - The rendered JSX element.
 */
export default function VendorCardSkeleton() {
  return (
    <VendorVendorCardSkeleton>
      <BoxSkeleton />
      <Flex $direction="column" $alignItems="flex-start" $gap="16px">
        <TextSkeleton width="32%" />
        <TextSkeleton width="60%" height="12px" />
        <TextSkeleton width="16%" height="12px" />
      </Flex>
    </VendorVendorCardSkeleton>
  );
}

import React from "react";
import Link from "next/link";
import {
  VendorCard,
  VendorCard_logo,
  VendorCard_title,
  VendorCard_content,
  VendorCard_logoContainer,
  VendorCard_cover,
  VendorCard_cover__image,
} from "@/styles/components/VendorVendorCard.styled";
import { Flex } from "@/styles/utils/Flex.styled";
import VendorRating from "@/components/vendorListItems/listCards/vendorCard/VendorRating";
import VendorDelivery from "@/components/vendorListItems/listCards/vendorCard/VendorDelivery";
import { numberSeparator } from "@/utils/functions";
import { VendorVendor } from "@/types/payload";

/**
 * Component for rendering a vendor card with specific styling and content.
 * This component should be parent of multiple smaller components, to show conditionals and
 * different styling depending on data "which I don't know right know".
 * @param {Object} props - Props containing vendor data.
 * @param {VendorVendor} props.data - The vendor data to be displayed on the card.
 * @returns {JSX.Element} - The rendered JSX element.
 */
export default function VendorCardComponent({ data }: Pick<VendorVendor, "data">): JSX.Element {
  return (
    <Link href="/">
      <VendorCard>
        {/* Render vendor cover image and logo container */}
        <VendorCard_cover>
        {/* Render the vendor cover image */}
          <VendorCard_cover__image src={data.backgroundImage} loading="lazy" alt="vendor background" />
          {/* Render the vendor logo */}
          <VendorCard_logoContainer>
            <VendorCard_logo src={data.logo} alt="vendor logo" loading="lazy" />
          </VendorCard_logoContainer>
        </VendorCard_cover>

        <VendorCard_content>
          {/* Render vendor title and rating */}
          <Flex $justifyContent="space-between" $gap="16px">
            <VendorCard_title>
              <h3>{data.title}</h3>
            </VendorCard_title>
            <VendorRating rate={data.rate} voteCount={numberSeparator(data.voteCount)} />
          </Flex>

          {/* Render delivery information */}
          <Flex $justifyContent="space-between" $gap="16px">
            <VendorDelivery deliveryFee={numberSeparator(data.deliveryFee)} />
          </Flex>
        </VendorCard_content>
      </VendorCard>
    </Link>
  );
}

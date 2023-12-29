import React from "react";
import {
  VendorCard,
  VendorCard_logo,
  VendorCard_coverImage,
  VendorCard_rating,
  VendorCard_rating__votes,
  VendorCard_rating__score,
  VendorCard_title,
  VendorCard_content,
  VendorCard_logoContainer,
  VendorCard_description,
  VendorCard_delivery__type,
  VendorCard_delivery__fee,
  VendorCard_rating__separators,
} from "@/styles/components/VendorVendorCard.styled";
import RateStar from "@/components/icons/RatingStar";
import Link from "next/link";
import { Flex } from "@/styles/utils/Flex.styled";
import { numberSeparator } from "@/utils/functions";
import { VendorVendor } from "@/types/payload";

/**
 * Component for rendering a vendor card with specific styling and content.
 * @param {Object} props - Props containing vendor data.
 * @param {VendorVendor} props.data - The vendor data to be displayed on the card.
 * @returns {JSX.Element} - The rendered JSX element.
 */
export default function VendorCardComponent({ data }: Pick<VendorVendor, "data">): JSX.Element {
  return (
    <Link href="/">
      <VendorCard>
        {/* Render the vendor cover image */}
        <VendorCard_coverImage src={data.backgroundImage} loading="lazy" alt="vendor cover image" />
        <VendorCard_content>
          {/* Render the vendor logo */}
          <VendorCard_logoContainer>
            <VendorCard_logo src={data.logo} alt="vendor logo" loading="lazy" />
          </VendorCard_logoContainer>

          {/* Render vendor title and rating */}
          <Flex $justifyContent="space-between" $gap="16px">
            <VendorCard_title>{data.title}</VendorCard_title>
            <VendorCard_rating>
              <VendorCard_rating__votes>
                {/* Render the vote count with separators */}
                <VendorCard_rating__separators>(</VendorCard_rating__separators>
                <span>{numberSeparator(data.voteCount)}</span>
                <VendorCard_rating__separators>)</VendorCard_rating__separators>
              </VendorCard_rating__votes>

              {/* Render the rating score with a star icon */}
              <VendorCard_rating__score>
                <RateStar /> {/* //? this may not be component and should be icon library or svg loader */}
                <span>{data.rate}</span>
              </VendorCard_rating__score>
            </VendorCard_rating>
          </Flex>

          {/* Render vendor description */}
          <VendorCard_description>{data.description}</VendorCard_description>

          {/* Render delivery information */}
          <Flex $justifyContent="space-between" $gap="16px">
            <Flex $gap="4px">
              <VendorCard_delivery__type>پیک اسنپ‌فود:</VendorCard_delivery__type>
              {/* Render the delivery fee with separators and currency */}
              <VendorCard_delivery__fee>
                <span>{numberSeparator(data.deliveryFee)}</span>
                <span>تومان</span>
              </VendorCard_delivery__fee>
            </Flex>
          </Flex>
        </VendorCard_content>
      </VendorCard>
    </Link>
  );
}

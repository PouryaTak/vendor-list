import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  VendorCard,
  VendorCard_logo,
  VendorCard_coverImage,
  VendorCard_rate,
  VendorCard_rate__votes,
  VendorCard_rate__score,
  VendorCard_title,
  VendorCard_content,
  VendorCard_logoContainer,
  VendorCard_description,
  VendorCard_rate__separators,
  VendorCard_delivery,
} from "@/styles/components/VendorVendorCard.styled";
import RateStar from "@/components/icons/RatingStar";
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
        <VendorCard_coverImage>
          <Image src={data.backgroundImage} loading="lazy" alt="vendor cover image" layout="fill" />
          </VendorCard_coverImage>
        <VendorCard_content>
          {/* Render the vendor logo */}
          <VendorCard_logoContainer>
            <VendorCard_logo src={data.logo} alt="vendor logo" loading="lazy" />
          </VendorCard_logoContainer>

          {/* Render vendor title and rating */}
          <Flex $justifyContent="space-between" $gap="16px">
            <VendorCard_title>
              <h3>{data.title}</h3>
            </VendorCard_title>
            <VendorCard_rate>
              <VendorCard_rate__votes>
                {/* Render the vote count with separators */}
                <VendorCard_rate__separators>(</VendorCard_rate__separators>
                <span>{numberSeparator(data.voteCount)}</span>
                <VendorCard_rate__separators>)</VendorCard_rate__separators>
              </VendorCard_rate__votes>

              {/* Render the rating score with a star icon */}
              <VendorCard_rate__score>
                <RateStar /> {/* //? this may not be component and should be icon library or svg loader */}
                <span>{data.rate}</span>
              </VendorCard_rate__score>
            </VendorCard_rate>
          </Flex>

          {/* Render vendor description */}
          <VendorCard_description>{data.description}</VendorCard_description>

          {/* Render delivery information */}
          <Flex $justifyContent="space-between" $gap="16px">
            <Flex $gap="4px">
              <VendorCard_delivery>
                <span>پیک اسنپ‌فود:</span>
                <span>{numberSeparator(data.deliveryFee)}</span>
                <span>تومان</span>
              </VendorCard_delivery>
            </Flex>
          </Flex>
        </VendorCard_content>
      </VendorCard>
    </Link>
  );
}

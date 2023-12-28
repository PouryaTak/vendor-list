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
} from "@/styles/components/VendorCard.styled";
import RateStar from "@/components/icons/RatingStar";
import Link from "next/link";
import { Flex } from "@/styles/utils/Flex.styled";
import { numberSeparator } from "@/utils/functions";
import { Vendor } from "@/types/payload";

export default function VendorCardComponent({ data }: { data: Vendor }) {
  return (
    <Link href="/">
      <VendorCard>
        <VendorCard_coverImage src={data.backgroundImage} loading="lazy" alt="vendor cover image" />
        <VendorCard_content>
          <VendorCard_logoContainer>
            <VendorCard_logo src={data.logo} alt="vendor logo" loading="lazy" />
          </VendorCard_logoContainer>
          <Flex justifyContent="space-between" gap="16px">
            <VendorCard_title>{data.title}</VendorCard_title>
            <VendorCard_rating>
              <VendorCard_rating__votes>
                <span>({data.voteCount})</span>
              </VendorCard_rating__votes>
              <VendorCard_rating__score>
                <span>{data.rate}</span>
                <RateStar />
              </VendorCard_rating__score>
            </VendorCard_rating>
          </Flex>
          <VendorCard_description>{data.description}</VendorCard_description>
          <Flex justifyContent="space-between" gap="16px">
            <Flex gap="4px">
              <VendorCard_delivery__type>ارسال اکسپرس</VendorCard_delivery__type>
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

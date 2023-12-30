import React from "react";
import {
  VendorCard_rate,
  VendorCard_rate__votes,
  VendorCard_rate__score,
  VendorCard_rate__separators,
} from "@/styles/components/VendorVendorCard.styled";
import Star from "/public/image/star.svg";
import { VendorRatingProps } from "@/types/props";

export default function VendorRating({ rate, voteCount }: VendorRatingProps): JSX.Element {
  return (
    <VendorCard_rate>
      <VendorCard_rate__votes>
        {/* Render the vote count with separators */}
        <VendorCard_rate__separators>(</VendorCard_rate__separators>
        <span>{voteCount}</span>
        <VendorCard_rate__separators>)</VendorCard_rate__separators>
      </VendorCard_rate__votes>

      {/* Render the rating score with a star icon */}
      <VendorCard_rate__score>
        <Star />
        <span>{rate}</span>
      </VendorCard_rate__score>
    </VendorCard_rate>
  );
}

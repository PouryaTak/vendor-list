import React from "react";
import VendorCardSkeleton from "./CardSkeleton";
import { TextSkeleton, TextVendorCardSkeleton } from "@/styles/components/CardSkeleton.style";

/**
 * Component for rendering a skeleton list for vendors.
 * Mainly used as initial list load, where the TEXT vendor card is rendered on top.
 * @returns {JSX.Element} - The rendered JSX element.
 */

export default function VendorListSkeleton() {
  return (
    <>
    {/* Render a skeleton for the TEXT vendor card */}
      <TextVendorCardSkeleton>
        <TextSkeleton width="36%" height="24px" />
      </TextVendorCardSkeleton>
      {/* Render some VendorCard skeleton */}
      <VendorCardSkeleton />
      <VendorCardSkeleton />
      <VendorCardSkeleton />
      <VendorCardSkeleton />
      <VendorCardSkeleton />
    </>
  );
}

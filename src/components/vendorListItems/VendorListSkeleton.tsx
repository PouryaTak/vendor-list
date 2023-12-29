import React from "react";
import VendorCardSkeleton from "./VendorCardSkeleton";
import { TextSkeleton, TextVendorCardSkeleton } from "@/styles/components/CardSkeleton.style";

export default function VendorListSkeleton() {
  return (
    <>
      <TextVendorCardSkeleton>
        <TextSkeleton width="16%" height="24px" />
      </TextVendorCardSkeleton>
      <VendorCardSkeleton />
      <VendorCardSkeleton />
      <VendorCardSkeleton />
      <VendorCardSkeleton />
    </>
  );
}

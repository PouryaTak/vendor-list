import { VendorVendorCardSkeleton, BoxSkeleton, TextSkeleton } from "@/styles/components/CardSkeleton.style";
import React from "react";

export default function VendorCardSkeleton() {
  return (
    <VendorVendorCardSkeleton>
      <BoxSkeleton />
      <TextSkeleton width="20%" />
      <TextSkeleton width="60%" />
      <TextSkeleton width="16%" />
    </VendorVendorCardSkeleton>
  );
}

import React from "react";
import VendorListSkeleton from "./VendorListSkeleton";
import VendorCardSkeleton from "./VendorCardSkeleton";
import { VendorLoadingHandlerProps } from "@/types/props";

export default function VendorLoadingHandler({ isLoading, page }: VendorLoadingHandlerProps) {
  if (isLoading && page === 0) {
    return <VendorListSkeleton />;
  }

  if (isLoading && page > 0) {
    return <VendorCardSkeleton />;
  }

  return null;
}

import React from "react";
import VendorListSkeleton from "./skeletons/ListSkeleton";
import VendorCardSkeleton from "./skeletons/CardSkeleton";
import { VendorSkeletonHandlerProps } from "@/types/props";

/**
 * This component handles the loading state of the vendor list.
 * @param VendorSkeletonHandlerProps
 * @returns {JSX.Element | null}
 */
export default function VendorSkeletonHandler({ isLoading, page }: VendorSkeletonHandlerProps): JSX.Element | null {
  if (!isLoading) return null;

  // if page is 0, render the list skeleton ( initial load ) else render the card skeleton
  return page > 0 ? <VendorCardSkeleton /> : <VendorListSkeleton />;
}

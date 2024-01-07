import React from "react";
import VendorCardHandler from "@/components/vendorListItems/VendorCardHandler";
import VendorSkeletonHandler from "@/components/vendorListItems/VendorSkeletonHandler";
import GeneralError from "@/components/GeneralError";
import { VendorListProps } from "@/types/props";
import { Vendor } from "@/types/payload";

/**
 * Component for rendering a list of vendors along with loading indicators or error messages.
 * @param {VendorListProps} props - Props containing vendor data, loading state, error state, and page index.
 * @returns {JSX.Element} - The rendered JSX element.
 */
export default function VendorList(props: VendorListProps): JSX.Element {
  const { vendors, isLoading, hasError, page, isLastPage } = props;
  
  // Render an error message if an error occurred during data fetching
  // This may not belongs here
  if (hasError) return <GeneralError />;

  return (
    <div>
      {/* Rendering list */}
      {vendors.map((vendor: Vendor) => {
        return <VendorCardHandler key={vendor.type === "TEXT" ? vendor.data : vendor.data.id} {...vendor} />;
      })}
      {/* handling loading skeleton */}
      <VendorSkeletonHandler isLoading={isLoading} page={page} />
      {/* show the indicator of end of the list */}
      {isLastPage && <span>اینجا آخر خطه</span>}
    </div>
  );
}

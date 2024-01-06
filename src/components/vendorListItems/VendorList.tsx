import React from "react";
import VendorCardHandler from "@/components/vendorListItems/VendorCardHandler";
import VendorLoadingHandler from "@/components/vendorListItems/VendorLoadingHandler";
import Error from "@/components/Error";
import { VendorListProps } from "@/types/props";
import { Vendor } from "@/types/payload";

/**
 * Component for rendering a list of vendors along with loading indicators or error messages.
 * @param {VendorListProps} props - Props containing vendor data, loading state, error state, and page index.
 * @returns {JSX.Element} - The rendered JSX element.
 */
export default function VendorList({ vendors, isLoading, hasError, page, isLastPage }: VendorListProps): JSX.Element {
  // Render an error message if an error occurred during data fetching
  if (hasError) return <Error />;

  return (
    <div>
      {/* Rendering list */}
      {vendors.map((vendor: Vendor) => {
        return <VendorCardHandler key={vendor.type === "TEXT" ? vendor.data : vendor.data.id} {...vendor} />;
      })}
      {/* handling loading skeleton */}
      <VendorLoadingHandler isLoading={isLoading} page={page} />
      {/* show the indicator of end of the list */}
      {isLastPage && <span>اینجا آخر خطه</span>}
    </div>
  );
}

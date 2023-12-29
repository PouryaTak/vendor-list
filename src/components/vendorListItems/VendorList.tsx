import React from "react";
import VendorCardPresenter from "@/components/vendorListItems/CardPresenter";
import VendorLoadingHandler from "@/components/vendorListItems/VendorLoadingHandler";
import { Vendor } from "@/types/payload";
import { VendorListProps } from "@/types/props";

/**
 * Component for rendering a list of vendors along with a loading indicator.
 * @param {VendorListProps} props - Props containing vendor data, loading state, and page index.
 * @returns {JSX.Element} - The rendered JSX element.
 */
export default function VendorList({ vendors, isLoading, page }: VendorListProps): JSX.Element {
  return (
    <div>
      {/* Map through the list of vendors and render VendorCardPresenter for each */}
      {vendors.map((vendor: Vendor, index: number) => {
        return <VendorCardPresenter key={vendor.type + index} {...vendor} />;
      })}

      {/* Render the loading indicator component */}
      <VendorLoadingHandler isLoading={isLoading} page={page} />
    </div>
  );
}

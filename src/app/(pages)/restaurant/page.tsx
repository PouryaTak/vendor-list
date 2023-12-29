"use client";
import React from "react";
import useFetchVendors from "@/hooks/useFetchVendors";
import VendorList from "@/components/vendorListItems/VendorList";

export default function Restaurants() {
  const { vendors, isLoading, hasError, page } = useFetchVendors();

  return (
    <main>
      {/* Using Container-Presenter Pattern to separate concerns */}
      <VendorList vendors={vendors} isLoading={isLoading} page={page} hasError={hasError} />
    </main>
  );
}

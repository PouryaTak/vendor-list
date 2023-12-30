"use client";
import React from "react";
import useFetchVendors from "@/hooks/useFetchVendors";
import VendorList from "@/components/vendorListItems/VendorList";

export default function Restaurants() {
  // Using Container-Presenter Pattern to separate concerns. Adhering to SRP principle
  const { vendors, isLoading, hasError, page, isLastPage } = useFetchVendors();

  return (
    <main>
      <VendorList vendors={vendors} isLoading={isLoading} page={page} hasError={hasError} isLastPage={isLastPage} />
    </main>
  );
}

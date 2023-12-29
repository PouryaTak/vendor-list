"use client";
import React from "react";
import useFetchVendors from "@/hooks/useFetchVendors";
import VendorList from "@/components/vendorListItems/VendorList";

export default function Restaurants() {
  const { vendors, isLoading, page } = useFetchVendors();

  return (
    <main>
      <VendorList vendors={vendors} isLoading={isLoading} page={page} />
    </main>
  );
}

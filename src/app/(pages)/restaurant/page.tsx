"use client";
import React from "react";
import useFetchVendors from "@/hooks/useFetchVendors";
import VendorList from "@/components/VendorList";

export default function Restaurants() {
  // Using Container-Presenter Pattern to separate concerns. Adhering to SRP principle
  const props = useFetchVendors();

  return (
    <main>
      <VendorList {...props} />
    </main>
  );
}

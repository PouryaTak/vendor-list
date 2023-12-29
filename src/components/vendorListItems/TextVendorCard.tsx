import { TextVendorCardContent } from "@/styles/components/TextVendorCard.style";
import { TextVendor } from "@/types/payload";
import React from "react";

export default function TextVendorCard({data}: Pick<TextVendor, "data">) {
  return (
    <TextVendorCardContent>
      <h2>{data}</h2>
    </TextVendorCardContent>
  );
}

import { Vendor } from '@/types/payload';
import React, { memo } from 'react';
import VendorVendorCard from './listCards/vendorCard';
import TextVendorCard from './listCards/TextCard';

// Define the components for each type. Based on OCP principle.
const VendorCardItems: Record<string, React.FC<any>> = {
  VENDOR: VendorVendorCard,
  TEXT: TextVendorCard,
};

/**
 * Component for presenting a vendor card based on its type.
 * @param {Vendor} props - Props containing vendor data and type.
 * @returns {JSX.Element | null} - The rendered JSX element or null if the type is not recognized.
 */
const VendorCardHandler = (props: Vendor): JSX.Element | null => {

  const { data, type } = props;
  const SelectedComponent = type ? VendorCardItems[type] : null;

  // If type is recognized, render the selected component.
  return SelectedComponent ? <SelectedComponent data={data} /> : null;
}

// using memo to prevent rerendering previously fetched cards
export default memo(VendorCardHandler)

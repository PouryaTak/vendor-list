import { Vendor } from '@/types/payload';
import React from 'react';
import VendorVendorCard from './VendorVendorCard';
import TextVendorCard from './TextVendorCard';

// Define the components for each type
const VendorCardItems: Record<string, React.FC<any>> = {
  VENDOR: VendorVendorCard,
  TEXT: TextVendorCard,
};

/**
 * Component for presenting a vendor card based on its type.
 * @param {Vendor} props - Props containing vendor data and type.
 * @returns {JSX.Element | null} - The rendered JSX element or null if the type is not recognized.
 */
export default function VendorCardPresenter(props: Vendor): JSX.Element | null {
  const { data, type } = props;
  const SelectedComponent = type ? VendorCardItems[type] : null;

  // If type is recognized, render the selected component
  return SelectedComponent ? <SelectedComponent data={data} /> : null;
}

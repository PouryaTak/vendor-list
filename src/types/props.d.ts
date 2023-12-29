import { Vendor } from "./payload";

export type VendorLoadingHandlerProps = {
  isLoading: boolean;
  page: number;
};

export type VendorListProps = {
  vendors: Vendor[];
  isLoading: boolean;
  page: number;
};

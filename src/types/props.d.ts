import { Vendor } from "./payload";

export type VendorLoadingHandlerProps = {
  isLoading: boolean;
  page: number;
};

export type VendorListProps = {
  vendors: Vendor[];
  isLoading: boolean;
  hasError: boolean;
  page: number;
  isLastPage: boolean;
};

export type useFetchVendorsReturnType = {
  vendors: Vendor[];
  isLoading: boolean;
  hasError: boolean;
  page: number;
  isLastPage: boolean;
}

export type VendorRatingProps = {
  rate: number;
  voteCount: string;
}

export type VendorDeliveryProps = {
  deliveryFee: string
}

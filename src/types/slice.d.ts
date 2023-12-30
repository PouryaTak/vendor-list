export type SliceActionType = {
    vendorSlice: VendorListSliceType;
};

export type VendorListSliceType = {
    vendors: Vendor[];
    page: number;
    isLoading: boolean;
    hasError: boolean;
    isLastPage: boolean;
};

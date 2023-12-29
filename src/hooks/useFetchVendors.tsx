import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { fetchVendors } from "@/store/thunks/fetchVendorsThunk";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { SliceActionType, VendorListSliceType } from "@/types/slice";

/**
 * Custom React hook for fetching vendor data with Redux integration and infinite scrolling.
 * @returns {Object} An object containing vendor data, loading state, error state, and page index.
 * @property {Array} vendors - An array containing the fetched vendor data.
 * @property {boolean} isLoading - A flag indicating whether the data is currently being loaded.
 * @property {boolean} hasError - A flag indicating whether an error occurred during the data fetching process.
 * @property {number} page - The current page index of the fetched data.
 */

export default function useFetchVendors(): VendorListSliceType {
  const dispatch = useDispatch<AppDispatch>();

  // Selecting relevant state from the Redux store
  const { vendors, isLoading, hasError, page } = useSelector<SliceActionType, VendorListSliceType>(
    (state) => state.vendorSlice
  );

  // Using the useInfiniteScroll hook to trigger fetching more data on scroll
  useInfiniteScroll(() => dispatch(fetchVendors(page)), isLoading);

  // Fetching initial vendor data on component mount
  React.useEffect(() => {
    dispatch(fetchVendors(0));
  }, [dispatch]);

  // Returning the relevant state for consumption by components
  return { vendors, isLoading, hasError, page };
}

import { createSlice } from "@reduxjs/toolkit";
import { VendorListSliceType } from "@/types/slice";
import { fetchVendors } from "../thunks/fetchVendorsThunk";
import { QUERY } from "@/statics/constants";

// Initial state for the vendor list slice
const initialState: VendorListSliceType = {
  vendors: [],
  page: QUERY.initial_page,
  isLoading: true,
  hasError: false,
  isLastPage: false,
};

// Create a Redux slice for the vendor list
const vendorSlice = createSlice({
  name: "vendorList",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state when fetching vendors
    builder.addCase(fetchVendors.pending, (state) => {
      return { ...state, isLoading: true };
    });

    // Handle the fulfilled state when vendors are successfully fetched
    builder.addCase(fetchVendors.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        page: state.page + 1,
        vendors: [...state.vendors, ...action.payload.data.finalResult],
        isLastPage: Math.floor(action.payload.data.count / QUERY.page_size) <= state.page,
      };
    });

    // Handle the rejected state when there is an error fetching vendors
    builder.addCase(fetchVendors.rejected, (state) => {
      return { ...state, isLoading: false, hasError: true };
    });
  },
});

// Export Redux actions and reducer from the vendor list slice
export const {} = vendorSlice.actions;
export default vendorSlice.reducer;

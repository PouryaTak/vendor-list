import { createSlice } from "@reduxjs/toolkit";
import { VendorListSliceType } from "@/types/slice";
import { fetchVendors } from "../thunks/fetchVendorsThunk";

// Initial state for the vendor list slice
const initialState: VendorListSliceType = {
  vendors: [],
  page: 0,
  isLoading: true,
  hasError: false
};

// Create a Redux slice for the vendor list
const vendorSlice = createSlice({
  name: "vendorList",
  initialState: initialState,
  reducers: {
    /**
     * Redux action to set the page index for vendor pagination.
     * @param {Object} state - The current state of the vendor list slice.
     * @param {Object} action - The action containing the new page index.
     * @param {number} action.payload.page - The new page index.
     * @returns {Object} - The updated state with the new page index.
     */
    setPage: (state, action) => {
      return { ...state, page: action.payload.page };
    },
  },
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
        vendors: [...state.vendors, ...action.payload.data.finalResult]
      };
    });

    // Handle the rejected state when there is an error fetching vendors
    builder.addCase(fetchVendors.rejected, (state) => {
      return { ...state, isLoading: false, hasError: true };
    });
  },
});

// Export Redux actions and reducer from the vendor list slice
export const { setPage } = vendorSlice.actions;
export default vendorSlice.reducer;

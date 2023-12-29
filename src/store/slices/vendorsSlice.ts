import { createSlice } from "@reduxjs/toolkit";
import { VendorListSliceType } from "@/types/slice";
import { fetchVendors } from "../thunks/fetchVendorsThunk";

const initialState: VendorListSliceType = {
  vendors: [],
  page: 0,
  isLoading: true,
  hasError: false
};

const vendorSlice = createSlice({
  name: "vendorList",
  initialState: initialState,
  reducers: {
    setVendorsPagination: (state, action) => {
      return { ...state, page: action.payload.page };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVendors.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchVendors.fulfilled, (state, action) => {
      return { ...state, isLoading: false, page: state.page + 1, vendors: [...state.vendors, ...action.payload.data.finalResult] };
    });
    builder.addCase(fetchVendors.rejected, (state) => {
      return { ...state, isLoading: false, hasError: true };
    });
  },
});

export const { setVendorsPagination } = vendorSlice.actions;
export default vendorSlice.reducer;

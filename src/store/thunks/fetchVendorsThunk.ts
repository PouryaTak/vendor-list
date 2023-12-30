import { fetchVendorsApi } from "@/api/ApiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Redux Thunk action for fetching vendors asynchronously.
 * @param {number} page - The page index for paginated data fetching.
 * @returns {Promise} A Promise that resolves with the fetched data.
 */
export const fetchVendors = createAsyncThunk("vendors/fetchVendors", async (page: number) => {
  return await fetchVendorsApi(page)
});


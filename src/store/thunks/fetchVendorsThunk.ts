import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Redux Thunk action for fetching vendors asynchronously.
 * @param {number} page - The page index for paginated data fetching.
 * @returns {Promise} A Promise that resolves with the fetched data.
 */
export const fetchVendors = createAsyncThunk("vendors/fetchVendors", async (page: number) => {
  try {
    // Fetch vendor data from the specified API endpoint
    const response = await fetch(
      `https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=10&lat=35.754&long=51.328`
    );

    // Parse the response as JSON
    const data = await response.json();

    // Return the fetched data
    return data;
  } catch (error) {
    // Handle errors during data fetching
    console.error("Error fetching vendors:", error);
    // You may choose to throw the error or return a default value as needed
    throw error;
  }
});

//! It has to be separate api interface with it's own response and error handler.

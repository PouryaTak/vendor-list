import { QUERY } from "@/statics/constants";

/**
 * !It has to be separate api interface with it's own response and error handler.
 * !I could make structured api function / class but I don't want to do that now.
 */
export const fetchVendorsApi = async (page: number) => {
  try {
    // Fetch vendor data from the specified API endpoint
    const response = await fetch(
      `https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=${
        QUERY.page_size
      }&lat=${QUERY.lat}&long=${QUERY.long}`
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
};

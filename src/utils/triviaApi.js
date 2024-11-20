const BASE_URL = "https://opentdb.com";

/**
 * Fetch trivia categories from the Open Trivia Database.
 * @returns {Promise<Array>} A promise that resolves to an array of trivia categories.
 */
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api_category.php`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.trivia_categories;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
};

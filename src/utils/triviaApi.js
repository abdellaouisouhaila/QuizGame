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

/**
 * Fetch trivia categoriy detail from the Open Trivia Database.
 * @returns {Promise<Array>} A promise that resolves to an array of trivia categories.
 */
export const fetchCategoryDetails = async (categoryId, questionCount = 10, attempt = 1) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api.php?amount=${questionCount}&category=${categoryId}&type=multiple`
      );
  
      if (response.status === 429) {
        console.warn("Too many requests. Retrying...");
        const delay = Math.pow(2, attempt) * 1000;
        console.log(`Retrying in ${delay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchCategoryDetails(categoryId, questionCount, attempt + 1);
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch category details: ${response.status}`);
      }
  
      const data = await response.json();
      
      const today = new Date();
      const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  
      const categoryDetails = {
        categoryId,
        name: data.results[0]?.category || "Unknown Category",
        questionCount: data.results.length,
        questions: data.results,
        date: todayDate, 
        timeLimit: "30 Mins", 
        attempts: "Once",
        points: "200 Points",
      };
  
      return categoryDetails;
    } catch (error) {
      console.error("Error fetching category details:", error);
      throw error;
    }
  };
  
  

// client/src/api/searchapi.js
export const searchBooks = async (query) => {
  try {
    const res = await fetch(`http://localhost:5000/api/search?q=${query}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error during search:", err);
    return [];
  }
};

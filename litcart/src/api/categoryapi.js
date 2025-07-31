export const fetchBooksByCategory = async (categoryName) => {
  try {
    const res = await fetch(`http://localhost:5000/api/books/category/${categoryName}`);
    if (!res.ok) {
      throw new Error('Category not found');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching books by category:", err);
    return [];
  }
};

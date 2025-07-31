const fs = require('fs');
const path = require('path');

const searchBooks = (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const cookbooksPath = path.join(__dirname, '../Data/cookbooks.json');
  const newArrivalsPath = path.join(__dirname, '../Data/newarrivals.json');

  try {
    const cookbooksData = JSON.parse(fs.readFileSync(cookbooksPath, 'utf-8'));
    const newArrivalsData = JSON.parse(fs.readFileSync(newArrivalsPath, 'utf-8'));

    // Combine both JSON arrays
    const allBooks = [...cookbooksData, ...newArrivalsData];

    // Filter by title or category match
    const filtered = allBooks.filter(book =>
      book.title?.toLowerCase().includes(query) ||
      book.category?.toLowerCase().includes(query)
    );

    res.status(200).json(filtered);
  } catch (err) {
    console.error("Error during search:", err);
    res.status(500).json({ error: "Server error while reading or parsing JSON files" });
  }
};

module.exports = { searchBooks };

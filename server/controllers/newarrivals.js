const fs = require('fs');
const path = require('path');

exports.getNewArrivals = (req, res) => {
    const filePath = path.join(__dirname, '../data/newarrivals.json');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err){
            console.error('Error reading JSON:', err);
            return res.status(500).json({message: 'Failed to load books'});
        }

        let books = JSON.parse(data);

        books = books.map((book, index) => ({
            ...book,
            _id: `newarrivals-${book["S.NO"]?.toString() || (index+1).toString()}`
        }));

        res.status(200).json(books);
    });
};

//Get book by ID
/*exports.getBookById = (req, res) =>{
    const filepath = path.join(__dirname,'../Data/newarrivals.json');
    const requestedId = req.params.id;

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err){
            console.error('Error reading JSON:', err);
            return res.status(500).json({message: 'Failed to load book'});
        }

        let books = JSON.parse(data);
        
        books=books.map((book, index) => ({
            ...book, 
            _id:book["S.NO"]?.toString() || (index+1).toString()
        }));

        const book = books.find(b=>b._id === requestedId);

        if(!book){
            return res.status(404).json({message: "Book not found"});
        }

        res.status(200).json(book);
    });
};*/
exports.getBookById = (req, res) => {
  const requestedId = req.params.id;
  const dataFolderPath = path.join(__dirname, '../data');

  fs.readdir(dataFolderPath, (err, files) => {
    if (err) {
      console.error("Error reading data directory:", err);
      return res.status(500).json({ message: "Failed to read data directory" });
    }

    let foundBook = null;
    let filesProcessed = 0;

    files.forEach((file) => {
      const filePath = path.join(dataFolderPath, file);
      const filePrefix = path.basename(file, '.json');

      fs.readFile(filePath, 'utf-8', (err, data) => {
        filesProcessed++;

        if (!err) {
          let books = JSON.parse(data);

          books = books.map((book, index) => ({
            ...book,
            _id: `${filePrefix}-${book["S.NO"]?.toString() || (index + 1).toString()}`
          }));

          const book = books.find((b) => b._id === requestedId);

          if (book && !foundBook) {
            foundBook = book;
            return res.status(200).json(book);
          }
        }

        if (filesProcessed === files.length && !foundBook) {
          return res.status(404).json({ message: "Book not found" });
        }
      });
    });
  });
};

//bookcategory

exports.getBooksByCategory = (req, res) => {
  const { categoryName } = req.params;
 
  const filePath = path.join(__dirname, `../data/${categoryName}.json`);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(404).json({ error: 'Category not found' });
    }
    let books = JSON.parse(data);
    books = books.map((book, index) => ({
      ...book,
      _id: `${categoryName}-${book["S.NO"]?.toString() || (index+1).toString()}`
    }));
    res.json(books);
  });
};

// Get single book by ID from a specific category
exports.getBooksByCategoryById = (req, res) => {
  const { categoryName, _id } = req.params;
  console.log("👉 Received from frontend:");
  console.log("categoryName:", categoryName);
  console.log("_id:", _id);
  const filePath = path.join(__dirname, `../data/${categoryName}.json`);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(404).json({ error: 'Category not found' });
    }

    let books = JSON.parse(data);

    books = books.map((book, index) => ({
      ...book,
      _id: `${categoryName}-${book["S.NO"]?.toString() || (index + 1).toString()}`
    }));

    const book = books.find(b => b._id === _id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found in this category' });
    }

    res.status(200).json(book);
  });
};

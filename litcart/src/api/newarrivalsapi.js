export const fetchNewArrivals = async() => {
    try {
        const response = await fetch('http://localhost:5000/api/books/newarrivals');
        if(!response.ok){
            throw new Error('Failed to fetch ');
        }

        const data = await response.json();
        return data;
    }catch (err){
        console.error("API Error: ", err);
        return [];
    }
};
export const addToCart = async (userId, item) => {
  try {
    const res = await fetch(`http://localhost:5000/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ userId, item }),
      quantity: type === "increment" ? "increase" : "decrease",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Add to cart failed:", error);
  }
};

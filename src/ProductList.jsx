import { useState } from "react";

function ProductList() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "iPhone 15", category: "Mobile", price: 70000 },
    { id: 2, name: "Samsung S24", category: "Mobile", price: 65000 },
    { id: 3, name: "HP Laptop", category: "Laptop", price: 55000 },
    { id: 4, name: "Dell Laptop", category: "Laptop", price: 60000 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default ProductList;
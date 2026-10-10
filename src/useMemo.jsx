
import { useState, useCallback, useMemo, memo } from "react";

const ProductRow = memo(function ProductRow({ product, onSelect }) {
  console.log("Rendering:", product.name);

  return (
    <div>
      <span>{product.name}</span>

      <button onClick={() => onSelect(product.id)}>
        Select
      </button>
    </div>
  );
});

export default function Page({ products = [] }) {
  const [text, setText] = useState("");

  // Keep the function reference stable
  const handleSelect = useCallback((id) => {
    console.log("Selected product:", id);
  }, []);

  // Sort products only when the products prop changes
  const sortedProducts = useMemo(() => {
    const safeProducts = Array.isArray(products)
      ? products
      : [];

    return [...safeProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [products]);

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />

      {sortedProducts.map((p) => (
        <ProductRow
          key={p.id}
          product={p}
          onSelect={handleSelect}
        />
      ))}
    </>
  );
}

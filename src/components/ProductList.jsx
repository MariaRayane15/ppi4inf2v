import styles from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";
import { Product } from "./Product";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../service/CartContext";

export function ProductList() {
  const { products, loading, error } = useContext(CartContext);
  const [filtered, setFiltered] = useState([]);
  const searchInput = useRef(null);

  function handleSearch() {
    const searchTerm = searchInput.current.value.toLowerCase();
    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setFiltered(filteredResults);
  }

  function handleClear() {
    searchInput.current.value = "";
    setFiltered([]);
  }

  const displayProducts = filtered.length > 0 ? filtered : products;

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search products..."
          ref={searchInput}
          onChange={handleSearch}
        />
        <button onClick={handleClear}>CLEAR</button>
      </div>

      <div className={styles.grid}>
        {displayProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {loading && (
        <div>
          <CircularProgress
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{ color: "#001111" }}
          />
          <p>Loading products...</p>
        </div>
      )}
      {error && <p>Error loading products: {error.message}</p>}
    </div>
  );
}
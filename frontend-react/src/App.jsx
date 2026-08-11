import { useEffect, useState } from "react";

// SaaS Platform: React only calls the /api/customer/* namespace.
// The Angular admin app only calls /api/admin/*.
export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/customer/products")
      .then((r) => r.json())
      .then((data) => setProducts(data.products))
      .catch(() => setProducts([]));
  }, []);

  return (
    <div>
      <h1>SaaS Platform — Customer App (React)</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

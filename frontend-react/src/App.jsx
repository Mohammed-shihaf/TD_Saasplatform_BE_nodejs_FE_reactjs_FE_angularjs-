import { useEffect, useState } from "react";
import PlanCard from "./components/PlanCard";
import Filters from "./components/Filters";

// SaaS Platform: React only calls the /api/customer/* namespace.
// The Angular admin app only calls /api/admin/*. Both also share the
// non-namespaced /api/plans catalog.
export default function App() {
  const [products, setProducts] = useState([]);
  const [plans, setPlans] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/customer/products")
      .then((r) => r.json())
      .then((data) => setProducts(data.products))
      .catch(() => setProducts([]));
    fetch("/api/plans")
      .then((r) => r.json())
      .then((data) => setPlans(data.plans))
      .catch(() => setPlans([]));
  }, []);

  const visible = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <h1>SaaS Platform — Customer App (React)</h1>
      <Filters query={query} onChange={setQuery} />
      <ul>
        {visible.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
      <h2>Plans</h2>
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}

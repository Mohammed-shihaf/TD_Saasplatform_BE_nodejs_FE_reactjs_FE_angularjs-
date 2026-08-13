import PropTypes from "prop-types";
import { formatDiscount } from "../plans";

export default function PlanCard({ plan }) {
  return (
    <div>
      <h3>{plan.name}</h3>
      <p>{formatDiscount(plan.discountPercent)}</p>
    </div>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.shape({ name: PropTypes.string, discountPercent: PropTypes.number }).isRequired,
};

import PropTypes from "prop-types";

export default function Filters({ query, onChange }) {
  return (
    <input
      type="search"
      placeholder="Filter products…"
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

Filters.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const CounterAction = ({ label, onClick }) => {
  return (
    <button className="button is-link" onClick={onClick}>
      {label}
    </button>
  );
};

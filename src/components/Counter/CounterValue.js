export const CounterValue = ({ value }) => {
  console.log('COUNTER VALUE RERENDER...');
  return (
    <div className="column">
      <h2 className="is-size-4"> Magazine Counter - {value}</h2>
    </div>
  );
};

import { memo } from 'react';

const CounterTitle = () => {
  console.log('new title rerender...');
  return (
    <div className="column">
      <h2 className="is-size-4"> new product</h2>
    </div>
  );
};

export default memo(CounterTitle);

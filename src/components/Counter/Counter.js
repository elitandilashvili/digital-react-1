import PropTypes from 'prop-types';

import { CounterValue } from '.';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import CounterTitle from './CounterTitle';
import { CounterAction } from '../Counter/counterAction';

export function Counter({ initialValue }) {
  const [count, setCount] = useLocalStorage('counter', initialValue);

  const addNumber = () => {
    setCount(count + 1);
  };
  const resetNumber = () => {
    setCount(0);
  };

  const subtractNumber = () => {
    setCount(count - 1);
  };

  const handleClick = (value) => {
    setCount(count + value);
  };
  console.log('COUNTER RE RENDER...');

  return (
    <div className=" columns is-flex-direction-column">
      <CounterValue value={count} />

      <div className="column">
        <button className="button is-primary" onClick={addNumber}>
          +
        </button>

        <button className="button is-yellow mx-2" onClick={resetNumber}>
          0
        </button>

        <button className="button is-warning" onClick={subtractNumber}>
          -
        </button>
      </div>

      <div className="column">
        <CounterAction label="3" />
        {/* <button className="button is-link" onClick={() => handleClick(4)}>
          +3
        </button> */}

        <button className="button is-danger mx-2" onClick={resetNumber}>
          0
        </button>
        <button className="button is-link" onClick={() => handleClick(-3)}>
          -3
        </button>
      </div>
    </div>
  );
}

Counter.defaultProps = {
  initialValue: 0,
};

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

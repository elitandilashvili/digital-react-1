import { Counter } from '../../components/Counter/Counter';
import { UseFetch } from '../../hooks/useFetch';

const values = [100, 200, 500];

export function Home(props) {
  const todoRequest = UseFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (todoRequest.loading) {
    return null;
  }

  return (
    <div className="columns my-5 is-flex-direction-column">
      <h2 className="title">This is home Page</h2>

      {values.map((number) => {
        return <Counter initialValue={number} key={`number-${number}`} />;
      })}
    </div>
  );
}
